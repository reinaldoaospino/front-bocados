import React from "react";
import Contact from "../../components/contact/contact.component";
import {
  ContactPageContainer,
  ContactPageWrapped,
  MapWrapped,
  ContactWrapped,
} from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <ContactPageWrapped>
      <MapWrapped></MapWrapped>
      <ContactWrapped>
        <Contact />
      </ContactWrapped>
    </ContactPageWrapped>
  </ContactPageContainer>
);

export default ContactPage;
