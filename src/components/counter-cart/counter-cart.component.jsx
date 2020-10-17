import React from "react";
import {
  CounterCartContainer,
  OptionWrapped,
  Option,
  OptionCounterWrapped,
} from "./counter-cart.styles";

const Counter = () => (
  <CounterCartContainer>
    <OptionWrapped>
      <Option>-</Option>
    </OptionWrapped>
    <OptionCounterWrapped>
      <Option>1</Option>
    </OptionCounterWrapped>
    <OptionWrapped>
      <Option>+</Option>
    </OptionWrapped>
  </CounterCartContainer>
);

export default Counter;
