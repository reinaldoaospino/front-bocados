import React from "react";
import Button from "@material-ui/core/Button";

const CustomButton = ({ text }) => (
  <Button
    variant="contained"
    style={{
      background: "#82ae46",
      border: "1px solid #82ae46",
      color: "#fff",
      borderRadius: '10px',
      width: '100%'
    }}
  >
    {text}
  </Button>
);

export default CustomButton;
