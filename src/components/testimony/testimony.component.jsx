import React from "react";
import {
  TestimonyCardWrapped,
  TestimonyContainer,
  TestimonysWrapped,
  TestimonyTitle1,
  TestimonyTitle2,
  TestimonyParagraph,
  TestimonyAutor,
  TestimonyDate
} from "./testimony.styles";

const Testimony = () => (
  <TestimonyContainer>
    <TestimonyTitle1>Testimony</TestimonyTitle1>
    <TestimonyTitle2>Our satisfied customer says</TestimonyTitle2>
    <TestimonysWrapped>
      <TestimonyCardWrapped>
        <TestimonyParagraph>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam necessitatibus esse itaque. Quidem quisquam in consequuntur neque debitis, voluptate, odit blanditiis et rem officiis adipisci enim vero dicta quis?"</TestimonyParagraph>
        <TestimonyAutor>Reinaldo Ospino</TestimonyAutor>
        <TestimonyDate>12/10/2020</TestimonyDate>
      </TestimonyCardWrapped>
      <TestimonyCardWrapped>
      <TestimonyParagraph>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam necessitatibus esse itaque. Quidem quisquam in consequuntur neque debitis, voluptate, odit blanditiis et rem officiis adipisci enim vero dicta quis?"</TestimonyParagraph>
        <TestimonyAutor>Reinaldo Ospino</TestimonyAutor>
        <TestimonyDate>12/10/2020</TestimonyDate>
      </TestimonyCardWrapped>
      <TestimonyCardWrapped>
      <TestimonyParagraph>"Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quisquam necessitatibus esse itaque. Quidem quisquam in consequuntur neque debitis, voluptate, odit blanditiis et rem officiis adipisci enim vero dicta quis?"</TestimonyParagraph>
        <TestimonyAutor>Reinaldo Ospino</TestimonyAutor>
        <TestimonyDate>12/10/2020</TestimonyDate>
      </TestimonyCardWrapped>
    </TestimonysWrapped>
  </TestimonyContainer>
);

export default Testimony;
