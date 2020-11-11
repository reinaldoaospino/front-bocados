import styled from "styled-components";

export const CartDropDownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 340px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  border: 1px solid black;
  background-color: white;
  top: 70px;
  right: 40px;
  z-index: 5;
  z-index: 5;
  overflow-y: scroll;
`;

export const EmpyMessage = styled.span`
  font-size: 18px;
  margin: 15px auto;
`;

export const CartItems = styled.div`
  height: 240px;
  display: flex;  
  flex-direction: column;
`;

export const ButtonWrap = styled.div`
margin-top: auto;
`