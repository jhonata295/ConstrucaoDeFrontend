import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Faltas from "./pages/Faltas";

import { useAuth } from "./contexts/AuthContext";

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
      <Route path="/" element={<Dashboard />} />
      <Route path="/faltas" element={<Faltas />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;