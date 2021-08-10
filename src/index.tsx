import { Global, css } from "@emotion/react";

import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

const indexCSS = css`
  body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu",
      "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    min-height: 100vh;
    max-width: 100vw;
  }
  #root {
    height: 100%;
    width: 100%;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
  }
`;

const Index = () => {
  return (
    <React.StrictMode>
      <Global
        styles={css`
          ${indexCSS}
        `}
      />
      <App />
    </React.StrictMode>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
