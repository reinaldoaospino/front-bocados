import styled from 'styled-components';

export const ProductContainer = styled.div`
`;


export const ProductImageWrap = styled.div`
height: 149px;
    width: 220px;
`;


export const ProductImage = styled.div`
background-image: url(${props => props.ImageUrl});
height: 100%;
background-repeat: no-repeat;
background-size: cover;
position: relative;
background-position: center;
`;

export const ButtonWrap = styled.div`
`;