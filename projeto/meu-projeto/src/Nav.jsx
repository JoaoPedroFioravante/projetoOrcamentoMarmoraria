import { Outlet } from "react-router";
import LinkNav from "./LinkNav";
import "./nav.css";

export default function Nav() {
  return (
    <>
      <div className="banner-nav">
        <div className="bannerPrincipal">
          <img className="logo" src="logo.com" alt="banner da empresa" />
        </div>
        <nav className="navPrincipal">
          <LinkNav rota={"/"} children={"Inicio"} />
          <LinkNav rota={"/sobreNos"} children={"Sobre nós"} />
          <LinkNav rota={"/mostruario"} children={"Mostruário"} />
        </nav>
      </div>
      <Outlet />
    </>
  );
}
