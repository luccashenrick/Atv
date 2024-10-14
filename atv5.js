let num = parseInt(prompt(`Digite um número (entre 1 a 7):`));

switch(num){
    case 1: alert(`Segunda-Feira`);
    break;

    case 2: alert(`Terça-Feira`);
    break;

    case 3: alert(`Quarta-Feira`);
    break;

    case 4: alert(`Quinta-Feira`);
    break;

    case 5: alert(`Sexta-Feira`);
    break;

    case 6: alert(`Sábado`);
    break;

    case 7: alert(`Domingo`);
    break;

    default:
        alert(`Número Invalido`);
}