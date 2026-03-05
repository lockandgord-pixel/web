const productos = [
    {
        nombre: "V80 PRO",
        precio: "Desde RD$18,699",
        imagen: "llavin1.png.png",
        descripcion: "Facial, huella y remoto."
    },
    {
        nombre: "AURUM X3 IA",
        precio: "Desde RD$31,699",
        imagen: "aurumx3ia.png",
        descripcion: "3 cámaras e Inteligencia Artificial."
    },
    {
        nombre: "H18 PRO MAX",
        precio: "Desde RD$17,699",
        imagen: "H18PROMAX.png",
        descripcion: "Biometría y seguridad avanzada."
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
            <button class="btn-wa" onclick="window.open('https://wa.me/18292783114?text=Cotizar ${p.nombre}')">WhatsApp</button>
        `;
        contenedor.appendChild(div);
    });
}

const form = document.getElementById('formCotizar');
if(form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const n = document.getElementById('nombre').value;
        const s = document.getElementById('servicio').value;
        window.open(`https://wa.me/18292783114?text=Hola, soy ${n} y busco ${s}`);
    });
}

window.onload = mostrarProductos;
