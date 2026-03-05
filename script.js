const productos = [
    {
        nombre: "V80 PRO",
        categoria: "hogar",
        precio: "Desde RD$18,699",
        imagen: "llavin1.png.png",
        descripcion: "Reconocimiento facial, huella y acceso remoto mundial."
    },
    {
        nombre: "AURUM X3 IA",
        categoria: "hogar",
        precio: "Desde RD$31,699",
        imagen: "aurumx3ia.png",
        descripcion: "3 cámaras de seguridad e Inteligencia Artificial integrada."
    },
    {
        nombre: "H18 PRO MAX",
        categoria: "hogar",
        precio: "Desde RD$17,699",
        imagen: "H18PROMAX.png",
        descripcion: "Lo último en seguridad inteligente con cámara y biometría."
    }
];

function mostrarProductos() {
    const contenedor = document.getElementById('grid-catalogo');
    if(!contenedor) return;
    
    contenedor.innerHTML = ""; 

    productos.forEach(p => {
        const div = document.createElement('div');
        div.className = 'card';
        div.innerHTML = `
            <img src="${p.imagen}" alt="${p.nombre}" onerror="this.src='logo1.png'">
            <h3>${p.nombre}</h3>
            <p>${p.descripcion}</p>
            <p class="precio-tag">${p.precio}</p>
            <button class="btn-wa" onclick="window.open('https://wa.me/18292783114?text=Hola! Me interesa el modelo: ${p.nombre}')">
                Cotizar por WhatsApp
            </button>
        `;
        contenedor.appendChild(div);
    });
}

// Configuración del formulario de contacto
const form = document.getElementById('formCotizar');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const servicio = document.getElementById('servicio').value;
        const mensaje = encodeURIComponent(`👋 ¡Hola Lock and Go! Mi nombre es ${nombre}. Me interesa el servicio de: ${servicio}.`);
        window.open(`https://wa.me/18292783114?text=${mensaje}`);
    });
}

// Cargar productos al iniciar la página
window.onload = mostrarProductos;
