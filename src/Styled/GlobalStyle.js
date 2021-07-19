import { createGlobalStyle } from "styled-components";

 const GlobalStyle  = createGlobalStyle`
:root{
    --primary-color:#007bff;
    --secondary-color:#6c757d;
    --background-dark-color:#10121A;
    --background-light-color:#F1F1F1;

    --border-color:#2e344e;
    --white-color:#fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;

}
    *{
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style: none;
        box-sizing: border-box;
    }
    body{
        background-color:var(--background-light-color);

    }
`
export default GlobalStyle;
