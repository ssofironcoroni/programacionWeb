

let carroDeConsultas = [];

let botonesReservar = document.getElementsByClassName('btnReservar');

  

for (var i = 0; i < botonesReservar.length; i++) {
  botonesReservar[i].addEventListener('click', reservarConsulta);
  }


  /* los elementos que vamos a agregar de cada consulta */
function reservarConsulta() 
{
    var viaje = {
      destino: this.parentNode.querySelector('h3').textContent,
      costoConsulta: parseFloat(this.parentNode.querySelector('.costoConsulta').textContent.slice(1)),
      cantReservas: 1
  };


  /* si es que está en el carrito ... */
  var hayReserva = carroDeConsultas.find(function(item) {
    return item.destino === viaje.destino;
  });

if (hayReserva) { 
    hayReserva.cantReservas++;
} 
else {
    carroDeConsultas.push(viaje);
  }

  consultasUpdates();
}

function consultasUpdates() {
  let carroCon = document.getElementById('carroCon');
  
  let totalConsulta = document.getElementById('totalConsulta');
  
  let eliminarConsulta = document.getElementById('eliminarConsulta');
  
  carroCon.innerHTML = '';  totalConsulta.textContent = '$';


  for (var m = 0; m < carroDeConsultas.length; m++) {
    var viaje = carroDeConsultas[m];
   
    var precioF = viaje.costoConsulta * viaje.cantReservas;
   
    var orden = document.createElement('tr');   /* recordar: que tr crea en forma de tabla */
    orden.innerHTML = `<td>${viaje.destino}</td><td>$${viaje.costoConsulta}</td><td>${viaje.cantReservas}</td><td>$${precioF}</td><td>
    <button class="eliminarConsulta btnBorrar" data-elim="${m}"> <img class="tachoCarrito" src="./images/tacho.png"> </button></td>`;
    carroCon.appendChild(orden);
  }

  var precioFinal = carroDeConsultas.reduce(function(x, viaje) {
    return x + viaje.costoConsulta * viaje.cantReservas;   }, 0);

  totalConsulta.textContent='$'+ precioFinal.toFixed(2); eliminarConsulta.addEventListener('click', vaciarCarroConsultas);
  
  let botonesBorrarConsulta = document.getElementsByClassName('eliminarConsulta');
  
  for (var n = 0; n < botonesBorrarConsulta.length; n++) {
    botonesBorrarConsulta[n].addEventListener('click', borrarUnaConsulta);
  }
}
/* vaciamos el carro y lo reiniciamos */
function vaciarCarroConsultas() {
  carroDeConsultas = [];   /* eliminamos lo que haya en carrito y reiniciamos el array */
  consultasUpdates();      /* lo actualizamos */
}

/* borramos del array de carrito y actualizamos */
function borrarUnaConsulta() {
  var elim = parseInt(this.dataset.elim);
  carroDeConsultas.splice(elim, 1);
  consultasUpdates();
}


