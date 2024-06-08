import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');

    /* CSS Reset */
    *,
    *::before,
    *::after{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Montserrat', sans-serif;
        background-color: aliceblue;
        display: flex;
        flex-direction: column;
        align-content: center;
        position: relative
    }

    ul{
        list-style: none;
    }

    button{
        cursor: pointer;
        border: none;
        font-family: 'Montserrat', sans-serif;
    }

    img{
        max-width: 100%;
        height: auto;
    }


`;

export default GlobalStyle
