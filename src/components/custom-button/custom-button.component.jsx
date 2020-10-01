import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ text }) => (
  <Button
    variant="contained"
    style={{
      background: "rgba(127, 165, 13, 0.56)",
      border: "1px solid #82ae46",
      color: "#fff",
      borderRadius: "10px",
      width: "100%",
    }}
  >
    <span style={{fontWeight:'bold', fontSize:'17px'}}>{text}</span>
  </Button>
);

export default CustomButton;
