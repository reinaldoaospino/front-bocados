import React from "react";
import {
  ProductImageWrap,
  ImageWrap,
  DescriptionWrap,
  Price,
  Description,
  PriceWrap,
  ProductImg,
  OptionsWrap,
  ShopOptionWrap,
} from "./product-card.styles";
import ShopIcon from "../shop-icon/shop-icon.component";
import CustomButton from "../custom-button/custom-button.component";

import Zoom from "react-reveal/Zoom";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addItem } from "../../redux/cart/cart.action";

const LinkStyles = {
  textDecoration: "none",
  color: "black",
};

const ProductCard = ({ item, addItem }) => {
  const { id, imagen, productName, price } = item;
  return (
    <Zoom>
      <ProductImageWrap>
        <Link to={`/front-bocados/product/${id}`} style={LinkStyles}>
          <ImageWrap>
            <ProductImg src={"data:image/png;base64," + imagen} />
          </ImageWrap>
          <DescriptionWrap>
            <Description>{productName}</Description>
          </DescriptionWrap>
          <PriceWrap>
            <Price>{`$ ${price}`}</Price>
          </PriceWrap>
        </Link>
        <OptionsWrap>
          <ShopOptionWrap>
            <CustomButton
              text="Add to cart"
              icon={<ShopIcon color="white" />}
              onClick={() => addItem(item)}
            />
          </ShopOptionWrap>
        </OptionsWrap>
      </ProductImageWrap>
    </Zoom>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addItem: (item) => dispatch(addItem(item)),
});

export default connect(null, mapDispatchToProps)(ProductCard);
