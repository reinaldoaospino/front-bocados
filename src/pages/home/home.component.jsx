import React from "react";
import { HomeContainer, AwardContainer } from "./home.styles";

import ImagesSlider from "../../components/images-slider/images-slider.component";
import BestProducts from "../../components/best-products/best-products.component";
import Award from "../../components/award/award.component";
import DoneIcon from '@material-ui/icons/Done';
import NomGomIcon from '../../components/non-gmo-icon/non-gmo-icon.component';
import GlutenFreeIcon from '../../components/gluten-free-icon/gluten-free-icon.component';
import SugarFreeIcon from '../../components/sugar-free-icon/sugar-free-icon.component';


const SugarFree = Award(SugarFreeIcon);
const GlutenFree = Award(GlutenFreeIcon);
const NonGmo = Award(NomGomIcon);
const Keto= Award(DoneIcon);

const HomePage = () => (
  <HomeContainer>
    <ImagesSlider />
    <AwardContainer>
      <SugarFree text={'Sugar Free'} />
      <GlutenFree text={'Gluten Free'}/>
      <NonGmo text={'NONGMO'}/>
      <Keto text={'Keto Option'}/>
    </AwardContainer>
    <BestProducts />
  </HomeContainer>
);

export default HomePage;
