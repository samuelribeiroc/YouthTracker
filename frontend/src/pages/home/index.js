import React from "react";
import { Logo, Title } from "./style";

import LogoImage from "../../assets/youthtrackerlogo.png";

export default function Home() {
    return (
        <>
            <Title>Olá, seja bem-vinde ao <Logo src={LogoImage} /></Title>
        </>
    )
}