import React from 'react';
import { BestProductsContainer, TitleWrap, Title, ProductsWrap } from './best-products.styles';
import ProductCard from '../product-card/product-card.component';
import UrlImage1 from "../../assets/product_1.png";
import UrlImage2 from "../../assets/product_2.png";
import UrlImage3 from "../../assets/product_3.png";
import UrlImage4 from "../../assets/product_4.png";
import UrlImage5 from "../../assets/product_5.svg";
import UrlImage6 from "../../assets/product_6.png";


const BestProducts = () => (
    <BestProductsContainer>
        <TitleWrap>
            <Title>Featured Products</Title>
        </TitleWrap>
        <ProductsWrap>
            <ProductCard urlImage={UrlImage1} ProducName={"CARB CHOCOLATE CHIP CAKE"} />
            <ProductCard urlImage={UrlImage2} ProducName={"FLUFFY KETO BREAD"} />
            <ProductCard urlImage={UrlImage3} ProducName={"HEALTHY BANANA BREAD"}/>
            <ProductCard urlImage={UrlImage4} ProducName={"VEGAN ALFAJORES"} />
            <ProductCard urlImage={UrlImage5} ProducName={"KETO AVOCADO BROWNIE"} />
            <ProductCard urlImage={UrlImage6} ProducName={"ALMOND CHOCOLATE CHIPS COOKIES"}/> 
        </ProductsWrap>
    </BestProductsContainer>
)

export default BestProducts;