
function podeSubir(altura,acompanhante) {
    if (altura >= 1.40 && altura <= 2.00) {
        return console.log('Acesso Autorizado')
       
    } else if (altura <= 1.40 && altura >= 1.20){
        return console.log('Acesso autorizado somente com acompanhante')
    }else 
    return console.log('Acesso Negado')
        
}return podeSubir(1.44,true)