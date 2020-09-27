import React from "react";
import {
  SugarFreeContainer,
  IconWrapped,
  DescriptionWrapped,
  Description,
} from "./award.styles";

const SugarFree= (IconComponent)=> ({text}) => (
  <SugarFreeContainer>
    <IconWrapped>
      <IconComponent style={{ fontSize: " 5.4em", color: "white" }} />
    </IconWrapped>
    <DescriptionWrapped>
      <Description>{text}</Description>
    </DescriptionWrapped>
  </SugarFreeContainer>
);

export default SugarFree;
