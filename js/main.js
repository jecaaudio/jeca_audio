const infoEmpresa = {
    equipos: [
        { 
            nombre: "Electro-Voice ZLX-12BT", 
            descripcion: "12-inch Powered Loudspeaker with Bluetooth.",
            img: "img/equipos/zlx12.jpg" 
        },
        { 
            nombre: "Electro-Voice ELX200", 
            descripcion: "18-inch Powered Subwoofer for deep bass.",
            img: "img/equipos/elx200.jpg" 
        },
        { 
            nombre: "Pioneer DDJ-FLX4", 
            descripcion: "Professional 2-channel DJ Controller.",
            img: "img/equipos/ddjflx4.jpg" 
        },
        { 
            nombre: "Moving Head Lights", 
            descripcion: "DMX controlled dynamic lighting effects.",
            img: "img/equipos/lights.jpg" 
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

// Función específica para la página de Rental
function cargarEquipoRental() {
    const grid = document.getElementById('rental-grid');
    if(grid) {
        grid.innerHTML = infoEmpresa.equipos.map(item => `
            <div class="decision-card">
                <img src="${item.img}" alt="${item.nombre}" style="width:100%; border-radius:10px; margin-bottom:15px; border: 1px solid #333;">
                <h3>${item.nombre}</h3>
                <p>${item.descripcion}</p>
                <a href="https://wa.me/15025540444?text=I'm%20interested%20in%20renting%20${item.nombre}" class="btn-outline" style="font-size: 0.8rem;">Inquire Price</a>
            </div>
        `).join('');
    }
}
