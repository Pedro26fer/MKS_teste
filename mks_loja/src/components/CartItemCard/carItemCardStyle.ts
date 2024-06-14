import styled from "styled-components";
import { theme } from "@/src/styles/theme";

export const CartItemCardStyled = styled.div`
    display: flex;
    min-width: 100%;
    color: ${theme.colors.productCartTextColor};
    height: 95%;
    align-items: center;

    position: relative;

    justify-content: space-evenly;
    gap:7%;
    padding: 2%;

    border-radius: 8px;

    background-color: ${theme.colors.primary};


    section{
        width: 100%;
        display:flex;
        align-items: center;
        gap: 8%;
        p{
            font-size: 13px;
            line-height: 17px;
            font-weight: 400;
            width: 100%;
            color: ${theme.colors.productCartTextColor};
        }      

    }

    div{
        display:flex;
        height: 100%;
        width: 35%;
        flex-direction: column;
        justify-content: center;
        gap: 2%;
        span{
            font-size: 12px;
        }

        article{
            border: 1px  solid ${theme.colors.footerBackGround};
            border-radius: 7px;
            padding: 2px;
            cursor: pointer;

        }
    }

    .preco{
        color: ${theme.colors.second};
        font-size: 17px;
        font-weight: 700;
    }

    .delete_product_button{
        position: absolute;
        z-index: 3;
        top: 1%;
        right: 0.1%;
        cursor: pointer
    }
`