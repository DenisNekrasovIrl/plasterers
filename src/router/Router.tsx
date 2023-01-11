import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";

export default function Router<T extends React.FC>(): React.ReactElement {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.main.path} element={<routes.main.element />} />
        <Route path={routes.error.path} element={<routes.error.element />} />
      </Routes>
    </BrowserRouter>
  );
}
