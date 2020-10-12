import { TextField } from "@material-ui/core";
import React from "react";

const CustomInput = ({ text }) => (
  <TextField id="outlined-basic" label={text} variant="outlined" fullWidth={true}/>
);

export default CustomInput;
