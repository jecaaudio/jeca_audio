const infoEmpresa = {
    // SECCIÓN DE RENTA (PRODUCTOS)
    equipos: [
        { 
            nombre: "Electro-Voice ELX200-18SP Subwoofer", 
            descripcion: "Professional 18-inch powered subwoofer with Deluxe Padded Cover. Delivers powerful low-frequency output for high-impact sound.",
            img: "img/productos/audio/zlx200/zlx200.jpg" 
        },
        { 
            nombre: "Electro-Voice ZLX-12BT Loudspeaker", 
            descripcion: "12-inch 1000W Bluetooth Powered Loudspeaker. High-quality audio streaming with professional-grade performance.",
            img: "img/productos/audio/zlx12bt/zlx12bt.jpg" 
        }
    ]
};

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
        btnRent: "Ver Inventario",
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

function cargarEquipoRental() {
    const grid = document.getElementById('rental-grid');
    if(grid) {
        grid.innerHTML = infoEmpresa.equipos.map(item => `
            <div class="decision-card">
                <img src="${item.img}" alt="${item.nombre}" style="width:100%; border-radius:10px; margin-bottom:15px; border: 1px solid #333; height: 250px; object-fit: cover;">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <a href="https://wa.me/15025540444?text=I'm%20interested%20in%20renting%20the%20${encodeURIComponent(item.nombre)}" class="btn-outline">Inquire Price</a>
            </div>
        `).join('');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    cargarEquipoRental();
});
