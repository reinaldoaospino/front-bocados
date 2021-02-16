import React from "react";
import Contact from "../../components/contact/contact.component";
import {
  ContactPageContainer,
  ContactPageWrapped,
  ContactImg,
  ContactWrapped,
} from "./contact.styles";
import ContactImgen from "../../assets/contact_img.PNG";

const ContactPage = () => {
  window.scrollTo(0, 0);

  return (
    <ContactPageContainer>
      <ContactPageWrapped>
        <ContactImg src={ContactImgen} />
        <ContactWrapped>
          <Contact />
        </ContactWrapped>
      </ContactPageWrapped>
    </ContactPageContainer>
  );
};

export default ContactPage;
