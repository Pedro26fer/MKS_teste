import styled from "styled-components";
import { theme } from "@/src/styles/theme";

export const CartStyled = styled.aside`
  position: absolute;
  top: 0;
  right: 0;
  height: 100vh;
  width: 28vw;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  box-shadow: 3px 0px 4px 3px ${theme.colors.productCartTextColor};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.backGroundBlue};

  ul{
    display: flex;
    min-width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 1%;
    gap: 5%;
    min-height: 80%;
  }

  div{
    display: flex;
    align-items: center;
    width: 90%;
    justify-content: space-between;
    button{
      background-color: ${theme.colors.backGroundBlue};
    }

    h2{
      display: block;
      font-size: 27px;
      width: 50%;
    }
  }
`;
