import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
   font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    font-size:18px;
  --alpha: #BF182D;
  --beta: #E71D36;
  --gamma: #EA2E33;
  --delta:#ED3E30;
  --epsilon:#FF9F1C;
  --psi:#FECF8C;
  --omega: #FDFFFC;

}
  body,  html, #__next  {
    margin: 0;
    padding: 0;
    height: 100%;
  
    
  }
      * {
    box-sizing: border-box;
  }

  * {
    scrollbar-width: thin;
    scrollbar-color: var(--terciario) var(--alpha);
  }
    /* Chrome, Edge, and Safari */
*::-webkit-scrollbar {
  width: 17px;
}

*::-webkit-scrollbar-track {
  background: var(--terciario);
  border-radius: 5px;
}

*::-webkit-scrollbar-thumb {
  background-color: var(--alpha);
  border-radius: 14px;
  border: 3px solid var(--terciario);
}

::-webkit-scrollbar-thumb:hover {
  background-color: var(--alpha);
}
`;

export default GlobalStyle;
