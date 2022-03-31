import React from "react";
import { NavLink } from 'react-router-dom';

import { Container,
LogoImage,
NavUl,
NavLi } from "./style";
import Logo from '../../assets/youthtrackerlogo.png';

export default function Navbar() {
    return (
        <Container>
            <NavLink to="/">
                <LogoImage src={Logo}/>
            </NavLink>
            <NavUl>
                <NavLi><NavLink to="/">Início</NavLink></NavLi>
                <NavLi><NavLink to="/series">Séries</NavLink></NavLi>
                <NavLi><NavLink to="/inventory">Inventário</NavLink></NavLi>
            </NavUl>
        </Container>
    )
}