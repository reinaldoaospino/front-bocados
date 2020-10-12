import React from "react";
import {
  TestimonyCardWrapped,
  TestimonyContainer,
  TestimonysWrapped,
  TestimonyTitle1,
  TestimonyTitle2,
} from "./testimony.styles";

const Testimony = () => (
  <TestimonyContainer>
    <TestimonyTitle1>Testimony</TestimonyTitle1>
    <TestimonyTitle2>Our satisfied customer says</TestimonyTitle2>
    <TestimonysWrapped>
      <TestimonyCardWrapped></TestimonyCardWrapped>
      <TestimonyCardWrapped></TestimonyCardWrapped>
      <TestimonyCardWrapped></TestimonyCardWrapped>
    </TestimonysWrapped>
  </TestimonyContainer>
);

export default Testimony;
