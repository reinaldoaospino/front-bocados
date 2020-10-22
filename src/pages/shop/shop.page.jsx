import React from "react";
import CategoryComponent from "../../components/category/category.component";
import {
  ImagenExample,
  ProductsWrapped,
  ShopPageContainer,
} from "./shop.styles";
import ProductCard from "../../components/product-card/product-card.component";
import UrlImage1 from "../../assets/product_1.png";
import UrlImage2 from "../../assets/product_2.png";
import UrlImage3 from "../../assets/product_3.png";
import UrlImage4 from "../../assets/product_4.png";
import UrlImage5 from "../../assets/product_5.png";
import UrlImage6 from "../../assets/product_6.png";
import UrlImage7 from "../../assets/product_7.png";
import UrlImage8 from "../../assets/product_8.png";
import UrlImage9 from "../../assets/product_9.png";
import UrlImage10 from "../../assets/product_10.png";
import UrlImage11 from "../../assets/product_11.png";
import UrlImage12 from "../../assets/product_12.png";
import ImagenPreview from "../../assets/shop_header.png";
import CategoryButton from "../../components/category-button/category-button.component";

const ShopPage = () => (
  <div>
    <ShopPageContainer>
      <CategoryButton/>
      <CategoryComponent />
      <ProductsWrapped>
        <ProductCard
          urlImage={UrlImage1}
          ProducName={"CARB CHOCOLATE CHIP CAKE"}
        />
        <ProductCard urlImage={UrlImage2} ProducName={"FLUFFY KETO BREAD"} />
        <ProductCard urlImage={UrlImage3} ProducName={"HEALTHY BANANA BREAD"} />
        <ProductCard urlImage={UrlImage4} ProducName={"VEGAN ALFAJORES"} />
        <ProductCard urlImage={UrlImage5} ProducName={"KETO AVOCADO BROWNIE"} />
        <ProductCard
          urlImage={UrlImage6}
          ProducName={"ALMOND CHOCOLATE CHIPS COOKIES"}
        />

        <ProductCard urlImage={UrlImage7} ProducName={"Cocadas"} />
        <ProductCard urlImage={UrlImage8} ProducName={"cheeseCake"} />
        <ProductCard urlImage={UrlImage9} ProducName={"Chickpea cake"} />
        <ProductCard urlImage={UrlImage10} ProducName={"Tiramisu"} />
        <ProductCard urlImage={UrlImage11} ProducName={"MINI DESSERT"} />
        <ProductCard urlImage={UrlImage12} ProducName={"red velvet"} />
      </ProductsWrapped>
    </ShopPageContainer>
  </div>
);

export default ShopPage;
