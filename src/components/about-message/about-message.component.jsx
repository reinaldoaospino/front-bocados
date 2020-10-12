import React from "react";
import Subscribe from "../subscribe/subscribe.component";
import {
  AboutMessageContainer,
  AboutParagraph,
  AboutTitle,
} from "./about-message.styles";

const AboutMessage = () => (
  <AboutMessageContainer>
    <AboutTitle>Welcome to Bocados New Jersey</AboutTitle>
    <AboutParagraph>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
      accusantium ipsum nemo eaque qui vero, quo delectus officiis eius
      voluptate fugiat itaque perspiciatis aspernatur velit animi nam?
      Praesentium, reprehenderit nemo.
    </AboutParagraph>
    <AboutParagraph>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit
      accusantium ipsum nemo eaque qui vero, quo delectus officiis eius
      voluptate fugiat itaque perspiciatis aspernatur velit animi nam?
      Praesentium, reprehenderit nemo.
    </AboutParagraph>
    <Subscribe />
  </AboutMessageContainer>
);

export default AboutMessage;
