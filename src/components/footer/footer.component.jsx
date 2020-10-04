import React from 'react';
import {
    FooterContainer,
    BrandWrapped, MenuWrapped, ContactWrapped, CopyRightWrapped, LogoWrapped, Logo,
    MenuTitle,MenuOption,ContactTitle,ContactEmail,CopyRight
} from './footer.styes';
import LogoHeader from "../../assets/logoHeader.svg";


const Footer = () => (
    <FooterContainer>
        <BrandWrapped>
            <LogoWrapped>

                <Logo ImageUrl={LogoHeader} />
            </LogoWrapped>
        </BrandWrapped>

        <MenuWrapped>
        <MenuTitle>Menu</MenuTitle>
        <MenuOption>Shop</MenuOption>
        <MenuOption>Contact</MenuOption>
        <MenuOption>About</MenuOption>
        </MenuWrapped>

        <ContactWrapped>
        <ContactTitle>Contact</ContactTitle>
        <ContactEmail>bodados@gmail.com</ContactEmail>
        <ContactEmail>1137677234</ContactEmail>
        <ContactEmail>New Jersey</ContactEmail>
        </ContactWrapped>

        <CopyRightWrapped>
            <CopyRight>Copyright © Bocados 2020. All right reserved.</CopyRight>
        </CopyRightWrapped>


    </FooterContainer>
)


export default Footer;