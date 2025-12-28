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

function translatePage(lang) {
    document.getElementById('tagline').innerText = data[lang].tagline;
    document.getElementById('serv-title').innerText = data[lang].servTitle;
    document.getElementById('serv-text').innerText = data[lang].servText;
    document.getElementById('equipo-title').innerText = data[lang].equipoTitle;
    document.getElementById('cta-title').innerText = data[lang].ctaTitle;
    document.getElementById('follow').innerText = data[lang].follow;
}
