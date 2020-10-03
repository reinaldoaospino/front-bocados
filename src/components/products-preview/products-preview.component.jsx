import React from "react";
import {
  Preview,
  ProducstPreviewContainer,
  PreviewMiddle,
  ProductImg,
  Gif,
  SourveVideo,
  Video,
} from "./products-preview.styles";
import Img1 from "../../assets/preview_1.svg";
import Img2 from "../../assets/preview_2.svg";
import Img3 from "../../assets/preview_3.svg";
import Img4 from "../../assets/preview_4.svg";
import Logo from "../../assets/logo.png";
import Video1 from "../../assets/video_1.mp4";
import Video2 from "../../assets/video_2.mp4";
import Video3 from "../../assets/video_3.mp4";
import Video4 from "../../assets/video_4.mp4";

const ProductsPreview = () => (
  <ProducstPreviewContainer>
    <Preview>
      <Video loop autoPlay muted>
        <SourveVideo src={Video1} type="video/mp4" />
      </Video>
    </Preview>
    <PreviewMiddle>
      <ProductImg src={Logo} />
    </PreviewMiddle>
    <Preview>
      <Video loop autoPlay muted>
        <SourveVideo src={Video2} type="video/mp4" />
      </Video>
    </Preview>
    <Preview>
      <Video loop autoPlay muted>
        <SourveVideo src={Video3} type="video/mp4" />
      </Video>
    </Preview>
    <Preview>
      <Video loop autoPlay muted>
        <SourveVideo src={Video4} type="video/mp4" />
      </Video>
    </Preview>
  </ProducstPreviewContainer>
);

export default ProductsPreview;
