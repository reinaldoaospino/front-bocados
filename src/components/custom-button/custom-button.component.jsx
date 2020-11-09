import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ text, icon, borderRadius,height, ...rest }) => (
  <Button
    variant="contained"
    style={{
      background: "#F0AC81",
      color: "#fff",
      borderRadius: borderRadius,
      width: "100%",
      height: height ? height : "100%",
    }}
    endIcon={icon}
    {...rest}
  >
    <span style={{ fontWeight: "bold", fontSize: "17px" }}>{text}</span>
  </Button>
);

export default CustomButton;
