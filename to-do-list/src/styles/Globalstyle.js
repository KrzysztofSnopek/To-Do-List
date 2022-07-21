import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body {
        background: rgb(20,16,98);
        background: linear-gradient(0deg, rgba(20,70,198,1) 0%, rgba(28,100,225,1) 35%, rgba(32,207,242,0.8) 100%);
    }

    .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .box {
        height: 100vh;
        min-height: 100vh;
        flex-grow: 1;
        flex-shrink: 1;
        flex-basis: 100%;
        min-width: 300px;
    }

    NavButton {
        :active {
            color: white;
        }
    }
`