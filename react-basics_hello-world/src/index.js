// import React, { StrictMode } from "react";
// import { createRoot } from "react-dom/client";

// import App from "./App";

import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const rootElement = document.querySelector("#root");
const root = createRoot(rootElement);

//root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
