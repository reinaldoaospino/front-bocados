import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomTexTarea from "../custom-textarea/custom-textarea.component";
import { ContactForm, InputWrapped, ButtonWrapped } from "./contact.styles";

const Contact = () => (
  <ContactForm>
    <InputWrapped>
      <CustomInput text={"Name"} />
    </InputWrapped>
    <InputWrapped>
      <CustomInput text={"Email"} />
    </InputWrapped>
    <InputWrapped>
      <CustomInput text={"Subject"} />
    </InputWrapped>
    <InputWrapped>
      <CustomTexTarea text={"Message"} />
    </InputWrapped>
    <ButtonWrapped>
      <CustomButton text={"Send Message"} />
    </ButtonWrapped>
  </ContactForm>
);

export default Contact;
