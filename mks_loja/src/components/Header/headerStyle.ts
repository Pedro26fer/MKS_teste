import styled from "styled-components";
import { theme } from "@/src/styles/theme";

export const HeaderStyled = styled.div`
  display: flex;
  justify-content: center;
  gap: 80%;
  align-items: center;

  background-color: ${theme.colors.backGroundBlue};
  color: ${theme.colors.primary};
  width: 100%;
  height: 101px;

  h1 {
    width: auto;
    font-family: Montserrat;
    font-size: 40px;
    font-weight: 600;

    span {
      font-weight: 300;
      font-size: 20px;
    }
  }

  button {
    display: flex;

    width: 90px;
    height: 45px;
    border-radius: 8px;
    border: none;

    background-color: ${theme.colors.primary};
    font-weight: 800;
    font-size: medium;

    align-items: center;
    justify-content: center;
    gap: 20%;
  }
`;
