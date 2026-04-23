import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Orcamento from "./Orcamento";
import GetOrcamento from "./GetOrcamento";
import NotFound from "./NotFound";
import Banner from "./Banner";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/orcamento" element={<Orcamento />} />
        <Route path="/meus-orcamentos" element={<GetOrcamento />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
