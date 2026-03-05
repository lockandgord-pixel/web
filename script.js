const productos = [
    {
        nombre: "V80 PRO",
        categoria: "hogar",
        precio: "Desde RD$18,699",
        imagen: "llavin1.png.png", // Nombre exacto como me indicaste
        descripcion: "Desbloqueo con reconocimiento facial, huella, palma, tarjeta, códigos y desbloqueo remoto desde cualquier parte del mundo."
    },
    {
        nombre: "AURUM X3 IA",
        categoria: "hogar",
        precio: "Desde RD$31,699",
        imagen: "aurumx3ia.png",
        descripcion: "Desbloqueo con reconocimiento facial, huella, palma, tarjeta, códigos, 3 cámaras de seguridad, inteligencia artificial integrada y desbloqueo remoto desde cualquier parte del mundo."
    },
    {
        nombre: "H18 PRO MAX",
        categoria: "hogar",
        precio: "Desde RD$17,699",
        imagen: "H18PROMAX.png",
        descripcion: "Desbloqueo con reconocimiento facial, huella, palma, tarjeta, códigos, 3 cámaras de seguridad, inteligencia artificial integrada y desbloqueo remoto desde cualquier parte del mundo."
    }
];

function mostrarProductos(filtro) {
    const contenedor = document.getElementById('grid-catalogo');
    if(!contenedor) return;
    contenedor.innerHTML = ""; 

    const productosFiltrados = filtro === 'todos' 
        ? productos 
        : productos.filter(p => p.categoria.toLowerCase() === filtro.toLowerCase());

    productosFiltrados.forEach(producto => {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" onerror="this.src='logo1.png'">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p class="precio">${producto.precio}</p>
            <button class="btn-cotizar" onclick="cotizar('${producto.nombre}')">Cotizar por WhatsApp</button>
        `;
        contenedor.appendChild(card);
    });
}

function cotizar(nombreProducto) {
    const mensaje = `Hola Lock and Go RD, me interesa información sobre el producto: ${nombreProducto}`;
    const url = `https://wa.me/18292783114?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// Lógica para el formulario de contacto
const form = document.getElementById('formCotizar');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const servicio = document.getElementById('servicio').value;
        const mensajeUsuario = document.getElementById('mensaje').value;
        const mensaje = `Hola, mi nombre es ${nombre}. Estoy interesado en el servicio de: ${servicio}. Mensaje: ${mensajeUsuario}`;
        const url = `https://wa.me/18292783114?text=${encodeURIComponent(mensaje)}`;
        window.open(url, '_blank');
    });
}

// Cargar todos los productos al iniciar
window.onload = () => mostrarProductos('todos');
