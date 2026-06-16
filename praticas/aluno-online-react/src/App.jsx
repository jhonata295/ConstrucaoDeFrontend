<<<<<<< HEAD
import Dashboard from "./pages/Dashboard";

function App() {
  return <Dashboard />;
=======
<<<<<<< HEAD
import "./App.css";

function App() {
  return <></>;
=======
<<<<<<< HEAD
import { Routes, Route, Navigate } from "react-router";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";

import { useAuth } from "./contexts/AuthContext";
=======
<<<<<<< HEAD
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Requerimentos from "./pages/Requerimentos";
import RequerimentoForm from "./forms/RequerimentoForm";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Requerimentos />} />

        <Route path="/requerimentos" element={<Requerimentos />} />

        <Route
          path="/requerimentos/novo"
          element={<RequerimentoForm />}
        />
      </Routes>
    </BrowserRouter>
=======
import {
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Layout from "./layouts/Layout";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";
import Notas from "./pages/Notas";
import Boletos from "./pages/Boletos";
import Requerimentos from "./pages/Requerimentos";

function PrivateRoute({ children }) {
  const token = localStorage.getItem("token");

  return token
    ? children
    : <Navigate to="/login" />;
}
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184

function App() {
  const { autenticado } = useAuth();

  if (!autenticado) {
    return (
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    );
  }

  return (
    <Routes>
<<<<<<< HEAD
      <Route path="/" element={<Dashboard />} />
      <Route path="/faltas" element={<Faltas />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
=======
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/"
        element={
          <PrivateRoute>
            <Layout />
          </PrivateRoute>
        }
      >
        <Route index element={<Dashboard />} />
        <Route path="faltas" element={<Faltas />} />
        <Route path="notas" element={<Notas />} />
        <Route path="boletos" element={<Boletos />} />
        <Route
          path="requerimentos"
          element={<Requerimentos />}
        />
      </Route>
    </Routes>
>>>>>>> 4f26fe0761741df1447ddede7ad45f80345fd349
>>>>>>> df0ce86869a026e163f5406b83b04f76cdbd5184
  );
>>>>>>> 7375836480e8c022a8eaf1015b86a00c907ac246
>>>>>>> cf5c677bd831cf9b9640c15fbbc79956326dcad8
}

export default App;