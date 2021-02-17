import styled, { css } from "styled-components";

const OptionStyles = css`
  border: 1px solid rgba(0, 0, 0, 0.1);
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
  @media (max-width: 810px) {
    height: 18px;
    width:15px;
    padding:5px;
  }
`;

export const CounterCartContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  @media (max-width: 810px) {
    display: flex;
  }
`;

export const OptionWrapped = styled.div`
  ${OptionStyles}
`;

export const OptionCounterWrapped = styled.div`
  ${OptionStyles}
  width: 144px;
  @media (max-width: 810px) {
    width: 110px;
    padding:5px;
  }
`;
export const Option = styled.span`
  font-size: 1.1em;
`;
