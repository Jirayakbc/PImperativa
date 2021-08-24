peso = 110
altura = 1.62

imc = (peso/(altura*altura)).toFixed(2)
console.log(imc)
if (imc < 18.5)
    console.log("Seu IMC de: " +imc + " vc está abaixo do peso!")
    else if (imc >=18.5 && imc < 24.9)
    console.log("Seu IMC de: " +imc + " vc no peso ideal(parabéns)!")
    else if (imc >=24.9 && imc < 29.9 )
    console.log("Seu IMC de: " +imc + " vc esta levemente acima do peso")
    else if (imc >=29.9 && imc < 35.0)
    console.log("Seu IMC de: " +imc + " vc está com obesidade grau I!")
    else if (imc >=35.0 && imc < 39.9)
    console.log("Seu IMC de: " +imc +  "vc está com obesidade grau II ")
else
    console.log("Seu IMC de: " +imc + " vc está com obesidade grau III")
