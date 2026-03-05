  const MI_WHATSAPP = "18292783114";

const productos = [
    { cat: "airbnb", nombre: "Ocllo Smart-A", precio: "RD$9,500", img: "llavin1.png.png", desc: "Perfecta para rentas. Códigos temporales vía App." },
    { cat: "airbnb", nombre: "Lock-Go Wifi", precio: "RD$11,200", img: "llavin1.png.png", desc: "Control total remoto. No requiere Hub." },
    { cat: "hogar", nombre: "Bio-Shield Pro", precio: "RD$14,500", img: "llavin1.png.png", desc: "Huella dactilar y reconocimiento facial 3D." },
    { cat: "hogar", nombre: "LiteTouch V2", precio: "RD$7,800", img: "llavin1.png.png", desc: "Elegante, compacta y segura para apartamentos." },
    { cat: "oficina", nombre: "Master-Control X", precio: "RD$18,900", img: "llavin1.png.png", desc: "Registro de entrada/salida para 200 usuarios." },
    { cat: "oficina", nombre: "Business Card-Lock", precio: "RD$12,400", img: "llavin1.png.png", desc: "Acceso con tarjetas magnéticas de alta frecuencia." }
];

function mostrarProductos(filtro = 'todos') {
    const contenedor = document.getElementById('grid-catalogo-completo');
    if (!contenedor) return;
    contenedor.innerHTML = "";
    
    const filtrados = filtro === 'todos' ? productos : productos.filter(p => p.cat === filtro);
    
    filtrados.forEach(p => {
        contenedor.innerHTML += `
            <div class="card">
                <div class="tag">${p.cat.toUpperCase()}</div>
                <img src="${p.img}" alt="${p.nombre}">
                <h3>${p.nombre}</h3>
                <p style="font-size:0.8rem; color:#ccc; margin: 10px 0;">${p.desc}</p>
                <p class="precio">${p.precio}</p>
                <button class="btn-cotizar" onclick="whatsappDirecto('${p.nombre}')">Cotizar ahora</button>
            </div>
        `;
    });
}

function whatsappDirecto(producto) {
    const msg = encodeURIComponent(`¡Hola Lock and go RD! Me interesa el modelo: ${producto}. ¿Qué incluye la instalación?`);
    window.open(`https://wa.me/${MI_WHATSAPP}?text=${msg}`, '_blank');
}

document.getElementById('formCotizar').addEventListener('submit', function(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const correo = document.getElementById('correo').value;
    const servicio = document.getElementById('servicio').value;
    
    const texto = encodeURIComponent(`*Nueva Solicitud Web*%0A👤: ${nombre}%0A📧: ${correo}%0A🛠️: ${servicio}`);
    alert(`¡Gracias ${nombre}! Te estamos redirigiendo a nuestro WhatsApp.`);
    window.open(`https://wa.me/${MI_WHATSAPP}?text=${texto}`, '_blank');
    this.reset();
});

window.onload = () => mostrarProductos('todos');