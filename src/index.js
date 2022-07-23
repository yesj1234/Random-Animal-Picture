import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Animal from "./routes/Animal";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faDog } from "@fortawesome/free-solid-svg-icons";

library.add(faDog);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <RecoilRoot>
    <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="dog" element={<Animal></Animal>}></Route>
            <Route path="duck" element={<Animal></Animal>}></Route>
            <Route path="fox" element={<Animal></Animal>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </React.StrictMode>
  </RecoilRoot>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
