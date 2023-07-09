import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        overflow-x: hidden;
        margin: 0;
        padding: 0;
        font-family: 'Poppins', sans-serif;
    }
    body{
        color: hsl(92, 100%, 9%);
        // font-size: 1.15em;
    }

    // p{
    //     opacity: 0.6;
    // }

    img{
        // max-width: 100%;
    }

    ::-webkit-scrollbar {
        display: none;
      }
  
`

export default GlobalStyles