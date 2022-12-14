import React from "react";
import { StyleOpcao } from "./CssOpcao";

export default function OpcaoDois(){

    const [valorInicial, setValorInicial] = React.useState('')
    const [valorFinal, setValorFinal] = React.useState('')
    const [capResultado, setCapResultado] = React.useState(null)

    const sortear = async e => {
        e.preventDefault()
        const nI = Number(valorInicial)
        const nF = Number(valorFinal)
        const lista = []
    
        if (nI >= 1 && nF > nI){
            for(let c = nI; c <= nF; c++){
                lista.push(c)
            }
            const numeroGerado = Math.floor(Math.random(lista) * lista.length)
            const resultado = lista[numeroGerado]
    
            console.log(lista)
            console.log(`Retorno da posição da lista ${numeroGerado}`) //retorno console
            console.log(`O numero sorteado foi: ${resultado}`)
            setCapResultado(resultado)
            setValorInicial('')
            setValorFinal('')

        }else{
            console.log(`Números inválido, digite novamente.`)
            setCapResultado(`Números inválido, digite novamente.`)
        }
    }

    return(
        <StyleOpcao>
            <h4>Opção 2</h4>
            <div className="opc2">
                <label>Digite um numero inicial</label>
                <input type="text" name="valorInicial" placeholder="Digite aqui!!" onChange={(e) => {
                    setValorInicial(e.target.value)
                }} value={valorInicial} />            
            </div>
            <div className="opc2">
                <label>Digite um numero final</label>
                <input type="text" name="valorFinal" placeholder="Digite aqui!!" onChange={(e) => {
                    setValorFinal(e.target.value)
                }} value={valorFinal} />
            </div>
            <div className="btnOpc">
                <button type="submit" onClick={sortear}>Sortear</button>
            </div>
            <p>
                O numero sorteado foi: {capResultado}
            </p>
        </StyleOpcao>
    )
}