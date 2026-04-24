import { Outlet } from "react-router";
import LinkNav from "./LinkNav";

export default function Nav(){
    return(
        <>
        <nav className="navPrincipal">
            <LinkNav  rota={"/orcamento"} children={"Orçamento"} />
            <LinkNav rota={"/"} children={"Meus Orçamentos"} />
            
        </nav>
        <Outlet/>
        </>
    )
}