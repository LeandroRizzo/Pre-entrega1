class Producto {
    constructor(tipo, marca, cantidad, precio){
        this.tipo = tipo,
        this.marca = marca,
        this.cantidad = cantidad,
        this.precio = precio,
        this.disponible = true
    }
    sumarIva(){
        return this.precio * 1.21;
    }
}

var arrayProductos = [];
do{
    var comprobacion = prompt(`Ingrese un tipo producto o fin para terminar`);
    if (comprobacion === "fin"|| comprobacion ==="FIN" || comprobacion === "Fin"){
        break;
    }else{
        tipoP = comprobacion;
        var marcaP =prompt("Ingrese la marca");
        var cantidadP = prompt("Ingrese la cantidad");
        var precioP = prompt("Ingrese el valor");
        arrayProductos.push(new Producto(tipoP, marcaP, cantidadP, precioP)); 
    }
}
while (comprobacion != "fin" || comprobacion != "FIN" || comprobacion != "Fin");

for(var producto of arrayProductos){
console.log(producto.sumarIva());
console.log(producto.sumarIva() * producto.cantidad);
}

let ProductosOrdenados = arrayProductos.sort(function(a, b){
    if (a.tipo > b.tipo){
        return 1;
    }
    if (a.tipo < b.tipo){
        return -1;
    }
    return 0;
});

console.log(ProductosOrdenados);

var sinStock = arrayProductos.filter(producto => producto.marca == comprobacion || producto.cantidad == 0 || producto.disponible == false);
console.log(`Producto ${producto.marca} sin stock`);
