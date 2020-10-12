import React from "react";
import AboutMessage from "../../components/about-message/about-message.component";
import { AboutImage, AboutPageContainer, AboutWrapped } from "./about.styles";

const AboutPage = () => (
  <AboutPageContainer>
    <AboutWrapped>
      <AboutImage />
      <AboutMessage />
    </AboutWrapped>
  </AboutPageContainer>
);

export default AboutPage;
