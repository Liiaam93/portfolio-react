import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import customTheme from "./styles/theme";
import "@fontsource/kanit/400.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <ChakraProvider resetCSS theme={customTheme}>
    <React.StrictMode>
      <head>
        <title>Liam Burbidge</title>
        <meta name="description" content="Liam Burbidge online portfolio" />
      </head>
      <App />
    </React.StrictMode>
  </ChakraProvider>
);
