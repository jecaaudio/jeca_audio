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
    rental_days: "Rental Days",
    per_day_note: "Prices are per day.",
    clear_cart: "Clear cart",

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
    tagline: "PROFESSIONAL SOUND & LIGHTING",
    am: "AM",
    pm: "PM",
     // ✅ HOME (index.html)
    experience_title: "Experience the Vibe",
    dj_title: "Full DJ Services",
    dj_description: "Weddings, Quinceañeras, and Private Events.",
    book_now: "Book Now",
    rental_title: "Equipment Rental",
    rental_description: "Professional audio and lights for your event.",
    rent_btn: "Rent Equipment",
    follow_text: "Follow the vibe:",
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
    rental_days: "Días de renta",
    per_day_note: "Los precios son por día.",
    clear_cart: "Vaciar carrito",

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
    tagline: "SONIDO E ILUMINACIÓN PROFESIONAL",
    am: "a. m.",
    pm: "p. m.",
 // ✅ HOME (index.html)
    experience_title: "Vive la Experiencia",
    dj_title: "Servicio Completo de DJ",
    dj_description: "Bodas, Quinceañeras y Eventos Privados.",
    book_now: "Reservar Ahora",
    rental_title: "Renta de Equipo",
    rental_description: "Audio e iluminación profesional para tu evento.",
    rent_btn: "Rentar Equipo",
    follow_text: "Síguenos:",
  },
};

/*********************************
 * CAMBIO DE IDIOMA
 *********************************/
function setLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = translations?.[lang]?.[key];
    if (!value) return;

    // Solo traduce placeholder si existe
    if (el.tagName === "INPUT" && "placeholder" in el) {
      el.placeholder = value;
    } else if (el.tagName === "TEXTAREA" && "placeholder" in el) {
      el.placeholder = value;
    } else {
      el.innerText = value;
    }
  });

  localStorage.setItem("language", lang);

  try {
    cargarEquipoRental(currentFilter || "all");
  } catch {}
  try {
    updateCartUI();
  } catch {}
}

/*********************************
 * DATOS EMPRESA
 *********************************/
const infoEmpresa = {
  whatsapp: "15025540333",
  equipos: [
    // (TU INVENTARIO AQUÍ) — NO LO TOCO
    // ...
  ],
};

// Variables de control global
let currentFilter = "all";
let galleryIntervals = [];

/*********************************
 * CART STORAGE
 *********************************/
const CART_KEY = "jeca_quote_cart";
const DAYS_KEY = "jeca_rental_days";

function loadCart() {
  try {
    return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
  updateCartUI();
}

function loadDays() {
  const raw = localStorage.getItem(DAYS_KEY);
  const n = Number(raw || 1);
  return Number.isFinite(n) && n >= 1 ? Math.floor(n) : 1;
}

function saveDays(days) {
  const d = Number(days);
  const safe = Number.isFinite(d) && d >= 1 ? Math.floor(d) : 1;
  localStorage.setItem(DAYS_KEY, String(safe));
  updateCartUI();
}

/*********************************
 * CART ACTIONS
 *********************************/
function addToCart(equipoId) {
  const cart = loadCart();
  const found = cart.find((x) => x.id === equipoId);

  if (found) found.qty += 1;
  else cart.push({ id: equipoId, qty: 1 });

  saveCart(cart);
  toggleCart(true);
}

function changeQty(equipoId, delta) {
  let cart = loadCart();
  const item = cart.find((x) => x.id === equipoId);
  if (!item) return;

  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter((x) => x.id !== equipoId);

  saveCart(cart);
}

function removeFromCart(equipoId) {
  const cart = loadCart().filter((x) => x.id !== equipoId);
  saveCart(cart);
}

function clearCart() {
  saveCart([]);
  toggleCart(true);
}

/*********************************
 * OPEN/CLOSE CART + OVERLAY
 *********************************/
function toggleCart(open) {
  const panel = document.querySelector(".quote-cart");
  const overlay = document.querySelector(".cart-overlay");
  if (!panel || !overlay) return;

  panel.classList.toggle("open", !!open);
  overlay.classList.toggle("open", !!open);
}

/*********************************
 * TOTALS (por día)
 *********************************/
function computeCartSubtotal() {
  const cart = loadCart();
  let total = 0;

  cart.forEach((ci) => {
    const eq = infoEmpresa.equipos.find((e) => e.id === ci.id);
    if (eq) total += (Number(eq.precioDia) || 0) * ci.qty;
  });

  return total;
}

function computeCartTotalWithDays() {
  const days = loadDays();
  return computeCartSubtotal() * days;
}

/*********************************
 * UI RENDER
 *********************************/
function updateCartUI() {
  const cart = loadCart();
  const lang = localStorage.getItem("language") || "en";

  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = String(cart.reduce((a, x) => a + x.qty, 0));

  const daysInput = document.getElementById("rental-days");
  if (daysInput) daysInput.value = String(loadDays());

  const itemsEl = document.getElementById("cart-items");
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div style="padding:14px;opacity:.85;">${translations[lang].empty_cart}</div>`;
  } else {
    itemsEl.innerHTML = cart
      .map((ci) => {
        const eq = infoEmpresa.equipos.find((e) => e.id === ci.id);
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
      })
      .join("");
  }

  const totalEl = document.getElementById("cart-total");
  if (totalEl) totalEl.textContent = `$${computeCartTotalWithDays().toFixed(2)}`;
}

/*********************************
 * LISTENER PARA DAYS INPUT
 *********************************/
function attachDaysListener() {
  const daysInput = document.getElementById("rental-days");
  if (!daysInput) return;

  daysInput.addEventListener("input", () => {
    saveDays(daysInput.value);
  });
}

/*********************************
 * WHATSAPP
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
  const timeRaw = document.getElementById("q-time")?.value || "";
  const ampm = document.getElementById("q-ampm")?.value || "";
  const time = timeRaw && ampm ? `${timeRaw} ${ampm}` : timeRaw;

  const type = document.getElementById("q-type")?.value || "";
  const guests = document.getElementById("q-guests")?.value || "";
  const io = document.getElementById("q-io")?.value || "";
  const city = document.getElementById("q-city")?.value || "";
  const hours = document.getElementById("q-hours")?.value || "";
  const power = document.getElementById("q-power")?.value || "";
  const notes = document.getElementById("q-notes")?.value || "";

  const days = loadDays();
  const subtotal = computeCartSubtotal().toFixed(2);
  const total = computeCartTotalWithDays().toFixed(2);

  const lines = cart
    .map((ci) => {
      const eq = infoEmpresa.equipos.find((e) => e.id === ci.id);
      return eq ? `• ${ci.qty} x ${eq.nombre}` : "";
    })
    .filter(Boolean);

  const message =
    lang === "es"
      ? `Hola JECA AUDIO, quiero una cotización.\n\n` +
        `📅 Fecha: ${date}\n⏰ Hora: ${time}\n🎉 Tipo: ${type}\n👥 Invitados: ${guests}\n🏠 Interior/Exterior: ${io}\n📍 Ciudad: ${city}\n⏳ Duración: ${hours} horas\n🔌 Electricidad: ${power}\n\n` +
        `🛒 Equipos:\n${lines.join("\n")}\n\n` +
        `📆 Días de renta: ${days}\n` +
        `💵 Subtotal (por día): $${subtotal}\n` +
        `💰 ${translations[lang].estimated_total} ${translations[lang].rental_only}: $${total}\n\n` +
        `📝 Notas: ${notes}`
      : `Hi JECA AUDIO, I’d like a quote.\n\n` +
        `📅 Date: ${date}\n⏰ Time: ${time}\n🎉 Type: ${type}\n👥 Guests: ${guests}\n🏠 Indoor/Outdoor: ${io}\n📍 City: ${city}\n⏳ Duration: ${hours} hours\n🔌 Power: ${power}\n\n` +
        `🛒 Items:\n${lines.join("\n")}\n\n` +
        `📆 Rental days: ${days}\n` +
        `💵 Subtotal (per day): $${subtotal}\n` +
        `💰 ${translations[lang].estimated_total} ${translations[lang].rental_only}: $${total}\n\n` +
        `📝 Notes: ${notes}`;

  const wa = `https://wa.me/${infoEmpresa.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(wa, "_blank", "noopener");
}

/*********************************
 * INVENTORY RENDER
 *********************************/
function cargarEquipoRental(filter = "all") {
  currentFilter = filter;

  const grid = document.getElementById("rental-grid");
  if (!grid) return;

  // LIMPIEZA: Detener todos los intervalos anteriores
  galleryIntervals.forEach((id) => clearInterval(id));
  galleryIntervals = [];

  grid.innerHTML = "";

  const productosFiltrados =
    filter === "all" ? infoEmpresa.equipos : infoEmpresa.equipos.filter((e) => e.categoria === filter);

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

      <button class="btn-main" type="button" onclick="addToCart('${equipo.id}')">
        ${translations[lang].add_to_quote}
      </button>
    `;

    grid.appendChild(card);

    if (equipo.fotos.length > 1) {
      let fotoActual = 0;

      const intervalId = setInterval(() => {
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

      // ✅ Guardar UNA sola vez
      galleryIntervals.push(intervalId);
    }
  });
}

/*********************************
 * FILTERS
 *********************************/
function filtrarEquipos(cat, e) {
  document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
  if (e?.currentTarget) e.currentTarget.classList.add("active");
  cargarEquipoRental(cat);
}

/*********************************
 * SCROLL TO FORM
 *********************************/
function scrollToQuoteForm() {
  const el = document.getElementById("quote-form");
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  toggleCart(false);
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
    attachDaysListener();
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
 * GLOBALS
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
window.clearCart = clearCart;
