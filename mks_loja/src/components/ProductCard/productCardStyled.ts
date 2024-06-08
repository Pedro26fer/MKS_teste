import styled from "styled-components";
import { theme } from "@/src/styles/theme";

export const ProductCardStyled = styled.div`
  width: 238px;
  height: 285px;
  background-color: ${theme.colors.primary};


  border: none;
  border-radius: 4px;
  box-shadow: 2px 3px 3px 2px ${theme.colors.footerBackGround};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  figure {
    display: flex;
    align-self: center;
    padding-top: 11px;
  }

  section {
    display: flex;
    align-items: center;
    justify-content: space-around;
    color: ${theme.colors.productCartTextColor};

    h3 {
      display: block;
      width: 134px;
      left: 14px;
      font-size: 18px;
      font-weight: 400;
      line-height: 19px;
    }

    div {
      color: ${theme.colors.primary};
      font-weight: 700;
      font-size: 14px;

      display: flex;
      align-items: center;
      justify-content: center;

      background-color: ${theme.colors.second};
      width: 64px;
      height: 26px;
      top: 173px;
      left: 142px;
      border-radius: 5px;
    }
  }

  span {
    font-size: 11px;
    font-weight: 300;
    line-height: 13px;
    color: ${theme.colors.productCartTextColor};
    display: inline-block;
    width: 202px;
    padding-left: 9px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 0px 0px 4px 4px;
    padding: 7px;

    background-color: ${theme.colors.backGroundBlue};
    color: ${theme.colors.primary};

    font-weight: 600;
    font-size: 14px;
  }
`;
