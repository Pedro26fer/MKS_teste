import styled from "styled-components";
import { theme } from "@/src/styles/theme";

export const FooterStyled = styled.div`

    background-color: ${theme.colors.footerBackGround};
    position: absolute;
    top: 99%;

    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;

    p{
        font-weight: 400;
        font-size: 0.8rem;
    }

`