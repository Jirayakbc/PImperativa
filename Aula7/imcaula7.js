peso = 110
altura = 1.62

imc = Math.round(peso/(altura*altura))
if (imc <= 18)
    console.log("Seu IMC de: " +imc + " vc está abaixo do peso!")
else if (imc >=30)
    console.log("Seu IMC de: " +imc + " vc está acima do peso!")
else
    console.log("Seu IMC de: " +imc + " vc está no peso ideal!")
