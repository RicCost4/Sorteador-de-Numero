import React from "react";
import { StyleOpcao } from "./CssOpcao";

// function sortear(nInicial, nFinal) {
    
//     const nI = Number(nInicial)
//     const nF = Number(nFinal)
//     const lista = []
    
//     if (nI >= 1 && nF > nI){
//         for(let c = nI; c <= nF; c++){
//             lista.push(c)
//         }
//         const numeroGerado = Math.floor(Math.random(lista) * lista.length)
//         const resultado = l[numeroGerado]
    
//         console.log(lista)
//         console.log(`Retorno da posição da lista ${numeroGerado}`) //retorno console
//         console.log(`O numero sorteado foi: ${resultado}`) //retorno console

//     }else{
//         console.log(`Numeros invalido, digite novamente.`)
//     }
// }

export default function OpcaoDois(){

    const [valorInicial, setValorInicial] = React.useState('')
    const [valorFinal, setValorFinal] = React.useState('')

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
            alert(`Sua lista é ${lista}\nO numero sorteado foi: ${resultado}`) //retorno console
            setValorInicial('')
            setValorFinal('')

        }else{
            console.log(`Numeros invalido, digite novamente.`)
            alert(`Numeros invalido, digite novamente.`)
        }
    }

    // const capturaInput = e => setValorInicial(e.target.value)

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
                
            </p>
        </StyleOpcao>
    )
}