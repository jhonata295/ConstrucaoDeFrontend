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
  );
}

export default App;