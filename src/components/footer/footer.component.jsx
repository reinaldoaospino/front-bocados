import React from "react";
import InstagramIcon from "../instagram-icon/instagram-icon.component";
import WhatsAppIcon from "../whastapp-icon/whastapp-icon.component";
import EmailIcon from "@material-ui/icons/Email";
import ContactPhoneIcon from "@material-ui/icons/ContactPhone";
import RoomIcon from "@material-ui/icons/Room";
import {
  FooterContainer,
  SocialMediaWrapped,
  InstagramWrapped,
  MenuWrapped,
  ContactWrapped,
  CopyRightWrapped,
  CopyRight,
  Title,
  SpanItem,
  WhatsAppWrapped,
  ContactItemWrapped,
} from "./footer.styes";
import { Link } from "react-router-dom";

const LinkStyles = {
  textDecoration: "none",
  color: "black",
};

const Footer = () => (
  <FooterContainer>
    <SocialMediaWrapped>
      <InstagramWrapped>
        <InstagramIcon urlAccount={"https://www.instagram.com/bocados.nj/"} />
      </InstagramWrapped>
      <WhatsAppWrapped>
        <WhatsAppIcon
          urlAccount={"https://api.whatsapp.com/message/QSVADFAKURYPB1"}
        />
      </WhatsAppWrapped>
    </SocialMediaWrapped>

    <MenuWrapped>
      <Title>Menu</Title>
      <SpanItem>
        {" "}
        <Link style={LinkStyles} to="/front-bocados/shop">Shop</Link>
      </SpanItem>
      <SpanItem>
        {" "}
        <Link style={LinkStyles} to="/front-bocados/contact" >Contact</Link>{" "}
      </SpanItem>
      <SpanItem>
        {" "}
        <Link style={LinkStyles} to="/front-bocados/about">About</Link>{" "}
      </SpanItem>
    </MenuWrapped>

    <ContactWrapped>
      <Title>Contact</Title>
      <ContactItemWrapped>
        <EmailIcon style={{ fontSize: "2em" }} />
        <SpanItem>bocados.nj@gmail.com</SpanItem>
      </ContactItemWrapped>
      <ContactItemWrapped>
        <ContactPhoneIcon style={{ fontSize: "2em" }} />
        <SpanItem>+1 551 7759096</SpanItem>
      </ContactItemWrapped>
      <ContactItemWrapped>
        <RoomIcon style={{ fontSize: "2em" }} />
        <SpanItem>New Jersey</SpanItem>
      </ContactItemWrapped>
    </ContactWrapped>

    <CopyRightWrapped>
      <CopyRight>Copyright © Bocados 2020. All right reserved.</CopyRight>
    </CopyRightWrapped>
  </FooterContainer>
);

export default Footer;
