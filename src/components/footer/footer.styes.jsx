import styled from "styled-components";

export const FooterContainer = styled.div`
  display: grid;
  height: 350px;
  grid-template-columns: 50% 25% 25%;
  background: linear-gradient(
    90deg,
    rgba(234, 233, 233, 1) 0%,
    rgba(228, 218, 197, 1) 100%
  );
  margin-top: 80px;
  font-family: "Crimson Text", serif;
`;

export const SocialMediaWrapped = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 21% 1%;
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
`;

export const Title = styled.span`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 1.2em;
  align-self: center;
`;

export const SpanItem = styled.span`
  font-size: 1.3em;
  margin-left: 4px;
`;

export const ContactWrapped = styled.div`
  display: grid;
  justify-content: center;
`;

export const ContactItemWrapped = styled.div`
  display: flex;
  height: 100%;
`;

export const CopyRightWrapped = styled.div`
  display: grid;
  align-content: center;
  grid-column-start: span 3;
`;
export const CopyRight = styled.span`
  font-size: 1.3em;
  text-align: center;
`;
