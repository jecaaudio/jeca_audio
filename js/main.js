/*********************************
 * TRADUCCIONES
 *********************************/
const translations = {
  en: {
    rental_inventory: "Rental Inventory",
    filter_all: "All",
    filter_speakers: "Speakers",
    filter_subs: "Subwoofers",
    filter_consoles: "Consoles",
    filter_mics: "Mics & Monitoring",
    filter_lighting: "Lighting",
    filter_effects: "Special Effects",
    filter_structure: "Structure",

    quote_cart_title: "Your Quote Cart",
    estimated_total: "Estimated Total",
    rental_only: "(rental only)",
    continue_to_form: "Continue to Event Details",
    event_details_title: "Event Details",
    event_date: "Event Date",
    event_time: "Start Time",
    event_type: "Event Type",
    guest_count: "Estimated Guests",
    indoor_outdoor: "Indoor or Outdoor?",
    event_city: "City",
    duration_hours: "Approx. Duration (hours)",
    power_available: "Power available?",
    notes: "Notes / Special requests",
    send_quote_whatsapp: "Send Quote Request via WhatsApp",
    add_to_quote: "Add to Quote",
    close: "Close",
    empty_cart: "Your cart is empty. Add items to request a quote.",
    remove: "Remove",
    qty: "Qty",

    // HOME (por si lo usas)
    tagline: "PROFESSIONAL SOUND & LIGHTING",
  },

  es: {
    rental_inventory: "Inventario de Renta",
    filter_all: "Todos",
    filter_speakers: "Altavoces",
    filter_subs: "Subwoofers",
    filter_consoles: "Consolas",
    filter_mics: "Micrófonos",
    filter_lighting: "Iluminación",
    filter_effects: "Efectos Especiales",
    filter_structure: "Estructura",

    quote_cart_title: "Tu Carrito de Cotización",
    estimated_total: "Total Estimado",
    rental_only: "(solo renta)",
    continue_to_form: "Continuar a Detalles del Evento",
    event_details_title: "Detalles del Evento",
    event_date: "Fecha del evento",
    event_time: "Hora de inicio",
    event_type: "Tipo de evento",
    guest_count: "Cantidad de invitados",
    indoor_outdoor: "¿Interior o exterior?",
    event_city: "Ciudad",
    duration_hours: "Duración aprox. (horas)",
    power_available: "¿Hay electricidad disponible?",
    notes: "Notas / solicitudes especiales",
    send_quote_whatsapp: "Enviar solicitud por WhatsApp",
    add_to_quote: "Añadir a cotización",
    close: "Cerrar",
    empty_cart: "Tu carrito está vacío. Agrega equipos para pedir una cotización.",
    remove: "Quitar",
    qty: "Cant.",

    // HOME (por si lo usas)
    tagline: "SONIDO E ILUMINACIÓN PROFESIONAL",
  }
};

/*********************************
 * CAMBIO DE IDIOMA
 *********************************/
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    const value = translations?.[lang]?.[key];
    if (value) el.innerText = value;
  });

  localStorage.setItem("language", lang);

  // Re-render inventario y carrito al cambiar idioma
  try { cargarEquipoRental(currentFilter || "all"); } catch (e) {}
  try { updateCartUI(); } catch (e) {}
}

/*********************************
 * DATOS DE LA EMPRESA
 *********************************/
const infoEmpresa = {
  whatsapp: "15025540333",
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
      fotos: [
        "img/productos/audio/flx4/FLX4.jpg",
        "img/productos/audio/flx4/FLX41.jpg",
        "img/productos/audio/flx4/FLX42.jpg",
        "img/productos/audio/flx4/FLX43.jpg",
        "img/productos/audio/flx4/FLX44.jpg"
      ]
    },

    // -------- MICS & MONITORING --------
    {
      id: "ptau2",
      categoria: "mics",
      nombre: "Phenyx Pro PTAU-2 (2 mics)",
      descripcion: "Dual wireless mic system with long range and clear sound.",
      precioDia: 70,
      fotos: [
        "img/productos/audio/pyu-2/ptu-2.jpg",
        "img/productos/audio/pyu-2/ptu-21.jpg"
      ]
    },
    {
      id: "ptm33",
      categoria: "mics",
      nombre: "Phenyx Pro PTM-33 In-Ear (1T/4R)",
      descripcion: "In-ear monitoring system for clean stage sound and control.",
      precioDia: 100,
      fotos: [
        "img/productos/audio/ptm-33/ptm-33.jpg",
        "img/productos/audio/ptm-33/ptm-331.jpg"
      ]
    },

    // -------- LIGHTING --------
    {
      id: "spot150",
      categoria: "lighting",
      nombre: "Moving head SPOT 150W",
      descripcion: "150W moving head spot for pro lighting setups.",
      precioDia: 60,
      fotos: [
        "img/productos/lights/MovingHead150w/MovingHead150w.jpg",
        "img/productos/lights/MovingHead150w/MovingHead150w1.jpg"
      ]
    },

    // -------- EFFECTS --------
    {
      id: "spark700",
      categoria: "effects",
      nombre: "Spark Machine 700W",
      descripcion: "Cold spark machine for entrances and highlights.",
      precioDia: 120,
      fotos: [
        "img/productos/especialeffects/coldspark/chispas.webp",
        "img/productos/especialeffects/coldspark/chispas1.webp"
      ]
    },

    // -------- STRUCTURE --------
    {
      id: "booth",
      categoria: "structure",
      nombre: "Portable DJ Booth",
      descripcion: "Portable DJ booth for clean setups.",
      precioDia: 80,
      fotos: [
        "img/productos/structure/djbooth/djbooth.jpg",
        "img/productos/structure/djbooth/djbooth1.jpg"
      ]
    }
  ]
};

// Guardamos el filtro actual
let currentFilter = "all";

/*********************************
 * QUOTE CART
 *********************************/
const CART_KEY = "jeca_quote_cart";

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch { return []; }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function addToCart(equipoId) {
  const cart = loadCart();
  const found = cart.find(x => x.id === equipoId);
  if (found) found.qty += 1;
  else cart.push({ id: equipoId, qty: 1 });
  saveCart(cart);
  toggleCart(true);
}

function changeQty(equipoId, delta) {
  let cart = loadCart();
  const item = cart.find(x => x.id === equipoId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.id !== equipoId);
  saveCart(cart);
}

function removeFromCart(equipoId) {
  const cart = loadCart().filter(x => x.id !== equipoId);
  saveCart(cart);
}

function toggleCart(open) {
  const panel = document.querySelector(".quote-cart");
  if (!panel) return;
  panel.classList.toggle("open", !!open);
}

function scrollToQuoteForm() {
  const el = document.getElementById("quote-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  toggleCart(false);
}

function computeCartTotal() {
  const cart = loadCart();
  let total = 0;
  cart.forEach(ci => {
    const eq = infoEmpresa.equipos.find(e => e.id === ci.id);
    if (eq) total += (Number(eq.precioDia) || 0) * ci.qty;
  });
  return total;
}

function updateCartUI() {
  const cart = loadCart();
  const lang = localStorage.getItem("language") || "en";

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = String(cart.reduce((a, x) => a + x.qty, 0));

  const itemsEl = document.getElementById("cart-items");
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div style="padding:14px;opacity:.85;">${translations[lang].empty_cart}</div>`;
  } else {
    itemsEl.innerHTML = cart.map(ci => {
      const eq = infoEmpresa.equipos.find(e => e.id === ci.id);
      if (!eq) return "";
      return `
        <div class="cart-row">
          <div>
            <h4>${eq.nombre}</h4>
            <div class="meta">${translations[lang].qty}: ${ci.qty}</div>
          </div>

          <div style="text-align:right;">
            <div class="qty">
              <button type="button" onclick="changeQty('${eq.id}', -1)">−</button>
              <span>${ci.qty}</span>
              <button type="button" onclick="changeQty('${eq.id}', 1)">+</button>
            </div>

            <div style="margin-top:10px;">
              <button class="btn-outline small" type="button" onclick="removeFromCart('${eq.id}')">
                ${translations[lang].remove}
              </button>
            </div>
          </div>
        </div>
      `;
    }).join("");
  }

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = `$${computeCartTotal().toFixed(2)}`;
}

/*********************************
 * ENVIAR A WHATSAPP
 *********************************/
function submitQuote(ev) {
  ev.preventDefault();
  const lang = localStorage.getItem("language") || "en";
  const cart = loadCart();

  if (!cart.length) {
    toggleCart(true);
    return;
  }

  const date = document.getElementById("q-date")?.value || "";
  const time = document.getElementById("q-time")?.value || "";
  const type = document.getElementById("q-type")?.value || "";
  const guests = document.getElementById("q-guests")?.value || "";
  const io = document.getElementById("q-io")?.value || "";
  const city = document.getElementById("q-city")?.value || "";
  const hours = document.getElementById("q-hours")?.value || "";
  const power = document.getElementById("q-power")?.value || "";
  const notes = document.getElementById("q-notes")?.value || "";

  const lines = cart.map(ci => {
    const eq = infoEmpresa.equipos.find(e => e.id === ci.id);
    return eq ? `• ${ci.qty} x ${eq.nombre}` : "";
  }).filter(Boolean);

  const total = computeCartTotal().toFixed(2);

  const message =
    (lang === "es")
      ? `Hola JECA AUDIO, quiero una cotización.\n\n` +
        `📅 Fecha: ${date}\n⏰ Hora: ${time}\n🎉 Tipo: ${type}\n👥 Invitados: ${guests}\n🏠 Interior/Exterior: ${io}\n📍 Ciudad: ${city}\n⏳ Duración: ${hours} horas\n🔌 Electricidad: ${power}\n\n` +
        `🛒 Equipos:\n${lines.join("\n")}\n\n` +
        `💰 ${translations[lang].estimated_total} ${translations[lang].rental_only}: $${total}\n\n` +
        `📝 Notas: ${notes}`
      : `Hi JECA AUDIO, I’d like a quote.\n\n` +
        `📅 Date: ${date}\n⏰ Time: ${time}\n🎉 Type: ${type}\n👥 Guests: ${guests}\n🏠 Indoor/Outdoor: ${io}\n📍 City: ${city}\n⏳ Duration: ${hours} hours\n🔌 Power: ${power}\n\n` +
        `🛒 Items:\n${lines.join("\n")}\n\n` +
        `💰 ${translations[lang].estimated_total} ${translations[lang].rental_only}: $${total}\n\n` +
        `📝 Notes: ${notes}`;

  const wa = `https://wa.me/${infoEmpresa.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(wa, "_blank", "noopener");
}

/*********************************
 * INVENTARIO + AUTOPLAY IMGS
 *********************************/
function cargarEquipoRental(filter = "all") {
  currentFilter = filter;

  const grid = document.getElementById("rental-grid");
  if (!grid) return;

  grid.innerHTML = "";

  const productosFiltrados = filter === "all"
    ? infoEmpresa.equipos
    : infoEmpresa.equipos.filter(e => e.categoria === filter);

  const lang = localStorage.getItem("language") || "en";

  productosFiltrados.forEach((equipo, index) => {
    const card = document.createElement("div");
    card.className = "equipment-card";

    const imgId = `img-${equipo.id}-${index}`;

    card.innerHTML = `
      <div class="image-container">
        <img src="${equipo.fotos[0]}" id="${imgId}" alt="${equipo.nombre}">
      </div>

      <h3>${equipo.nombre}</h3>
      <p>${equipo.descripcion}</p>

      <button class="btn-main" type="button" data-i18n="add_to_quote" onclick="addToCart('${equipo.id}')">
        ${translations[lang].add_to_quote}
      </button>
    `;

    grid.appendChild(card);

    if (equipo.fotos.length > 1) {
      let fotoActual = 0;
      setInterval(() => {
        fotoActual = (fotoActual + 1) % equipo.fotos.length;
        const imagenElemento = document.getElementById(imgId);
        if (imagenElemento) {
          imagenElemento.style.opacity = "0";
          setTimeout(() => {
            imagenElemento.src = equipo.fotos[fotoActual];
            imagenElemento.style.opacity = "1";
          }, 250);
        }
      }, 3000);
    }
  });
}

/*********************************
 * FILTROS
 *********************************/
function filtrarEquipos(cat, e) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
  if (e?.currentTarget) e.currentTarget.classList.add("active");
  cargarEquipoRental(cat);
}

/*********************************
 * INIT
 *********************************/
document.addEventListener("DOMContentLoaded", () => {
  const lang = localStorage.getItem("language") || "en";
  setLanguage(lang);

  if (document.getElementById("rental-grid")) {
    cargarEquipoRental();
    updateCartUI();
  }
});

/*********************************
 * HEADER SCROLL
 *********************************/
window.addEventListener("scroll", () => {
  const header = document.getElementById("main-header");
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 50);
});

/*********************************
 * EXPOSE GLOBALS
 *********************************/
window.setLanguage = setLanguage;
window.cargarEquipoRental = cargarEquipoRental;
window.filtrarEquipos = filtrarEquipos;
window.addToCart = addToCart;
window.changeQty = changeQty;
window.removeFromCart = removeFromCart;
window.toggleCart = toggleCart;
window.scrollToQuoteForm = scrollToQuoteForm;
window.submitQuote = submitQuote;
window.updateCartUI = updateCartUI;

