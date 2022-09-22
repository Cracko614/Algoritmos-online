
function suma(){
    var v1 = 0;
    var v2 = 0;
    var suma = 0;
    
    
    v1 = parseInt(prompt("Ingresa un numero: "));
    
    v2 = parseInt(prompt("Ingresa otro numero: "));
    suma = v1 + v2;
    alert ("La suma es: " + suma)

}
function operaciones(){
    var v1 = 0;
    var v2 = 0;
    var suma = 0;
    var resta = 0;
    var multiplicacion = 0;
    var division = 0;

    v1 = parseInt(prompt("Ingresa un numero: "));
    
    v2 = parseInt(prompt("Ingresa otro numero: "));

    suma = v1 + v2;
    
    resta = v1-v2;
    
    multiplicacion = v1 * v2;
    
    division = v1/v2;

    alert ("La suma es: " + suma + 
            "\nLa resta es: "  + resta + 
            "\nLa multiplicacion es: "  + multiplicacion + 
            "\nLa division es: " + division);
 
}
function numeroMayor(){
    var v1 = 0;
    var v2 = 0;

    v1 = parseInt(prompt("Ingresa un numero: "));

    v2 = parseInt(prompt("Ingresa otro numero: "));

    if(v1==v2){
        alert ("Ambos numeros: " + v1 + " y " + v2 + " son iguales.");        
    }
    else if (v1 < v2){
        alert (v1 + " es menor que " + v2);
    }
    else{
        alert (v1 + " es mayor que " + v2);
    }
}
function cuadrado(){
    var v1 = 0;
    var cuadrado = 0;

    v1 = parseInt(prompt("Ingresa un numero: "));

    cuadrado = v1 * v1;
    alert ("El cuadrado de "+ v1 + " es: " + cuadrado);

}
function areaT(){
    var base = 0;
    var altura = 0;
    var area = 0;

    base = parseInt(prompt("Ingresa el valor de la base: "));
    altura = parseInt(prompt("Ingresa el valor de la altura: "));
    area = (base * altura)/2;
    alert ("el area del triangulo de base: " + base + " y altura: " + altura + " es: " + area);
}
function pulgadas(){
    var cm = 0;
    var metros = 0;
    var pulgadas = 0;

    pulgadas = parseInt(prompt("Ingresa el valor de la longitud: "));
    metros = pulgadas * 39.37;
    cm = pulgadas * 2.54;

    alert ("El valor de la longitud " + pulgadas + " pulgadas en centimetros es: " + cm + "\n y en metros es: " + metros);
}
