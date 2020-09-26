import React from 'react';
import { BestProductsContainer, TitleWrap, Title, ProductsWrap } from './best-products.styles';
import ProductCard from '../product-card/product-card.component';

const BestProducts = () => (
    <BestProductsContainer>
        <TitleWrap>
            <Title>More Products</Title>
        </TitleWrap>
        <ProductsWrap>
            <ProductCard />
            <ProductCard />
        </ProductsWrap>
    </BestProductsContainer>
)

export default BestProducts;