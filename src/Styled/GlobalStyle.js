import { createGlobalStyle } from "styled-components";

 const GlobalStyle  = createGlobalStyle`
:root{
    --primary-color:#007bff;
    --secondary-color:#6c757d;
    --background-dark-color:#10121A;
    --background-dark-gray:#191d2b;

    --background-light-color:#F1F1F1;
    --background-light-color-2:rgba(3,127,255,0.3);


    --border-color:#2e344e;
    --white-color:#fff;
    --font-light-color:#a4acc4;
    --font-dark-color:#313131;
    --font-dark-color-2:#151515;
    --sidebar-dark-color:#191d2b;

}
    *{
        margin: 0;
        padding: 0;
        text-decoration:none;
        list-style: none;
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-size:1.2rem;
    }
    body{
        background-color:var(--background-dark-color);
        color:var(--font-light-color);
    }
    a{
        font-family:inherit;
        color:inherit;
        font-size:inherit;
        font-size:1rem;
    }
    h1{
        font-size:3rem;
        color:var(--white-color);
        span{
            font-size:inherit; 
        }
    }
    span{
        color:var(--primary-color);
    }
`
export default GlobalStyle;
