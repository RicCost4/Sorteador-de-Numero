import styled from "styled-components";


export const StyleOpcao = styled.div`
    label{
        color: blue;
        margin-right: 10px;
    }
    input{
        background-color: #5c8bd6c0;
        color: blue;
        width: 85px;
        font-size: 20px;
        border: none;
        border-radius: 5px;
        ::-webkit-input-placeholder{
            text-align: center;
            text-transform: uppercase;
            font-size: 0.6em;
            color: #5c8bd6;
        }
    }
    h4{
        color: blue;
        font-size: 1.2em;
        margin-bottom: 10px;
        padding: 10px;
    }
    .btnOpc{
        margin: auto;
        width: 100%;
        display: inline-flex;
        justify-content: center;
        justify-items: center;
        button{
            background-color: #5c8bd6c0;
            color: #5c8bd6;
            border: 1px none #5c8bd6c0;
            border-radius: 20px;
            margin: 10px;
            padding: 5px;
            width: 100px;
            font-size: 1.1em;
        
        }
    }
    .opc2{
        margin: 5px;
        padding: 5px;
    }
`