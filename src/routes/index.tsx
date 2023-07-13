import React from "react";
import { Routes, Route } from "react-router-dom";
import { App } from "../pages";

export const AppRoutes = () => (
  <Routes>
    <Route path="/" element={<App />} />
  </Routes>
);
