import styled from "styled-components";

export const ProducstPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 8em;
  grid-gap: 14px;

  @media (max-width: 880px) {
    grid-template-columns: 1fr;
  }
`;

export const Preview = styled.div`
  height: 250px;
  margin: auto;
`;

export const PreviewMiddle = styled.div`
  height: 237px;
  border-radius: 80px;
  background-color: #d9c39a;
  width: 237px;
  margin: auto;
`;

export const ProductImg = styled.img`
  height: 237px;
  width: 100%;
`;

export const Gif = styled.div`
  background-image: url(${(props) => props.gif});
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  border-radius: 95px;
`;

export const Video = styled.video`
  height: 95%;
  border-radius: 80px;
  object-fit: cover;
`;

export const SourveVideo = styled.source``;
