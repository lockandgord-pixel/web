 
  const productos = [
    {
        nombre: "V80 PRO",
        precio: "RD$18,699",
        imagen: "llavin1.png.png",
        descripcion: "Seguridad facial y acceso remoto."
    },
    {
        nombre: "AURUM X3 IA",
        precio: "RD$31,699",
        imagen: "aurumx3ia.png",
        descripcion: "3 cámaras e inteligencia artificial."
    },
    {
        nombre: "H18 PRO MAX",
        precio: "RD$17,699",
        imagen: "H18PROMAX.png",
        descripcion: "Biometría avanzada y elegancia."
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
        const c = document.getElementById('correo').value;
        const s = document.getElementById('servicio').value;
        window.open(`https://wa.me/18292783114?text=Hola! Soy ${n}, mi correo es ${c} y me interesa: ${s}`);
    });
}

window.onload = mostrarProductos;

