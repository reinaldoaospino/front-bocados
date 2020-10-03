import styled from "styled-components";

export const ProducstPreviewContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 8em;
  grid-gap: 14px;
`;

export const Preview = styled.div`
  height: 250px;
  margin: auto;
`;

export const PreviewMiddle = styled.div`
  grid-row-start: span 2;
  align-self: center;
  justify-self: center;
`;

export const ProductImg = styled.img`
  height: 400px;
  width: 400px;
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
