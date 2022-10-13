function solicitarNombre(){
    let nombreIngresado   = prompt("Ingresar nombre")
    alert("Bienvenido a la tienda online de DecoHome " + nombreIngresado)
} 

class Productos {
    constructor (id, nombre, descripcion, precio){
        this.nombre = id;
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
    mostrarDetalles(){
        console.log(`el producto seleccionado es ${this.nombre} ${this.descripcion}
                     tiene un precio de ${this.precio}        
        `);
    }
}


const carrito = {
            productos : [],
            precioTotal : 0,
            cantidad : 0,
}

const producto1 = new Productos (15, "producto 1", "skfsdlfjsds", 2000);
const producto2 = new Productos (16, "producto 2", "skfsdlfjsds", 2200);
const producto3 = new Productos (17, "producto 3", "skfsdlfjsds", 1200);


let edad = parseInt(prompt("ingrese su edad"));

if (edad >= 18) {
    alert("ya eres mayor de edad y puedes comprar en el sitio")

    let producto = prompt("ingresa el producto que desea comprar : producto1, producto2, producto3 ( s para salir)");
    while (producto != "s") {
        switch (producto) {
            case "producto1":
                carrito.productos.push(producto1)
                console.log("el precio del producto1 es "+ producto1.precio);
                break;
            case "producto2":
                carrito.productos.push(producto2)
                console.log("el precio del producto2 es "+ producto2.precio);
                break;
            case "producto3":
                carrito.productos.push(producto3)
                console.log("el precio del "+ producto3.nombre+ " es " + producto3.precio);
                break;
    
            default:
                console.log("producto no disponible!");
                break;
        }
        producto = prompt("ingrese el producto que desa comprar : producto1, producto2, producto3 (s para salir)")
    }

    //mostrarTotal();
}else{
    alert("Eres menor no puedes continuarr")
}

/*
function mostrarTotal () {
for (const producto of carrito.productos){

    carrito.precioTotal += producto.precio 
    
 }

 console.log("usted tiene " + carrito.productos.length + " productos en el carrito " + "el total de la compra es "+ carrito.precioTotal);

}
 */

const valorTotalCarrito = carrito.productos.reduce((sumador,productos) => sumador+productos.precio,0);
console.log("usted tiene " + carrito.productos.length + " productos en el carrito " + "el total de la compra es " + valorTotalCarrito);