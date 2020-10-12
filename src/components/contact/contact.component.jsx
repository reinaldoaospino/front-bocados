import React from "react";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomTexTarea from "../custom-textarea/custom-textarea.component";
import { ContactForm, InputWrapped, ButtonWrapped } from "./contact.styles";

const Contact = () => (
  <ContactForm>
    <InputWrapped>
      <CustomInput text={"Name"} required={true} />
    </InputWrapped>
    <InputWrapped>
      <CustomInput text={"Email"} required={true} />
    </InputWrapped>
    <InputWrapped>
      <CustomInput text={"Subject"} required={true} />
    </InputWrapped>
    <InputWrapped>
      <CustomTexTarea text={"Message"} required={true} />
    </InputWrapped>
    <ButtonWrapped>
      <CustomButton text={"Send Message"} required={true} />
    </ButtonWrapped>
  </ContactForm>
);

export default Contact;
