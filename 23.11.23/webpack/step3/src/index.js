import React from "react";
// since react version 18
import { createRoot } from "react-dom/client";

import App from "./app";

const root = createRoot(document.querySelector("#root"));

root.render(<App />);
