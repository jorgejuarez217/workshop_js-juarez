let numero = parseInt(prompt("ingrese un numero menor a 10 "));

if ((numero%2) == 0 && numero < 10){
    for (let i =numero; i <= 30; i+=2 ){
        document.write(i + "  " + "es un  numero par" + "<br>");
    }
        document.write("se muestran numero pares hasta el numero 30");
}else if ((numero%2) !== 0 && numero < 10){
    for (let i =numero; i <= 30; i+=3 ){
        document.write(i + "  " + "es un  numero impar" + "<br>");
    }
        document.write("se muestran numero impares hasta el numero 30");
}else {
    numero = parseInt(prompt("ingrese un numero menor a 10 "));
}

