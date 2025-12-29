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
                "img/productos/audio/zlx200/zlx200.jpg",
                "img/productos/audio/zlx200/zlx2001.jpg",
                "img/productos/audio/zlx200/zlx2002.jpg",
                "img/productos/audio/zlx200/zlx2003.jpg",
                "img/productos/audio/zlx200/zlx2004.jpg",
                "img/productos/audio/zlx200/zlx2005.jpg"
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
function cargarEquipoRental(filtro = 'all') {
    const grid = document.getElementById('rental-grid');
    if (!grid) return;

    const equipos = filtro === 'all'
        ? infoEmpresa.equipos
        : infoEmpresa.equipos.filter(e => e.categoria === filtro);

    const lang = localStorage.getItem('language') || 'en';

    grid.innerHTML = equipos.map(item => {
        const imagen = item.fotos?.[0] || 'img/no-image.jpg';
        const mensaje = encodeURIComponent(`Hola! Me interesa rentar: ${item.nombre}`);

        return `
        <div class="decision-card" style="background:#111;border:1px solid #333;border-radius:15px;padding:20px;">
            <div style="width:100%;height:250px;background:#000;border-radius:10px;display:flex;align-items:center;justify-content:center;overflow:hidden;margin-bottom:15px;">
                <img src="${imagen}" alt="${item.nombre}" style="max-width:100%;max-height:100%;object-fit:contain;">
            </div>
            <h3 style="color:#fff;margin:10px 0;">${item.nombre}</h3>
            <p style="color:#aaa;font-size:.9rem;margin-bottom:15px;">${item.descripcion}</p>
            <a href="https://wa.me/${infoEmpresa.whatsapp}?text=${mensaje}"
               target="_blank"
               style="display:block;text-align:center;padding:10px;border:1px solid #ffcc00;color:#ffcc00;border-radius:25px;text-decoration:none;font-weight:bold;">
               ${translations[lang].inquire_price}
            </a>
        </div>`;
    }).join('');
}

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
