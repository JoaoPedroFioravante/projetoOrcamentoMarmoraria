import { NavLink, useLocation } from "react-router-dom"
import './App.css'

export default function LinkNav({children, rota}){
    const location = useLocation();
    
    return (
        <NavLink to={rota} className={`LinkNavEstilo ${rota === location.pathname? `LocalizacaoAtual`:""}`}>{children}</NavLink>
    )
}