import React from "react";
import {
  HomeContainer,
} from "./home.styles";

import ImagesSlider from "../../components/images-slider/images-slider.component";
import BestProducts from "../../components/best-products/best-products.component";

const HomePage = () => (
  <HomeContainer>
    <ImagesSlider />
    <BestProducts />
  </HomeContainer>
);

export default HomePage;
