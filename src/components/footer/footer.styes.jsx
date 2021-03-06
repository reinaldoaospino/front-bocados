import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  height: 285px;
  grid-template-columns: 50% 25% 25%;
  position: absolute;
  bottom: 0;
  width: 100%;
  background: linear-gradient(
    90deg,
    rgba(234, 233, 233, 1) 0%,
    rgba(228, 218, 197, 1) 100%
  );
  font-family: "Crimson Text", serif;

  @media (max-width: 1236px) {
    height: 286px;
  }
  @media (max-width: 932px) {
    grid-template-columns: 40% 25% 25%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr 1fr;
    height: 303px;

  }


`;

export const SocialMediaWrapped = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 21% 1%;

  @media (max-width: 932px) {
    grid-template-columns: 50% 1%;
  }

  @media (max-width: 600px) {
    grid-template-columns: 25% 25%;
    grid-column-start: span 2;
  }
`;

export const InstagramWrapped = styled.div`
justify-self: center;
align-self: center;
}
`;

export const WhatsAppWrapped = styled.div`
justify-self: center;
align-self: center;
}
`;

export const LogoWrapped = styled.div`
  height: 50%;
  width: 50%;
  margin: auto;
`;

export const Logo = styled.div`
background-image: url(/static/media/logoHeader.2c095719.svg);
height: 141px;
width: 387px;
background-size: cover;
background-position: center;
}
`;

export const MenuWrapped = styled.div`
  display: grid;
  justify-content: center;
  @media (max-width: 600px) {
    display: grid;
    text-align: center;
  }
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.1em;
  align-self: center;
`;

export const SpanItem = styled.span`
  font-size: 1.3em;
  margin-left: 4px;

  @media (max-width: 860px) {
    font-size: 1.1em;
  }
`;

export const ContactWrapped = styled.div`
  display: grid;
  justify-content: center;

  @media (max-width: 600px) {
    display: grid;
    text-align: center;
  }
`;

export const ContactItemWrapped = styled.div`
  display: flex;
  height: 100%;
`;

export const CopyRightWrapped = styled.div`
  display: grid;
  align-content: center;
  grid-column-start: span 3;

  @media (max-width: 600px) {
    grid-column-start: span 2;
  }
`;
export const CopyRight = styled.span`
  font-size: 1.3em;
  text-align: center;
`;
