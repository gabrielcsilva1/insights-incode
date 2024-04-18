import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    :root {
        font-size: 62.5%;
    }

    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;

        :focus {
            outline: 0;
            box-shadow: 0 0 0 1px ${({theme}) => theme.COLORS.GRAY_200};
        }
    }

    body {
        min-height: 100vh;
        background-color: ${({theme}) => theme.COLORS.BLACK};
    }

    body, input, textarea, button {
        color: ${({theme}) => theme.COLORS.WHITE};
        font-size: 1.6rem;
        font-family:"Poppins", sans-serif;
        font-weight: 400;
    }
`