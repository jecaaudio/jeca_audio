/*********************************
 * TRADUCCIONES
 *********************************/
const translations = {
    en: {
        rental_inventory: 'Rental Inventory',
        filter_all: 'All',
        filter_speakers: 'Speakers',
        filter_subs: 'Subwoofers',
        filter_consoles: 'Consoles',
        filter_mics: 'Mics & Monitoring',
        filter_lighting: 'Lighting',
        filter_effects: 'Special Effects',
        filter_structure: 'Structure',
        contact_text: 'Need a custom quote or don\'t see what you need?',
        contact_btn: 'Contact via WhatsApp',
        inquire_price: 'Inquire Price'
    },
    es: {
        rental_inventory: 'Inventario de Renta',
        filter_all: 'Todos',
        filter_speakers: 'Altavoces',
        filter_subs: 'Subwoofers',
        filter_consoles: 'Consolas',
        filter_mics: 'Micrófonos',
        filter_lighting: 'Iluminación',
        filter_effects: 'Efectos Especiales',
        filter_structure: 'Estructura',
        contact_text: '¿Necesitas una cotización personalizada o no ves lo que buscas?',
        contact_btn: 'Contactar por WhatsApp',
        inquire_price: 'Consultar Precio'
    }
};

/*********************************
 * CAMBIO DE IDIOMA
 *********************************/
function setLanguage(lang) {
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.dataset.i18n;
        if (translations[lang]?.[key]) {
            el.innerText = translations[lang][key];
        }
    });
    localStorage.setItem('language', lang);
}

/*********************************
 * DATOS DE LA EMPRESA
 *********************************/
const infoEmpresa = {
    whatsapp: "15025540333",
    equipos: [
        {
            id: "zlx12bt",
            categoria: "speakers",
            nombre: "Electro-Voice ZLX-12BT",
            descripcion: "12-inch 1000W Bluetooth Powered Loudspeaker. Pro-grade audio quality.",
            fotos: [
                "img/productos/audio/zlx12bt/zlx12bt.jpg",
                "img/productos/audio/zlx12bt/zlx12bt1.jpg",
                "img/productos/audio/zlx12bt/zlx12bt2.jpg",
                "img/productos/audio/zlx12bt/zlx12bt3.jpg",
                "img/productos/audio/zlx12bt/zlx12bt4.jpg",
                "img/productos/audio/zlx12bt/zlx12bt5.jpg"
            ]
        },
        {
            id: "elx200",
            categoria: "subs",
            nombre: "Electro-Voice ELX200-18SP",
            descripcion: "Professional 18-inch powered subwoofer. High-impact sound for any event.",
            fotos: [
                "img/productos/audio/elx200/elx200.jpg",
                "img/productos/audio/elx200/elx2001.jpg",
                "img/productos/audio/elx200/elx2002.jpg",
                "img/productos/audio/elx200/elx2003.jpg",
                "img/productos/audio/elx200/elx2004.jpg",
                "img/productos/audio/elx200/elx2005.jpg"
            ]
        },
        {
            id: "ui24r",
            categoria: "consoles",
            nombre: "Soundcraft UI24R",
            descripcion: "Consola digital de 24 canales con control inalámbrico y grabación multipista profesional.",
            fotos: [
                "img/productos/audio/ui24r/ui24r.jpg",
                "img/productos/audio/ui24r/ui24r1.jpg",
                "img/productos/audio/ui24r/ui24r2.jpg",
                "img/productos/audio/ui24r/ui24r3.jpg",
                "img/productos/audio/ui24r/ui24r4.jpg"
            ]
        },
        {
            id: "x32",
            categoria: "consoles",
            nombre: "Behringer X32",
            descripcion: "Consola digital líder en la industria. Calidad de estudio para sonido en vivo y eventos grandes.",
            fotos: [
                "img/productos/audio/x32/x32.webp",
                "img/productos/audio/x32/x321.webp",
                "img/productos/audio/x32/x322.webp",
                "img/productos/audio/x32/x323.webp",
                "img/productos/audio/x32/x324.webp",
                "img/productos/audio/x32/x325.webp"
            ]
        },
        {
            id: "flx4",
            categoria: "consoles",
            nombre: "Pioneer DDJ-FLX4",
            descripcion: "Controladora DJ versátil. Ideal para sets dinámicos y compatibilidad con múltiples softwares.",
            fotos: [
                "img/productos/audio/flx4/1.jpg"
            ]
        },
        {
            id: "ptau2",
            categoria: "mics",
            nombre: "Phenyx Pro PTAU-2 (2 mics)",
            descripcion: "Sistema de micrófonos inalámbricos duales de alta fidelidad y largo alcance.",
            fotos: [
                "img/productos/mics/ptau2/1.jpg"
            ]
        }
    ]
};

/*********************************
 * CARGAR EQUIPO DE RENTA
 *********************************/
function cargarEquipoRental(filter = 'all') {
    const grid = document.getElementById('rental-grid');
    if (!grid) return;
    grid.innerHTML = '';

    const productosFiltrados = filter === 'all' 
        ? infoEmpresa.equipos 
        : infoEmpresa.equipos.filter(e => e.categoria === filter);

    productosFiltrados.forEach((equipo, index) => {
        const card = document.createElement('div');
        card.className = 'equipment-card';
        
        // El ID único nos servirá para identificar la imagen de esta tarjeta específica
        const imgId = `img-${index}`;
        
        card.innerHTML = `
            <div class="image-container">
                <img src="${equipo.fotos[0]}" id="${imgId}" alt="${equipo.nombre}">
            </div>
            <h3>${equipo.nombre}</h3>
            <p>${equipo.descripcion}</p>
            <a href="https://wa.me/15025540333?text=Hola, me interesa el equipo: ${equipo.nombre}" class="btn-main" data-i18n="inquire_price">
                ${translations[localStorage.getItem('language') || 'en'].inquire_price}
            </a>
        `;
        grid.appendChild(card);

        // LÓGICA DE AUTO-PLAY PARA LAS IMÁGENES
        if (equipo.fotos.length > 1) {
            let fotoActual = 0;
            setInterval(() => {
                fotoActual = (fotoActual + 1) % equipo.fotos.length;
                const imagenElemento = document.getElementById(imgId);
                if (imagenElemento) {
                    // Añadimos una transición suave si quieres
                    imagenElemento.style.opacity = '0';
                    setTimeout(() => {
                        imagenElemento.src = equipo.fotos[fotoActual];
                        imagenElemento.style.opacity = '1';
                    }, 300);
                }
            }, 3000); // Cambia la imagen cada 3 segundos
        }
    });
}}

/*********************************
 * FILTRAR EQUIPOS
 *********************************/
function filtrarEquipos(cat, e) {
    document.querySelectorAll('.filter-btn').forEach(btn =>
        btn.classList.remove('active')
    );
    if (e?.currentTarget) e.currentTarget.classList.add('active');
    cargarEquipoRental(cat);
}

/*********************************
 * INIT
 *********************************/
document.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('language') || 'en';
    setLanguage(lang);
    cargarEquipoRental();
});

/*********************************
 * HEADER SCROLL
 *********************************/
window.addEventListener('scroll', () => {
    const header = document.getElementById('main-header');
    if (!header) return;
    header.classList.toggle('scrolled', window.scrollY > 50);
});
