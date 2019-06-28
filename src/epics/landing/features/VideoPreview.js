import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import MEDIA from "../../../common/styles/media";

const VideoPreview = data => {
  return (
    <Container>
      <Image src={data.header} />
      <Video>
        <video preload="auto" autoPlay muted loop playsInline>
          <source src={data.video} type="video/mp4" />
        </video>
      </Video>
    </Container>
  );
};

VideoPreview.propTypes = {
  data: PropTypes.object.isRequired,
  header: PropTypes.string.isRequired,
  video: PropTypes.string
};

export default VideoPreview;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  display: flex;
  justify-content: center;
  /* padding: 80px 0;
  overflow: hidden;
  z-index: 100; */
`;

const Image = styled.img`
  margin-bottom: -1px;
`;

const Video = styled.div`
  width: 80%;
  max-width: 950px;
  margin: auto;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  ${MEDIA.TABLET`
    width: 100%
  `};
`;
