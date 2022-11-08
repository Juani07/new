
let calculo01 = parseInt(prompt("Ingrese un numero: "));
let operacion = prompt("ingrese una operacion +-*/");
let calculo02 = parseInt(prompt("ingrse un numero"));

let resultado;

switch (operacion) {
    case "+":
        resultado =(calculo01+calculo02)
        alert ("su resultado es" + resultado)
        break;
    case "-":
        resultado=(calculo01 - calculo02)
        alert("su resultado es"+ resultado)
        break;
    case "/":
        resultado = (calculo01 / calculo02)
    case "0":
        resultado <= 0 
        alert("tu operacion no es valida")
        break;
    case "*":
        resultado = (calculo01 * calculo02)
    case "0":
            resultado <= 0 
            alert("tu operacion no es valida")
            break;
    default:
        alert("error, debe ingresarse una operacion valida");
        break
};


