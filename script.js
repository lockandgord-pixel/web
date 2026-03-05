 
const productos = [
    {
        nombre: "V80 PRO",
        precio: "RD$18,699",
        imagen: "llavin1.png.png",
        descripcion: "Reconocimiento Facial 3D y Acceso Remoto desde cualquier parte del mundo."
    },
    {
        nombre: "AURUM X3 IA",
        precio: "RD$31,699",
        imagen: "aurumx3ia.png",
        descripcion: "Doble cámara de seguridad frontal con Inteligencia Artificial y Visión Nocturna."
    },
    {
        nombre: "H18 PRO MAX",
        precio: "RD$17,699",
        imagen: "H18PROMAX.png",
        descripcion: "Biometría de alta precisión con cámara integrada para máxima seguridad."
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
            <button class="btn-wa" onclick="window.open('https://wa.me/18292783114?text=Hola! Me interesa información del modelo: ${p.nombre}')">COTIZAR POR WHATSAPP</button>
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
        
        // Simulación de captura (ver en consola F12)
        console.log("Lead registrado:", { nombre: n, email: c, interes: s });
        
        const mensaje = encodeURIComponent(`Hola! Soy ${n}. Mi correo es ${c} y estoy interesado en: ${s}.`);
        window.open(`https://wa.me/18292783114?text=${mensaje}`);
    });
}

window.onload = mostrarProductos;
