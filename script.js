 
 const productos = [
    {
        nombre: "V80 PRO",
        precio: "RD$18,699",
        imagen: "llavin1.png.png",
        descripcion: "Seguridad facial de grado bancario."
    },
    {
        nombre: "AURUM X3 IA",
        precio: "RD$31,699",
        imagen: "aurumx3ia.png",
        descripcion: "Cámaras 360 e inteligencia artificial."
    },
    {
        nombre: "H18 PRO MAX",
        precio: "RD$17,699",
        imagen: "H18PROMAX.png",
        descripcion: "Biometría ultra rápida y elegante."
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
            <span class="precio-tag">${p.precio}</span>
            <button class="btn-wa" onclick="enviarWhatsApp('${p.nombre}')">Cotizar ahora</button>
        `;
        contenedor.appendChild(div);
    });
}

function enviarWhatsApp(producto) {
    const texto = encodeURIComponent(`Hola Lock and Go! Me interesa información sobre el modelo: ${producto}`);
    window.open(`https://wa.me/18292783114?text=${texto}`);
}

const form = document.getElementById('formCotizar');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const nombre = document.getElementById('nombre').value;
        const email = document.getElementById('correo').value;
        const servicio = document.getElementById('servicio').value;

        // Aquí simulamos el guardado del email (puedes ver esto en la consola F12)
        console.log("GUARDANDO EN BASE DE DATOS:", { nombre, email, servicio });

        // Redirigir a WhatsApp
        const mensajeWA = encodeURIComponent(`Hola! Soy ${nombre} (${email}). Me interesa: ${servicio}.`);
        window.open(`https://wa.me/18292783114?text=${mensajeWA}`);
        
        alert("¡Gracias! Tus datos se han registrado y ahora te llevaremos a WhatsApp.");
    });
}

window.onload = mostrarProductos;

