import React from "react";
import { StyleOpcao } from "./CssOpcao.js";
import { validarNaLista, validarNumero } from "./funcoes.js"

const lista = []
// function checkAnswer(e) {//ação para quando o enter for pressionado
//     if (e.key === "Enter") {
//         console.log("Enter key was pressed");
//     }
// }

//adicionar essa linha no input = onKeyUp={(event) => {checkAnswer(event, value)}}

export default function OpcaoUm(){
    const [valor, setValor] = React.useState('')
    const [resultado, setResultado] = React.useState(null)

    const capturaInput = e => setValor(e.target.value)

    const adicionarNumero = async e => {
        e.preventDefault()
        let n = Number(valor)
        if (validarNumero(n) && !validarNaLista(n, lista)) {
                lista.push(n)
                console.log(n) //retorno console
                console.log(lista) //retorno console
                console.log(`Valor ${n} adicionado`)
                alert(`Numero Adicionado ao Sorteo ${n}`) //retorno console
                setValor('')
                
            } else {
                console.log(`Valor invalido ou já encontrado na lista.`)
                alert(`Valor invalido ou já encontrado na lista.`)
                
            }

    }

    const sortear = async e => {
        e.preventDefault()
        console.log(lista) //retorno console

        if(lista.length === 0){
            console.log(`Lista vazia, impossivel fazer Sorteio.`)
            setResultado(`Lista vazia, impossivel fazer Sorteo.`)
            // alert(`Lista vazia, impossivel fazer Sorteo.`)
        }else{
            const numeroGerado = Math.floor(Math.random(lista) * lista.length)
            const resultado = lista[numeroGerado]
            console.log(`Retorno da posição da lista ${numeroGerado}`) //retorno console
            console.log(`O numero sorteado foi: ${resultado}`)
            // alert(`Sua lista é ${lista}\nO numero sorteado foi: ${resultado}`)
            setResultado(resultado)
            lista.length = 0 //retorno console
            
        }
    }

    const exibir = (x) => {
        const exibirValor = Number(x)

        if( x !== ''){
            return `Numero há ser adicionado ao sorteo ${exibirValor}`
        }else if(resultado !== null){
            return resultado
        }

        return ``
    }
    
    return(
        <StyleOpcao>
            <h4>Opção 1</h4>
            <label>Digite os numeros do sorteio por vez!!</label>
            <input type="text" name="numero" placeholder="Digite aqui!!" onChange={capturaInput} value={valor}/>
            <div className="btnOpc">
                <button type="submit" onClick={adicionarNumero}>Adicionar</button>
                <button type="submit" onClick={sortear}>Sortear</button>
            </div>
            <p>
                {exibir(valor)}
            </p>
        </StyleOpcao>
    )
}