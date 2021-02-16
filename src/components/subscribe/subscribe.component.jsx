import React, { useState } from "react";
import { ButtonWrapped, InputWrapped, SubscribeForm } from "./subscribe.styles";
import CustomInput from "../custom-input/custom-input.component";
import CustomButton from "../custom-button/custom-button.component";
import SendIcon from "@material-ui/icons/Send";
import { fetchCreateSubscriptionStart } from "../../redux/subscription/subscription.action";
import DialogMessageComponent from "../dialog-message/dialog-message.component";
import {
  selectFetchingComplete,
  selectFetchingSuccess,
  selectIsFetchingForm,
} from "../../redux/fetching/fetching.selector";
import {
  setFetchingComplete,
  setFetchingSuccess,
} from "../../redux/fetching/fetching.action";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { CircularProgress } from "@material-ui/core";

const Subscribe = ({
  fetchCreateSubscriptionStart,
  isFetchingForm,
  actionSuccess,
  actionComplete,
  setFetchingSuccess,
  setFetchingComplete,
}) => {
  const [subscriptionData, setSubscriptionData] = useState({
    email: "",
  });
  const { email } = subscriptionData;

  const handleSubmit = (event) => {
    event.preventDefault();
    fetchCreateSubscriptionStart(email);
  };

  const handleCloseDialog = () => {
    setFetchingSuccess(false);
    setFetchingComplete(false);
    setSubscriptionData({
      email: "",
    });
    document.getElementById("form-subscription").reset();
  };

  const handleChange = (event) => {
    const { value, name } = event.target;
    setSubscriptionData({ ...subscriptionData, [name]: value });
  };

  return (
    <div>
      {actionSuccess ? (
        <DialogMessageComponent
          open={actionComplete}
          text="You have successfully subscribed"
          handleCloseDialog={handleCloseDialog}
        />
      ) : (
        <DialogMessageComponent
          open={actionComplete}
          text={"Error on subscribing"}
          handleCloseDialog={handleCloseDialog}
        />
      )}
      <SubscribeForm onSubmit={handleSubmit} id={"form-subscription"}>
        <InputWrapped>
          <CustomInput
            required={true}
            value={email}
            name={"email"}
            text={"Enter your email address"}
            onChange={handleChange}
            id={"email"}
            disabled={isFetchingForm}
            type={"email"}
          />
        </InputWrapped>
        <ButtonWrapped>
          {isFetchingForm ? (
            <CircularProgress style={{ marginLeft: "10px" }} />
          ) : (
            <CustomButton
              type="submit"
              disabled={isFetchingForm}
              icon={<SendIcon style={{ fontSize: "28px" }} color="white" />}
            />
          )}
        </ButtonWrapped>
      </SubscribeForm>
    </div>
  );
};

const mapsStateToProps = createStructuredSelector({
  isFetchingForm: selectIsFetchingForm,
  actionSuccess: selectFetchingSuccess,
  actionComplete: selectFetchingComplete,
});

const mapDispatchToProps = (dispatch) => ({
  fetchCreateSubscriptionStart: (data) =>
    dispatch(fetchCreateSubscriptionStart(data)),
  setFetchingSuccess: (value) => dispatch(setFetchingSuccess(value)),
  setFetchingComplete: (value) => dispatch(setFetchingComplete(value)),
});

export default connect(mapsStateToProps, mapDispatchToProps)(Subscribe);
