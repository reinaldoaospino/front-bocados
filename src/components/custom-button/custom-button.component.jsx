import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ text,icon }) => (
  <Button
    variant="contained"
    style={{
      background: "#F0AC81",
      color: "#fff",
      borderRadius: "10px",
      width: "100%",
    }}
    endIcon={icon}
  >
    <span style={{fontWeight:'bold', fontSize:'17px'}}>{text}</span>
  </Button>
);

export default CustomButton;
