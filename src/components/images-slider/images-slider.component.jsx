import React, { useState } from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  Imagen1,
  ImagesWrap,
  Title1,
  Title1Wrap,
  SubTitle1,
  ButtonWrap,
  ButtonWrapeer,
} from "./images-slider.styles";
import UrlImage1 from "../../assets/princial_img_1.jpeg";
import UrlImage2 from "../../assets/princial_img_2.png";
import UrlImage3 from "../../assets/princial_img_3.jpg";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./images.styles.css";
import { Tune } from "@material-ui/icons";

const slides = [
  { title: "The best cookies ever", img: UrlImage1 },
  { title: "You have to taste", img: UrlImage2 },
  { title: "Is The Best!", img: UrlImage3 },
];

const ImagesSlider = () => {
 
  return (
    <Slider>
      {slides.map((slide, index) => (
        <ImagesWrap key={index}>
          <Imagen1 ImageUrl={slide.img}>
            <ButtonWrap>
              <ButtonWrapeer>
                <CustomButton text="Shop Now" />
              </ButtonWrapeer>
            </ButtonWrap>
          </Imagen1>
        </ImagesWrap>
      ))}
    </Slider>
  );
};

export default ImagesSlider;
