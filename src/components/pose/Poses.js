import posed from 'react-pose';
/* https://www.npmjs.com/package/react-pose */

export const LeftPose = posed.div({
  visible: {
    x: 0,
    opacity: 1,
    delay: 50,
    transition: {
      x: { type: 'spring', stiffness: 500, damping: 60 },
      default: { duration: 500 },
    },
  },
  hidden: {
    x: -200,
    opacity: 0,
    delay: 0,
    transition: { duration: 200 },
  },
});

export const RightPose = posed.div({
  visible: {
    x: 0,
    opacity: 1,
    delay: 50,
    transition: {
      x: { type: 'spring', stiffness: 500, damping: 60 },
      default: { duration: 500 },
    },
  },
  hidden: {
    x: 200,
    opacity: 0,
    delay: 0,
    transition: { duration: 200 },
  },
});

export const UpPose = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    delay: 50,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 60 },
      default: { duration: 500 },
    },
  },
  hidden: {
    y: 50,
    opacity: 0,
    delay: 0,
    transition: { duration: 200 },
  },
});

export const DownPose = posed.div({
  visible: {
    y: 0,
    opacity: 1,
    delay: 50,
    transition: {
      y: { type: 'spring', stiffness: 500, damping: 60 },
      default: { duration: 500 },
    },
  },
  hidden: {
    y: -200,
    opacity: 0,
    delay: 0,
    transition: { duration: 200 },
  },
});
