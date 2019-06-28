import React from "react";
import PropTypes from "prop-types";

/* Joseph htw */

/* https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver */

let io;
const listeners = [];

function getIO(rootMargin = "-50px") {
  if (
    typeof io === "undefined" &&
    typeof window !== "undefined" &&
    window.IntersectionObserver
  ) {
    io = new window.IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          listeners.forEach(l => {
            if (l[0] === entry.target) {
              if (entry.isIntersecting || entry.intersectionRatio > 0) {
                l[1](true);
              } else if (
                !entry.isIntersecting ||
                entry.intersectionRatio <= 0
              ) {
                l[1](false);
              }
            }
          });
        });
      },
      { rootMargin }
    );
  }

  return io;
}

const listenToIntersections = (el, cb, rm) => {
  const io = getIO(rm);
  io.observe(el);
  listeners.push([el, cb]);
  return io;
};

export default class IO extends React.Component {
  constructor() {
    super();

    this.state = {
      IOSupported: false,
      isVisible: false,
      hasBeenVisible: false
    };
  }

  async componentDidMount() {
    /* Defaults */
    let IOSupported = false;
    let isVisible = true;
    let hasBeenVisible = true;

    /* Polyfill */
    if (typeof window !== "undefined" && !window.IntersectionObserver) {
      await import("intersection-observer").then(() => {
        console.log("IntersectionObserver polyfill injected.");
      });
    }

    /* If browser supports intersection observer */
    if (typeof window !== "undefined" && window.IntersectionObserver) {
      isVisible = false;
      hasBeenVisible = false;
      IOSupported = true;
    }

    this.setState(
      {
        IOSupported,
        isVisible,
        hasBeenVisible
      },
      this.listenToIntersections
    );
  }

  listenToIntersections = () => {
    this.io = listenToIntersections(
      this.ref,
      isVisible => {
        this.setState(state => {
          let newState = {};

          if (!state.hasBeenVisible && isVisible) {
            newState = { hasBeenVisible: true };
          }

          return { isVisible, ...newState };
        });
      },
      this.props.rootMargin
    );
  };

  handleRef = ref => {
    if (ref) {
      this.ref = ref;
    }
  };

  render() {
    const { isVisible, hasBeenVisible } = this.state;

    return (
      <div ref={this.handleRef}>
        {this.props.children({ isVisible, hasBeenVisible })}
      </div>
    );
  }
}

IO.propTypes = {
  children: PropTypes.func.isRequired,
  rootMargin: PropTypes.string
};
