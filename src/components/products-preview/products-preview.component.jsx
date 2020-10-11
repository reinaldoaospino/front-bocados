import React from "react";
import {
  Preview,
  ProducstPreviewContainer,
  PreviewMiddle,
  ProductImg,
  SourveVideo,
  Video,
} from "./products-preview.styles";
import Logo from "../../assets/logo.png";
import Video2 from "../../assets/video_2.mp4";
import Video3 from "../../assets/video_3.mp4";

const ProductsPreview = () => (
  <ProducstPreviewContainer>
    <Preview>
      <Video loop autoPlay muted>
        <SourveVideo src={Video2} type="video/mp4" />
      </Video>
    </Preview>
    <PreviewMiddle> 
      <ProductImg src={Logo} />
    </PreviewMiddle>
    <Preview>
      <Video loop autoPlay muted>
        <SourveVideo src={Video3} type="video/mp4" />
      </Video>
    </Preview>  
  </ProducstPreviewContainer>
);

export default ProductsPreview;
