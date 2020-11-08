import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = ({ text, required, ...rest }) => (
  <TextField
    id="outlined-basic"
    label={text}
    variant="outlined"
    fullWidth={true}
    required={required}
    {...rest}
  />
);

export default CustomInput;
