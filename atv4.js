let peso = 80
let altura = 1.80
let imc = peso / (altura * altura)

if(imc >= 18.5 && imc < 24.9){
    console.log(`Está Saudavel\nSeu IMC: ${imc.toFixed(2)}`);
}

else{
    console.log(`Não está Saudavel\nSeu IMC: ${imc.toFixed(2)}`);
}