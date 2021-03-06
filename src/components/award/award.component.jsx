import React from "react";
import {
  SugarFreeContainer,
  IconWrapped,
  DescriptionWrapped,
  Description,
} from "./award.styles";

const SugarFree = (IconComponent) => ({ text, color }) => (
  <SugarFreeContainer>
    <IconWrapped color={color}>
      <IconComponent style={{ fontSize: " 5.4em", color: "white" }} />
    </IconWrapped>
    <DescriptionWrapped>
      <Description>{text}</Description>
    </DescriptionWrapped>
    <vr
      style={{
        border: "3px solid #dcc698",
        borderRadius: "24%",
        width: "30%",
        margin: "auto",
      }}
    ></vr>
  </SugarFreeContainer>
);

export default SugarFree;
