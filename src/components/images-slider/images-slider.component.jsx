import React from "react";
import CustomButton from "../../components/custom-button/custom-button.component";
import {
  Imagen1,
  ImagesWrap,
  Title1,
  Title1Wrap,
  SubTitle1,
  ButtonWrap,
} from "./images-slider.styles";
import UrlImage1 from "../../assets/princial_img_1.jpg";
import UrlImage2 from "../../assets/princial_img_2.jpg";
import UrlImage3 from "../../assets/princial_img_3.jpg";

import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import "./images.styles.css";

const slides = [
  { title: "The best cookies ever", img: UrlImage1 },
  { title: "You have to taste", img: UrlImage2 },
  { title: "Is The Best!", img: UrlImage3 },
];

const ImagesSlider = () => (
  <Slider autoplay={2000} >
    {slides.map((slide, index) => (
      <ImagesWrap key={index}>
        <Imagen1 ImageUrl={slide.img}>
          <Title1Wrap>
            <Title1>{slide.title}</Title1>
            <SubTitle1>We delivered to your House</SubTitle1>
            <ButtonWrap>
              <CustomButton text="Shop Now" />
            </ButtonWrap>
          </Title1Wrap>
        </Imagen1>
      </ImagesWrap>
    ))}
  </Slider>
);

export default ImagesSlider;
