import React from "react";
import { HomeContainer, AwardContainer, ContentContainer } from "./home.styles";
import ImagesSlider from "../../components/images-slider/images-slider.component";
import Award from "../../components/award/award.component";
import NomGomIcon from "../../components/non-gmo-icon/non-gmo-icon.component";
import GlutenFreeIcon from "../../components/gluten-free-icon/gluten-free-icon.component";
import SugarFreeIcon from "../../components/sugar-free-icon/sugar-free-icon.component";
import KetoIcon from "../../components/keto-icon/keto-icon.component";
import ProductsPreview from "../../components/products-preview/products-preview.component";
import Zoom from "react-reveal/Zoom";
import BestProductsWithSpinner from "../../components/product-cards-preview/product-cards-preview-with-spinner";
const SugarFree = Award(SugarFreeIcon);
const GlutenFree = Award(GlutenFreeIcon);
const NonGmo = Award(NomGomIcon);
const Keto = Award(KetoIcon);

const HomePage = () => {
  return (
    <HomeContainer>
      <ImagesSlider />
      <ContentContainer>
        <Zoom>
          <AwardContainer>
            <SugarFree text={"Sugar Free"} color={"#C5DB74;"} />
            <GlutenFree text={"Gluten Free"} color={"#C5DB74;"} />
            <NonGmo text={"NONGMO"} color={"#C5DB74;"} />
            <Keto text={"Keto Option"} color={"#C5DB74;"} />
          </AwardContainer>
        </Zoom>
        <ProductsPreview />
        <BestProductsWithSpinner title={"Featured Products"} />
      </ContentContainer>
    </HomeContainer>
  );
};



export default HomePage;
