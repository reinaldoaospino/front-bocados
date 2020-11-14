import React from "react";
import {
  CounterCartContainer,
  OptionWrapped,
  Option,
  OptionCounterWrapped,
} from "./counter-cart.styles";

const Counter = ({ counter, sumHandler, subHandler }) => (
  <CounterCartContainer>
    <OptionWrapped onClick={()=> subHandler()}>
      <Option>-</Option>
    </OptionWrapped>
    <OptionCounterWrapped>
      <Option>{counter}</Option>
    </OptionCounterWrapped>
    <OptionWrapped onClick={()=> sumHandler()}>
      <Option>+</Option>
    </OptionWrapped>
  </CounterCartContainer>
);

export default Counter;
