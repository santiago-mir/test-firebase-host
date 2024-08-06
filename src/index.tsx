import React, { Suspense } from "react";
import { router } from "./router";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { MyForm } from "./components/searchForm";
ReactDOM.createRoot(document.getElementById("app")).render(
  <RecoilRoot>
    <Suspense fallback={"cargando"}>
      <RouterProvider router={router} />
    </Suspense>
  </RecoilRoot>
);
