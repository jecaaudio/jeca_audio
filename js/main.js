const data = {
    en: {
        tagline: "PROFESSIONAL SOUND & LIGHTING",
        experience: "Experience the Vibe",
        djTitle: "Full DJ Services",
        djText: "Weddings, Quinceañeras, and Private Events. We bring the party to you.",
        btnBook: "Book Now",
        rentalTitle: "Equipment Rental",
        rentalText: "Rent professional speakers, subwoofers, and lights for your own event.",
        btnRent: "Rent Equipment",
        follow: "Follow the vibe:"
    },
    es: {
        tagline: "SONIDO Y LUCES PROFESIONALES",
        experience: "Vive la Experiencia",
        djTitle: "Servicios de DJ Completos",
        djText: "Bodas, Quinceañeras y Eventos Privados. Llevamos la fiesta a tu lugar.",
        btnBook: "Reservar Ahora",
        rentalTitle: "Renta de Equipos",
        rentalText: "Renta bocinas profesionales, subwoofers y luces para tu propio evento.",
        btnRent: "Ver Equipos",
        follow: "Síguenos:"
    }
};

function translatePage(lang) {
    document.getElementById('tagline').innerText = data[lang].tagline;
    document.getElementById('experience-title').innerText = data[lang].experience;
    document.getElementById('dj-title').innerText = data[lang].djTitle;
    document.getElementById('dj-text').innerText = data[lang].djText;
    document.getElementById('btn-book').innerText = data[lang].btnBook;
    document.getElementById('rental-title').innerText = data[lang].rentalTitle;
    document.getElementById('rental-text').innerText = data[lang].rentalText;
    document.getElementById('btn-rent').innerText = data[lang].btnRent;
    document.getElementById('follow-text').innerText = data[lang].follow;
}

// Iniciar cargando equipos si estamos en renta.html (opcional)
window.onload = function() {
    console.log("Jeca Audio Loaded");
};
