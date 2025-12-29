const translations = {
    'en': {
        'tagline': 'PROFESSIONAL SOUND & LIGHTING',
        'experience_title': 'Experience the Vibe',
        'dj_title': 'Full DJ Services',
        'dj_description': 'Weddings, Quinceañeras, and Private Events.',
        'book_now': 'Book Now',
        'rental_title': 'Equipment Rental',
        'rental_description': 'Professional audio and lights for your event.',
        'rent_btn': 'Rent Equipment',
        'follow_text': 'Follow the vibe:'
    },
    'es': {
        'tagline': 'SONIDO E ILUMINACIÓN PROFESIONAL',
        'experience_title': 'Vive la Experiencia',
        'dj_title': 'Servicios Completos de DJ',
        'dj_description': 'Bodas, Quinceañeras y Eventos Privados.',
        'book_now': 'Reservar Ahora',
        'rental_title': 'Renta de Equipos',
        'rental_description': 'Audio y luces profesionales para tu evento.',
        'rent_btn': 'Rentar Equipo',
        'follow_text': 'Sigue el ritmo:'
    }
};

function setLanguage(lang) {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
}

const infoEmpresa = {
    whatsapp: "15025540333",
    equipos: [
        {
            id: "zlx12bt",
            categoria: "speakers",
            nombre: "Electro-Voice ZLX-12BT", 
            descripcion: "12-inch 1000W Bluetooth Powered Loudspeaker. Pro-grade audio quality.",
            fotos: ["img/productos/audio/zlx12bt/zlx12bt.jpg"]
        },
        {
            id: "elx200",
            categoria: "subs",
            nombre: "Electro-Voice ELX200-18SP", 
            descripcion: "Professional 18-inch powered subwoofer. High-impact sound for any event.",
            fotos: ["img/productos/audio/zlx200/zlx200.jpg"]
        },
        {
            id: "ui24r",
            categoria: "consoles",
            nombre: "Soundcraft UI24R",
            descripcion: "Consola digital de 24 canales con control inalámbrico y grabación multipista profesional.",
            fotos: ["img/productos/audio/ui24r/ui24r.jpg"]
        },
        {
            id: "x32",
            categoria: "consoles",
            nombre: "Behringer X32",
            descripcion: "Consola digital líder en la industria. Calidad de estudio para sonido en vivo y eventos grandes.",
            fotos: ["img/productos/audio/x32/x32.webp"]
        },
        {
            id: "flx4",
            categoria: "consoles",
            nombre: "Pioneer DDJ-FLX4",
            descripcion: "Controladora DJ versátil. Ideal para sets dinámicos y compatibilidad con múltiples softwares.",
            fotos: ["img/productos/audio/flx4/1.jpg"]
        },
        {
            id: "ptau2",
            categoria: "mics",
            nombre: "Phenyx Pro PTAU-2 (2 mics)",
            descripcion: "Sistema de micrófonos inalámbricos duales de alta fidelidad y largo alcance.",
            fotos: ["img/productos/mics/ptau2/1.jpg"]
        }
    ]
};

function cargarEquipoRental(filtro = 'all') {
    const grid = document.getElementById('rental-grid');
    if (!grid) return;

    const equiposFiltrados = filtro === 'all' 
        ? infoEmpresa.equipos 
        : infoEmpresa.equipos.filter(e => e.categoria === filtro);

    grid.innerHTML = equiposFiltrados.map(item => `
        <div class="decision-card" style="background: #111; border: 1px solid #333; border-radius: 15px; padding: 20px;">
            <div style="width: 100%; height: 250px; background: #000; border-radius: 10px; display: flex; align-items: center; justify-content: center; overflow: hidden; margin-bottom: 15px;">
                <img src="${item.fotos[0]}" alt="${item.nombre}" style="max-width: 100%; max-height: 100%; object-fit: contain;">
            </div>
            <h3 style="color: #fff; margin: 10px 0;">${item.nombre}</h3>
            <p style="color: #aaa; font-size: 0.9rem; margin-bottom: 15px;">${item.descripcion}</p>
            <a href="https://wa.me/${infoEmpresa.whatsapp}?text=Hola! Me interesa rentar: ${encodeURIComponent(item.nombre)}" 
               style="display: block; text-align: center; padding: 10px; border: 1px solid #ffcc00; color: #ffcc00; border-radius: 25px; text-decoration: none; font-weight: bold;">
                Inquire Price
            </a>
        </div>
    `).join('');
}

function filtrarEquipos(cat) {
    const botones = document.querySelectorAll('.filter-btn');
    botones.forEach(btn => btn.classList.remove('active'));
    if (event && event.currentTarget) event.currentTarget.classList.add('active');
    cargarEquipoRental(cat);
}

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('language') || 'en';
    setLanguage(savedLang);
    cargarEquipoRental();
});
