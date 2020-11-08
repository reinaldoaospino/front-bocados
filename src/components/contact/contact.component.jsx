import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchSendEmailStart } from "../../redux/email/email.action";
import { selectIsFetchingForm } from "../../redux/fetching/fetching.selector";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomTexTarea from "../custom-textarea/custom-textarea.component";
import { ContactForm, InputWrapped, ButtonWrapped } from "./contact.styles";

const Contact = ({ isFetchingForm, fetchSendEmailStart }) => {
  const [emailData, setEmailData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const { name, email, subject, message } = emailData;

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchSendEmailStart(emailData);
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setEmailData({ ...emailData, [name]: value });
  };

  return (
    <ContactForm onSubmit={handleSubmit}>
      <InputWrapped>
        <CustomInput
          text={"Name"}
          required={true}
          vale={name}
          name={"name"}
          onChange={handleChange}
          id={"name"}
          disabled={isFetchingForm}
        />
      </InputWrapped>
      <InputWrapped>
        <CustomInput
          text={"Email"}
          required={true}
          vale={email}
          onChange={handleChange}
          id={"email"}
          name={"email"}
          disabled={isFetchingForm}
        />
      </InputWrapped>
      <InputWrapped>
        <CustomInput
          text={"Subject"}
          required={true}
          vale={subject}
          onChange={handleChange}
          id={"subject"}
          name={"subject"}
          disabled={isFetchingForm}
        />
      </InputWrapped>
      <InputWrapped>
        <CustomTexTarea
          text={"Message"}
          required={true}
          vale={message}
          onChange={handleChange}
          id={"message"}
          name={"message"}
          disabled={isFetchingForm}
        />
      </InputWrapped>
      <ButtonWrapped>
        <CustomButton
          text={"Send Message"}
          disabled={isFetchingForm}
          type="submit"
        />
        {isFetchingForm ? (
          <CircularProgress style={{ marginLeft: "10px" }} />
        ) : null}
      </ButtonWrapped>
    </ContactForm>
  );
};

const mapsStateToProps = createStructuredSelector({
  isFetchingForm: selectIsFetchingForm,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSendEmailStart: (data) => dispatch(fetchSendEmailStart(data)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(Contact);
