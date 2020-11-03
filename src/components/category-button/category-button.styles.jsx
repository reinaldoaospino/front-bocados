import styled from 'styled-components';


export const CategoryButtonContainer = styled.div`
display:none;
text-align: center;
background: #f7f6f2;
margin-top:75px;
@media (max-width: 916px) {
    display: block;
  }

`

export const SelectedCategory = styled.span`
text-decoration: underline;
text-transform: uppercase;
`


export const NotSelectedCategory = styled.span`
text-transform: uppercase;
`
