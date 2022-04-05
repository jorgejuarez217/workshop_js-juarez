/*let numero = parseInt(prompt("ingrese un numero menor a 10 "));

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
*/

// Codigo para la entrega de simulador interactivo 

let precioFinal;
let precio = parseInt (prompt (" Ingrese el valor del producto para ver si tiene descuento"));
let cantProducto = parseInt (prompt (" Ingrese la cantidad de productos"));

const descuento = () => {
    if((precio >= 200) || (cantProducto >= 4)){
         desc = (precio * 20) / 100 ; 
    }else if (precio >= 150 && precio < 200){
         desc = (precio * 10) / 100 ;
        }else {
            document.write ("Su producto no tiene descuento");
        }
            precioFinal = precio - desc;
    return (precioFinal);
        
}
document.write("el precio final del producto es" + " $" + descuento());
 