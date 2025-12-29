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
    contact_text: "Need a custom quote or don't see what you need?",
    contact_btn: 'Contact via WhatsApp',
    inquire_price: 'Inquire Price',
    per_day: 'day'
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
    inquire_price: 'Consultar Precio',
    per_day: 'día'
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

  // Para que el botón dentro de cada tarjeta cambie de idioma también:
  cargarEquipoRental(currentFilter);
}

/*********************************
 * DATOS DE LA EMPRESA
 *********************************/
const infoEmpresa = {
  whatsapp: "15025540333", // <-- tu WhatsApp aquí
  equipos: [
    // -------- SOUND --------
    {
      id: "zlx12bt",
      categoria: "speakers",
      nombre: "Electro-Voice ZLX-12BT",
      descripcion: "12-inch 1000W Bluetooth Powered Loudspeaker. Pro-grade audio quality.",
      precioDia: 80,
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
      precioDia: 120,
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
      descripcion: "24-channel digital mixer with wireless control and professional multitrack recording.",
      precioDia: 150,
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
      descripcion: "Industry-leading digital mixer. Studio-quality sound for live events.",
      precioDia: 250,
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
      descripcion: "Versatile DJ controller. Great for dynamic sets and multi-software compatibility.",
      precioDia: 90,
      fotos: ["img/productos/audio/flx4/FLX4.jpg",
             "img/productos/audio/flx4/FLX41.jpg",
             "img/productos/audio/flx4/FLX42.jpg",
             "img/productos/audio/flx4/FLX43.jpg",
             "img/productos/audio/flx4/FLX44.jpg",
             "img/productos/audio/flx4/FLX45.jpg",
             "img/productos/audio/flx4/FLX46.jpg",
             "img/productos/audio/flx4/FLX47.jpg",
             "img/productos/audio/flx4/FLX48.jpg",
             "img/productos/audio/flx4/FLX49.jpg",
             "img/productos/audio/flx4/FLX410.jpg",
             "img/productos/audio/flx4/FLX411.jpg",
             "img/productos/audio/flx4/FLX412.jpg"
             ]
    },

    // -------- MICS & MONITORING --------
    {
      id: "ptau2",
      categoria: "mics",
      nombre: "Phenyx Pro PTAU-2 (2 mics)",
      descripcion: "Dual wireless mic system with long range and clear sound.",
      precioDia: 70,
      fotos: ["img/productos/audio/pyu-2/ptu-2.jpg",
             "img/productos/audio/pyu-2/ptu-21.jpg",
             "img/productos/audio/pyu-2/ptu-22.jpg",
             "img/productos/audio/pyu-2/ptu-23.jpg",
             "img/productos/audio/pyu-2/ptu-24.jpg",
             "img/productos/audio/pyu-2/ptu-25.jpg",
             "img/productos/audio/pyu-2/ptu-26.jpg"
             ]
    },
    {
      id: "ptm33",
      categoria: "mics",
      nombre: "Phenyx Pro PTM-33 In-Ear (1T/4R)",
      descripcion: "In-ear monitoring system for clean stage sound and control.",
      precioDia: 100,
      fotos: ["img/productos/mics/ptm33/1.jpg"] // crea esta foto o cambia ruta
    },

    // -------- LIGHTING --------
    {
      id: "spot150",
      categoria: "lighting",
      nombre: "Moving head SPOT 150W",
      descripcion: "150W moving head spot for pro lighting setups.",
      precioDia: 60,
      fotos: ["img/productos/lighting/spot150/1.jpg"]
    },
    {
      id: "spider8",
      categoria: "lighting",
      nombre: "Spider RGBW LED Bar (8-eye)",
      descripcion: "RGBW spider bar with 8-eye effect. Great dance-floor coverage.",
      precioDia: 75,
      fotos: ["img/productos/lighting/spider/1.jpg"]
    },
    {
      id: "rockstrip252",
      categoria: "lighting",
      nombre: "Rockville ROCKSTRIP 252 RGB",
      descripcion: "RGB LED bar for wash and ambient lighting.",
      precioDia: 40,
      fotos: ["img/productos/lighting/rockstrip252/1.jpg"]
    },
    {
      id: "bar250w",
      categoria: "lighting",
      nombre: "LED Bar 10x RGBW (250W)",
      descripcion: "High-power RGBW LED bar for strong color wash.",
      precioDia: 90,
      fotos: ["img/productos/lighting/bar250w/1.jpg"]
    },
    {
      id: "holdlamp19x15",
      categoria: "lighting",
      nombre: "HOLDLAMP 19x15W RGBW Moving Head",
      descripcion: "Powerful RGBW moving head for wide beam and color mixing.",
      precioDia: 100,
      fotos: ["img/productos/lighting/holdlamp19x15/1.jpg"]
    },
    {
      id: "minibeam90",
      categoria: "lighting",
      nombre: "Mini Beam 90W LED (pack)",
      descripcion: "Compact beam fixtures for sharp effects.",
      precioDia: 85,
      fotos: ["img/productos/lighting/minibeam90/1.jpg"]
    },
    {
      id: "rotatingbeam",
      categoria: "lighting",
      nombre: "Rotating Beam RGBW Moving Head",
      descripcion: "Rotating beam effect for dynamic shows.",
      precioDia: 95,
      fotos: ["img/productos/lighting/rotatingbeam/1.jpg"]
    },

    // -------- EFFECTS --------
    {
      id: "fog1500",
      categoria: "effects",
      nombre: "FOG MACHINE -1500",
      descripcion: "1500W fog machine for atmosphere and lighting enhancement.",
      precioDia: 60,
      fotos: ["img/productos/effects/fog1500/1.jpg"]
    },
    {
      id: "lowfog",
      categoria: "effects",
      nombre: "Low Fog Machine (cloud effect)",
      descripcion: "Low fog effect for weddings and special moments.",
      precioDia: 100,
      fotos: ["img/productos/effects/lowfog/1.jpg"]
    },
    {
      id: "spark700",
      categoria: "effects",
      nombre: "Spark Machine 700W",
      descripcion: "Cold spark machine for entrances and highlights.",
      precioDia: 120,
      fotos: ["img/productos/effects/spark700/1.jpg"]
    },
    {
      id: "confetti4",
      categoria: "effects",
      nombre: "Electric Confetti Machine (4 heads)",
      descripcion: "4-head electric confetti launcher for big moments.",
      precioDia: 150,
      fotos: ["img/productos/effects/confetti4/1.jpg"]
    },
    {
      id: "aircannon",
      categoria: "effects",
      nombre: "Air Confetti Cannon",
      descripcion: "Air-powered confetti cannon for quick pops.",
      precioDia: 100,
      fotos: ["img/productos/effects/aircannon/1.jpg"]
    },

    // -------- STRUCTURE --------
    {
      id: "booth",
      categoria: "structure",
      nombre: "Portable DJ Booth",
      descripcion: "Portable DJ booth for clean setups.",
      precioDia: 80,
      fotos: ["img/productos/structure/booth/1.jpg"]
    },
    {
      id: "truss8x8",
      categoria: "structure",
      nombre: "Aluminum Truss 8x8 (module)",
      descripcion: "8x8 aluminum truss module for lighting rigs.",
      precioDia: 150,
      fotos: ["img/productos/structure/truss8x8/1.jpg"]
    }
  ]
};

// Guardamos el filtro actual para re-render cuando cambie el idioma
let currentFilter = "all";

/*********************************
 * CARGAR EQUIPO DE RENTA
 *********************************/
function cargarEquipoRental(filter = 'all') {
  currentFilter = filter;

  const grid = document.getElementById('rental-grid');
  if (!grid) return;

  grid.innerHTML = '';

  const productosFiltrados = filter === 'all'
    ? infoEmpresa.equipos
    : infoEmpresa.equipos.filter(e => e.categoria === filter);

  const lang = localStorage.getItem('language') || 'en';

  productosFiltrados.forEach((equipo, index) => {
    const card = document.createElement('div');
    card.className = 'equipment-card';

    const imgId = `img-${equipo.id}-${index}`;

    const msg =
      lang === "es"
        ? `Hola, me interesa cotizar: ${equipo.nombre} ($${equipo.precioDia}/día).`
        : `Hi, I want a quote for: ${equipo.nombre} ($${equipo.precioDia}/day).`;

    const waLink = `https://wa.me/${infoEmpresa.whatsapp}?text=${encodeURIComponent(msg)}`;

    card.innerHTML = `
      <div class="image-container">
        <img src="${equipo.fotos[0]}" id="${imgId}" alt="${equipo.nombre}">
      </div>

      <h3>${equipo.nombre}</h3>
      <p>${equipo.descripcion}</p>

      <p style="margin: 8px 0 14px 0; opacity:.9;">
        <strong>${lang === "es" ? "Renta" : "Price"}:</strong> $${equipo.precioDia}/${lang === "es" ? "día" : "day"}
      </p>

      <a href="${waLink}" class="btn-main" data-i18n="inquire_price" target="_blank" rel="noopener">
        ${translations[lang].inquire_price}
      </a>
    `;

    grid.appendChild(card);

    // Auto-play de imágenes (si hay más de 1)
    if (equipo.fotos.length > 1) {
      let fotoActual = 0;
      setInterval(() => {
        fotoActual = (fotoActual + 1) % equipo.fotos.length;
        const imagenElemento = document.getElementById(imgId);
        if (imagenElemento) {
          imagenElemento.style.opacity = '0';
          setTimeout(() => {
            imagenElemento.src = equipo.fotos[fotoActual];
            imagenElemento.style.opacity = '1';
          }, 250);
        }
      }, 3000);
    }
  });
}

/*********************************
 * FILTRAR EQUIPOS
 *********************************/
function filtrarEquipos(cat, e) {
  document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
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
 * HEADER SCROLL (si existe #main-header)
 *********************************/
window.addEventListener('scroll', () => {
  const header = document.getElementById('main-header');
  if (!header) return;
  header.classList.toggle('scrolled', window.scrollY > 50);
});

