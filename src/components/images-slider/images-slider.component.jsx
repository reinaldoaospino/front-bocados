import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  Imagen1,
  ImagesWrap,
  ButtonWrap,
  ButtonWrapeer,
} from "./images-slider.styles";

import UrlImage1 from "../../assets/princial_img_1.png";
import UrlImage2 from "../../assets/princial_img_2.png";
import UrlImage3 from "../../assets/princial_img_3.png";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./images.styles.css";

const slides = [{ img: UrlImage1 }, { img: UrlImage2 }, { img: UrlImage3 }];

const ImagesSlider = () => {
  return (
    <Slider autoplay={2000}>
      {slides.map((slide, index) => (
        <ImagesWrap key={index}>
          <Imagen1 ImageUrl={slide.img}>
            <ButtonWrap>
              <ButtonWrapeer>
                <CustomButton text="More" />
              </ButtonWrapeer>
            </ButtonWrap>
          </Imagen1>
        </ImagesWrap>
      ))}
    </Slider>
  );
};

export default ImagesSlider;
