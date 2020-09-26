import React from 'react';
import {  ProductImageWrap, ProductImage } from './product-card.styles';
import UrlImage1 from "../../assets/princial_img_1.jpg";

const ProductCard = () => (
    <ProductImageWrap>
        <ProductImage ImageUrl={UrlImage1} />
    </ProductImageWrap>
)

export default ProductCard;