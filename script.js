 
 const productos = [
    { nombre: "V80 PRO", precio: "RD$18,699", imagen: "llavin1.png.png", descripcion: "Facial 3D y Acceso Remoto." },
    { nombre: "AURUM X3 IA", precio: "RD$31,699", imagen: "aurumx3ia.png", descripcion: "Doble cámara con IA." },
    { nombre: "H18 PRO MAX", precio: "RD$17,699", imagen: "H18PROMAX.png", descripcion: "Biometría de alta precisión." }
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

document.getElementById('formCotizar').addEventListener('submit', function(e) {
    e.preventDefault();
    const n = document.getElementById('nombre').value;
    const c = document.getElementById('correo').value;
    const s = document.getElementById('servicio').value;
    window.open(`https://wa.me/18292783114?text=Hola! Soy ${n}. Email: ${c}. Interés: ${s}`);
});

window.onload = mostrarProductos;
