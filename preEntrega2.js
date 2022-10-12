function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("Bienvenido a la tienda online de DecoHome " + nombreIngresado)
} 


let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
    alert("ya eres mayor de edad y puedes comprar en el sitio")

    let producto = prompt("ingresa el producto que desea comprar : producto1, producto2, producto3 ( s para salir)");
    while (producto != "s") {
        switch (producto) {
            case "producto1":
                console.log("el precio del producto1 es $4000");
                break;
            case "producto2":
                console.log("el precio del producto2 es $3000");
                break;
            case "producto3":
                console.log("el precio del producto3 es $2500");
                break;
    
            default:
                console.log("producto no disponible!");
                break;
        }
        producto = prompt("ingrese el producto que desa comprar : producto1, producto2, producto3 (s para salir)")
    }
}else{
    alert("Eres menor no puedes continuarr")
}

