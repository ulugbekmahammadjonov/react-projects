import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { GithubProvider } from "./components/search-github-users/context/context";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain="dev-8g0gy-mi.us.auth0.com"
      clientId="5buff7e3bPoqKI53GTYscAifh5VXaQ4k"
      redirectUri={window.location.origin}
      cacheLocation="localstorage"
    >
      <GithubProvider>
        <App />
      </GithubProvider>
    </Auth0Provider>
  </React.StrictMode>
);
