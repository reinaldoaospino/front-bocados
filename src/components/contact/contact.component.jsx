import { CircularProgress } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { fetchSendEmailStart } from "../../redux/email/email.action";
import {
  setFetchingComplete,
  setFetchingSuccess,
} from "../../redux/fetching/fetching.action";
import {
  selectFetchingComplete,
  selectFetchingSuccess,
  selectIsFetchingForm,
} from "../../redux/fetching/fetching.selector";
import CustomButton from "../custom-button/custom-button.component";
import CustomInput from "../custom-input/custom-input.component";
import CustomTexTarea from "../custom-textarea/custom-textarea.component";
import { ContactForm, InputWrapped, ButtonWrapped } from "./contact.styles";
import DialogMessageComponent from '../dialog-message/dialog-message.component';

const Contact = ({
  isFetchingForm,
  fetchSendEmailStart,
  actionSuccess,
  actionComplete,
  setFetchingSuccess,
  setFetchingComplete
}) => {
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

  const handleCloseDialog = () => {
    setFetchingSuccess(false);
    setFetchingComplete(false);
    setEmailData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    document.getElementById("form-email").reset();
  };

  return (
    <div>
      {actionSuccess ? (
        <DialogMessageComponent
          open={actionComplete}
          text="Mensaje enviado correctamente"
          handleCloseDialog={handleCloseDialog}
        />
      ) : (
        <DialogMessageComponent
          open={actionComplete}
          text={"Error en enviar mensaje"}
          handleCloseDialog={handleCloseDialog}
        />
      )}
      <ContactForm onSubmit={handleSubmit} id={'form-email'}>
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
    </div>
  );
};

const mapsStateToProps = createStructuredSelector({
  isFetchingForm: selectIsFetchingForm,
  actionSuccess: selectFetchingSuccess,
  actionComplete: selectFetchingComplete,
});

const mapDispatchToProps = (dispatch) => ({
  fetchSendEmailStart: (data) => dispatch(fetchSendEmailStart(data)),
  setFetchingSuccess: (value) => dispatch(setFetchingSuccess(value)),
  setFetchingComplete: (value) => dispatch(setFetchingComplete(value)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(Contact);
