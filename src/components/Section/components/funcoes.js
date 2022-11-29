export function validarNumero(n){
    if(Number(n) >= 1 ){
        return true
    }else{
        return false
    }
}

export function validarNaLista(n, l){
    if(l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}