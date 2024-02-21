import { Global, ThemeProvider } from "@emotion/react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { globalStyles } from "./styles/globalStyles.js";
import { theme } from "./styles/theme.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
      <Global styles={globalStyles} />
    </ThemeProvider>
  </React.StrictMode>
);
