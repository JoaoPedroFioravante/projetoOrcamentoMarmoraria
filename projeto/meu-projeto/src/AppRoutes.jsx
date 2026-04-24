import { Route, BrowserRouter, Routes } from "react-router-dom";
import Orcamento from "./Orcamento";
import GetOrcamento from "./GetOrcamento";
import NotFound from "./NotFound";
import Nav from "./Nav";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>} >
        <Route path="/" element={<GetOrcamento />} />
        <Route path="/orcamento" element={<Orcamento />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
