import React from "react";
import {
  ButtonWrapped,
  InputWrapped,
  SubscribeContainer,
} from "./subscribe.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SendIcon from '@material-ui/icons/Send';

const Subscribe = () => (
  <SubscribeContainer>
    <InputWrapped>
      <CustomInput text={"Enter your email address"} />
    </InputWrapped>
    <ButtonWrapped>
      <CustomButton  icon={<SendIcon style={{fontSize:'28px'}} color="white"  />} />
    </ButtonWrapped>
  </SubscribeContainer>
);

export default Subscribe;
