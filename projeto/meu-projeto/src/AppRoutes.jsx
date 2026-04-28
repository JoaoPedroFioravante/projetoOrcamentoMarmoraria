import { Route, BrowserRouter, Routes } from "react-router-dom";
import Inicio from "./Inicio"
import SobreNos from "./SobreNos"
import NotFound from "./NotFound";
import Nav from "./Nav";
import Mostruario from "./Mostruario";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav/>} >
          <Route path="/" element={<Inicio />} />
          <Route path="/sobreNos" element={<SobreNos />} />
          <Route path="/mostruario" element={<Mostruario />} />
        </Route>
        <Route path="*" element={<NotFound />} />

      </Routes>
    </BrowserRouter>
  );
}
