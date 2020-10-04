import React from "react";
import { HomeContainer, AwardContainer, ContentContainer } from "./home.styles";

import ImagesSlider from "../../components/images-slider/images-slider.component";
import BestProducts from "../../components/best-products/best-products.component";
import Award from "../../components/award/award.component";
import DoneIcon from "@material-ui/icons/Done";
import NomGomIcon from "../../components/non-gmo-icon/non-gmo-icon.component";
import GlutenFreeIcon from "../../components/gluten-free-icon/gluten-free-icon.component";
import SugarFreeIcon from "../../components/sugar-free-icon/sugar-free-icon.component";
import KetoIcon from "../../components/keto-icon/keto-icon.component";
import ProductsPreview from "../../components/products-preview/products-preview.component";
import Footer from "../../components/footer/footer.component";

const SugarFree = Award(SugarFreeIcon);
const GlutenFree = Award(GlutenFreeIcon);
const NonGmo = Award(NomGomIcon);
const Keto = Award(KetoIcon);

const HomePage = () => (
  <HomeContainer>
    <ImagesSlider />
    <ContentContainer>
      <AwardContainer>
        <SugarFree text={"Sugar Free"} color={"#C5DB74;"} />
        <GlutenFree text={"Gluten Free"} color={"#C5DB74;"} />
        <NonGmo text={"NONGMO"} color={"#C5DB74;"} />
        <Keto text={"Keto Option"} color={"#C5DB74;"} />
      </AwardContainer>
      <ProductsPreview />
      <BestProducts />
    </ContentContainer>
    <Footer/>
  </HomeContainer>
);

export default HomePage;
