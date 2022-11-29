import React from "react";
import OpcaoDois from "./components/OpcaoDois";
import OpcaoUm from "./components/OpcaoUm";
import { StyleSection } from "./CssSection";

export default function Section(){

    const [mostrar, setMostrar] = React.useState(false)

    const funMostrar = () =>{
        setMostrar(!mostrar)
    }

    return(
        <StyleSection>
            <button className="btn" type="button" onClick={funMostrar}>Trocar Opção de sorteio</button>
            {mostrar ? (<OpcaoDois />) : <OpcaoUm /> }
        </StyleSection>
    )
}