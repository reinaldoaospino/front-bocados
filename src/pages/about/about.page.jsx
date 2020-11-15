import React from "react";
import AboutMessage from "../../components/about-message/about-message.component";
import { AboutImage, AboutPageContainer, AboutWrapped } from "./about.styles";
import Logo from "../../assets/logo.png";

const AboutPage = () => (
  <div>
    <AboutPageContainer>
      <AboutWrapped>
        <AboutImage src={Logo} />
        <AboutMessage />
      </AboutWrapped>
    </AboutPageContainer>
  </div>

);

export default AboutPage;
