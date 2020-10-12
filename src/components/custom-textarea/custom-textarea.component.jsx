import React from 'react';
import { TextField } from '@material-ui/core';


const CustomTexTarea = ({text})=>(
    <TextField
    id="outlined-multiline-static"
    label={text}
    multiline
    rows={4}
    variant="outlined"
    fullWidth={true}
  />
)

export default CustomTexTarea;