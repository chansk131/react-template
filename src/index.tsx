import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { ThemeProvider } from "styled-components";
import { SWRConfig } from "swr";
import App from "./App";
import "./i18n";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import theme from "./theme/theme";
import axios from "./services/axios";

const swrConfig = {
  fetcher: (url: string) => axios.get(url).then((res) => res.data),
  shouldRetryOnError: false,
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <SWRConfig value={swrConfig}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <App />
          </ThemeProvider>
        </RecoilRoot>
      </SWRConfig>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
