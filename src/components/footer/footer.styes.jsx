import styled from 'styled-components';


export const FooterContainer = styled.div`
display:grid;
height:350px;
    border: 1px solid;
    grid-template-columns: 50% 25% 25%;
`


export const BrandWrapped = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
height: 100%;
`

export const LogoWrapped = styled.div`
height: 50%;
    width: 50%;
    margin: auto;
`

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
`

export const MenuTitle = styled.span`
text-transform: uppercase;
font-weight: 600;
font-size: 2em;
align-self: center;
`


export const MenuOption = styled.span`
font-size: 1.3em;
`

export const ContactWrapped = styled.div`
display: grid;
justify-content: center;
`

export const ContactTitle = styled.span`
text-transform: uppercase;
font-weight: 600;
font-size: 2em;
align-self: center;
`

export const ContactEmail = styled.span`
font-size: 1.3em;
`

export const CopyRightWrapped = styled.div`
display: grid;
align-content: center;
`
export const CopyRight = styled.span`
font-size: 1.3em;
text-align: center;
`