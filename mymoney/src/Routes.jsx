import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Login } from "./Pages/Login/Login";
import { TelaInicial } from "./Pages/TelaInicial/TelaInicial";
import { Fundo } from "./components/Fundo";

export function AppRoutes() {
  return (
    <Router>
      <Routes>
        <Route path="/Login" element={<Login />} />
        <Route path="/TelaInicial" element={<TelaInicial />} />
        <Route path="/components/Fundo" element={<Fundo />} />
      </Routes>
    </Router>
  );
}
