const carritoButton = document.getElementById('carrito');
const cerrarCarritoButton = document.getElementById('cerrarCarrito');

console.log(carritoButton);

let carritoVisible = false;

function alternarCarrito() {
    if (carritoVisible) {
        console.log('Ocultar el carrito');
    } else {
        console.log('Mostrar el carrito');
    }
    carritoVisible = !carritoVisible;

    const carritoContenido = document.getElementById('carritoContenido');
    if (carritoVisible) {
        carritoContenido.style.display = 'block';
    } else {
        carritoContenido.style.display = 'none';
    }
}

carritoButton.addEventListener('click', alternarCarrito);

function cerrarCarritoDesdeBoton() {
    carritoVisible = false;
    const carritoContenido = document.getElementById('carritoContenido');
    carritoContenido.style.display = 'none';
}

cerrarCarritoButton.addEventListener('click', cerrarCarritoDesdeBoton);

function cerrarCarrito() {
    carritoVisible = false;
    const carritoContenido = document.getElementById('carritoContenido');
    carritoContenido.style.display = 'none';
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        cerrarCarrito();
    }
});

function clicFueraDelCarrito(event) {
    const carritoContenido = document.getElementById('carritoContenido');
    if (!carritoContenido.contains(event.target) && carritoVisible) {
        cerrarCarrito();
    }
}

document.addEventListener('click', clicFueraDelCarrito);

function limpiarEventos() {
    document.removeEventListener('keydown', cerrarCarrito);
    document.removeEventListener('click', clicFueraDelCarrito);
}

carritoButton.addEventListener('click', limpiarEventos);

