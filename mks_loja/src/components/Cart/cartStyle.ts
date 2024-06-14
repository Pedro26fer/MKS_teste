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
  justify-content: space-between;
  align-items: center;

  box-shadow: 3px 0px 4px 3px ${theme.colors.productCartTextColor};
  color: ${theme.colors.primary};
  background-color: ${theme.colors.backGroundBlue};

  ul{
    display: flex;
    min-width: 80%;
    flex-direction: column;
    justify-content: flex-start;
    padding-top: 7%;
    gap: 2%;
    height: 73%;
    overflow-y: auto;
    ::-webkit-scrollbar-track{
      background-color: ${theme.colors.footerBackGround};
    }

  }



  .div_cart, .total_buys{
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

  #total_buys{
    padding-bottom: 2%;

  }

  .div_cart{
    padding-top: 4%;
  }

  #pay{
    width: 100%;
    height: 9vh;
    color: ${theme.colors.primary};
    font-size: 1.3em;
    font-weight: 700;
    background-color: ${theme.colors.second};
  }
`;
