// CONFIGURACIÓN DE CONTENIDO (Aquí haces los cambios de info)
const infoEmpresa = {
    equipos: [
        { nombre: "Electro-Voice ZLX-12BT", cantidad: 4, precioRenta: "$50" },
        { nombre: "Electro-Voice ELX200", cantidad: 2, precioRenta: "$80" },
        { nombre: "Pioneer DDJ-FLX4", cantidad: 1, precioRenta: "$40" },
        { nombre: "Luces Moving Head", cantidad: 2, precioRenta: "$30" }
    ],
    // Puedes añadir más cosas aquí en el futuro
};

const data = {
    es: {
        tagline: "Sonido Profesional para Eventos",
        servTitle: "Nuestros Servicios",
        servText: "DJ y renta de equipo profesional para eventos sociales y privados en Louisville y alrededores.",
        equipoTitle: "Equipo Disponible",
        ctaTitle: "¿Listo para tu evento?",
        follow: "Síguenos en nuestras redes:"
    },
    en: {
        tagline: "Professional Sound for Events",
        servTitle: "Our Services",
        servText: "DJ and professional equipment rental for social and private events in Louisville and surroundings.",
        equipoTitle: "Available Equipment",
        ctaTitle: "Ready for your event?",
        follow: "Follow us on social media:"
    }
};

// FUNCIONAMIENTO DE LA PÁGINA (No tocar a menos que quieras cambiar cómo funciona algo)
function cargarEquipo() {
    const lista = document.getElementById('equipo-lista');
    if(lista) {
        lista.innerHTML = infoEmpresa.equipos.map(item => `
            <div class="equipo-item">
                <span>${item.nombre}</span>
                <span>x${item.cantidad}</span>
            </div>
        `).join('');
    }
}

function translatePage(lang) {
    document.getElementById('tagline').innerText = data[lang].tagline;
    document.getElementById('serv-title').innerText = data[lang].servTitle;
    document.getElementById('serv-text').innerText = data[lang].servText;
    document.getElementById('equipo-title').innerText = data[lang].equipoTitle;
    document.getElementById('cta-title').innerText = data[lang].ctaTitle;
    document.getElementById('follow').innerText = data[lang].follow;
}

// Ejecutar al cargar la página
window.onload = cargarEquipo;
