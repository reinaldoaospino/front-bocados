import React from "react";
import Contact from "../../components/contact/contact.component";
import { ContactPageContainer, MapWrapped,ContactWrapped } from "./contact.styles";

const ContactPage = () => (
  <ContactPageContainer>
    <MapWrapped></MapWrapped>
    <ContactWrapped>
        <Contact/>
    </ContactWrapped>
  </ContactPageContainer>
);

export default ContactPage;
