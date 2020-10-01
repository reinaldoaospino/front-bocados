import React from 'react';
import { BestProductsContainer, TitleWrap, Title, ProductsWrap } from './best-products.styles';
import ProductCard from '../product-card/product-card.component';
import UrlImage1 from "../../assets/princial_img_1.jpeg";
import UrlImage2 from "../../assets/princial_img_2.png";
import UrlImage3 from "../../assets/princial_img_3.jpg";

const BestProducts = () => (
    <BestProductsContainer>
        <TitleWrap>
            <Title>Featured Products</Title>
        </TitleWrap>
        <ProductsWrap>
            <ProductCard urlImage={UrlImage1} />
            <ProductCard urlImage={UrlImage2} />
            <ProductCard urlImage={UrlImage3}/>
            <ProductCard urlImage={UrlImage1} />
            <ProductCard urlImage={UrlImage2} />
            <ProductCard urlImage={UrlImage3}/>
            <ProductCard urlImage={UrlImage1} />
            <ProductCard urlImage={UrlImage2} />
            <ProductCard urlImage={UrlImage3}/>
        </ProductsWrap>
    </BestProductsContainer>
)

export default BestProducts;