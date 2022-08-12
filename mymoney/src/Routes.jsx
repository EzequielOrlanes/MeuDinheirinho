import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { TelaInicial } from "./Pages/TelaInicial/TelaInicial";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/TelaInicial" element={<TelaInicial />} />
      </Routes>
    </Router>
  );
}
