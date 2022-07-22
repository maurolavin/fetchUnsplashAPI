const noEncontrado = 'Producto no encontrado';

const productos =[ "aceite de oliva extra virgen x500cc $650",
                "nueces californianas peladas por kilogramo $1500",
                "vino uva bonarda cosecha 2022 $1200",
]

const contactos =[
    "Instagram: @fincatierras",
    "Facebook.com/FincaTierrasC",
    "MercadoLibre: Origen Catamarca",
]

const reclamos =[
    "Para iniciar el reclamo, contactese a reclamos@fincatierras.com"
]

/* let seccion = prompt("¡Hola, Bienvenido a Finca Tierras Catamarqueñas! Desea comprar, contactar o reclamar?"); */

let botonProductos = document.getElementById("seleccionProducto");
let botonContacto = document.getElementById("seleccionContacto");
let botonReclamos = document.getElementById("seleccionReclamos");
let dynamicText = document.getElementById("dynamicText");

botonProductos.addEventListener("mousedown", () => {
    dynamicText.innerHTML = "<h4>Tenemos Aceite de Oliva Extra Virgen, Nueces Californianas y Vinos</h4>";
});
botonContacto.addEventListener("mousedown", () => {
    dynamicText.innerHTML = "<h4>Podes seguirnos en Instagram: @fincatierras, Facebook.com/FincaTierrasC o contactarnos en info@fincatierras.com.ar</h4>";
});
botonReclamos.addEventListener("mousedown", () => {
    dynamicText.innerHTML = "<h4>Para iniciar un reclamo o despejar una duda, contactanos por mail en info@fincatierras.com.ar con el asunto RECLAMO URGENTE</h4>";
});




/* let bienvenida = document.getElementById("bienvenida");
if(seccion === "comprar"){
    bienvenida.innerHTML = "<h4>Tenemos aceite de oliva extra virgen y nueces californianas de la mas alta calidad</h4>";
    bienvenida.classList.add('h4green');
}else if(seccion === "contactar"){
    bienvenida.innerHTML = "<h4>Podes contactarnos en instagram @fincatierras, facebook.com/fincatierrasc o nuestra tienda en mercadolibre</h4>";
    bienvenida.classList.add('h4black');
}else if(seccion === "reclamar"){
    bienvenida.innerHTML = "<h4>Para reclamos, devoluciones o sugerencias, por favor contactanos en info@fincatierras.com.ar con el asunto reclamo</h4>";
    bienvenida.classList.add('h4');
}else {
    bienvenida.innerHTML = "<h4>Bienvenido, que estas buscando?</h4>";
    bienvenida.classList.add('h4black');
}
 */




