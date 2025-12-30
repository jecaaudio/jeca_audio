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

  try { cargarEquipoRental(currentFilter || "all"); } catch (e) {}
  try { updateCartUI(); } catch (e) {}
}

/*********************************
 * DATOS EMPRESA
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
      fotos: [
        "img/productos/audio/pyu-2/ptu-2.jpg",
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
      fotos: [
        "img/productos/audio/ptm-33/ptm-33.jpg",
        "img/productos/audio/ptm-33/ptm-331.jpg",
        "img/productos/audio/ptm-33/ptm-332.jpg",
        "img/productos/audio/ptm-33/ptm-333.jpg",
        "img/productos/audio/ptm-33/ptm-334.jpg",
        "img/productos/audio/ptm-33/ptm-335.jpg"
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
        "img/productos/lights/MovingHead150w/MovingHead150w1.jpg",
        "img/productos/lights/MovingHead150w/MovingHead150w2.jpg",
        "img/productos/lights/MovingHead150w/MovingHead150w3.jpg",
        "img/productos/lights/MovingHead150w/MovingHead150w4.jpg",
        "img/productos/lights/MovingHead150w/MovingHead150w5.jpg",
        "img/productos/lights/MovingHead150w/MovingHead150w6.jpg"
      ]
    },
    {
      id: "spider8",
      categoria: "lighting",
      nombre: "Spider RGBW LED Bar (8-eye)",
      descripcion: "RGBW spider bar with 8-eye effect. Great dance-floor coverage.",
      precioDia: 75,
      fotos: [
        "img/productos/lights/LightBarLED8/LightBarLED8.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED81.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED82.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED83.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED84.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED85.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED86.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED87.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED88.jpg",
        "img/productos/lights/LightBarLED8/LightBarLED89.jpg"
      ]
    },
    {
      id: "rockstrip252",
      categoria: "lighting",
      nombre: "Rockville ROCKSTRIP 252 RGB",
      descripcion: "RGB LED bar for wash and ambient lighting.",
      precioDia: 40,
      fotos: [
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP252.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2521.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2522.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2523.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2524.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2525.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2526.jpg",
        "img/productos/lights/ROCKSTRIP252/ROCKSTRIP2527.jpg"
      ]
    },
    {
      id: "bar250w",
      categoria: "lighting",
      nombre: "LED Bar 10x RGBW (250W)",
      descripcion: "High-power RGBW LED bar for strong color wash.",
      precioDia: 90,
      fotos: [
        "img/productos/lights/LightBarLED10/LightBarLED10.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED101.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED102.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED103.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED104.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED105.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED106.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED107.jpg",
        "img/productos/lights/LightBarLED10/LightBarLED108.jpg"
      ]
    },
    {
      id: "holdlamp19x15",
      categoria: "lighting",
      nombre: "HOLDLAMP 19x15W RGBW Moving Head",
      descripcion: "Powerful RGBW moving head for wide beam and color mixing.",
      precioDia: 100,
      fotos: [
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead1.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead2.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead3.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead4.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead5.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead6.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead7.jpg",
        "img/productos/lights/SHEHDSMovingHead/SHEHDSMovingHead8.jpg"
      ]
    },
    {
      id: "minibeam90",
      categoria: "lighting",
      nombre: "Mini Beam 90W LED (pack)",
      descripcion: "Compact beam fixtures for sharp effects.",
      precioDia: 85,
      fotos: [
        "img/productos/lights/MovingHead90w/90WLEDMovingHead.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead1.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead2.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead3.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead4.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead5.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead6.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead7.jpg",
        "img/productos/lights/MovingHead90w/90WLEDMovingHead8.jpg"
      ]
    },
    {
      id: "rotatingbeam",
      categoria: "lighting",
      nombre: "Rotating Beam RGBW Moving Head",
      descripcion: "Rotating beam effect for dynamic shows.",
      precioDia: 95,
      fotos: [
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs.jpg",
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs1.jpg",
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs2.jpg",
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs3.jpg",
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs4.jpg",
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs5.jpg",
        "img/productos/lights/MovingHead16LEDs/MovingHead16LEDs6.jpg"
      ]
    },

    // -------- EFFECTS --------
    {
      id: "fog1500",
      categoria: "effects",
      nombre: "FOG MACHINE -1500",
      descripcion: "1500W fog machine for atmosphere and lighting enhancement.",
      precioDia: 60,
      fotos: [
        "img/productos/especialeffects/fog/humo.jpg",
        "img/productos/especialeffects/fog/humo1.jpg",
        "img/productos/especialeffects/fog/humo2.jpg",
        "img/productos/especialeffects/fog/humo3.jpg",
        "img/productos/especialeffects/fog/humo4.jpg",
        "img/productos/especialeffects/fog/humo5.jpg"
      ]
    },
    {
      id: "lowfog",
      categoria: "effects",
      nombre: "Low Fog Machine (cloud effect)",
      descripcion: "Low fog effect for weddings and special moments.",
      precioDia: 100,
      fotos: [
        "img/productos/especialeffects/groundfogger/humobajo.webp",
        "img/productos/especialeffects/groundfogger/humobajo1.webp",
        "img/productos/especialeffects/groundfogger/humobajo2.webp",
        "img/productos/especialeffects/groundfogger/humobajo3.webp",
        "img/productos/especialeffects/groundfogger/humobajo4.webp",
        "img/productos/especialeffects/groundfogger/humobajo5.webp"
      ]
    },
    {
      id: "spark700",
      categoria: "effects",
      nombre: "Spark Machine 700W",
      descripcion: "Cold spark machine for entrances and highlights.",
      precioDia: 120,
      fotos: [
        "img/productos/especialeffects/coldspark/chispas.webp",
        "img/productos/especialeffects/coldspark/chispas1.webp",
        "img/productos/especialeffects/coldspark/chispas2.webp",
        "img/productos/especialeffects/coldspark/chispas3.webp",
        "img/productos/especialeffects/coldspark/chispas4.webp",
        "img/productos/especialeffects/coldspark/chispas5.webp",
        "img/productos/especialeffects/coldspark/chispas6.webp",
        "img/productos/especialeffects/coldspark/chispas7.webp",
        "img/productos/especialeffects/coldspark/chispas8.webp",
        "img/productos/especialeffects/coldspark/chispas9.webp"
      ]
    },
    {
      id: "confetti4",
      categoria: "effects",
      nombre: "Electric Confetti Machine (4 heads)",
      descripcion: "4-head electric confetti launcher for big moments.",
      precioDia: 150,
      fotos: [
        "img/productos/especialeffects/confetticannon/confetticannon.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon1.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon2.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon3.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon4.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon5.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon6.jpg",
        "img/productos/especialeffects/confetticannon/confetticannon7.jpg"
      ]
    },
    {
      id: "aircannon",
      categoria: "effects",
      nombre: "Air Confetti Cannon",
      descripcion: "Air-powered confetti cannon for quick pops.",
      precioDia: 100,
      fotos: [
        "img/productos/especialeffects/aircannon/canonaire.jpg",
        "img/productos/especialeffects/aircannon/canonaire1.jpg",
        "img/productos/especialeffects/aircannon/canonaire2.jpg",
        "img/productos/especialeffects/aircannon/canonaire3.jpg",
        "img/productos/especialeffects/aircannon/canonaire4.jpg"
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
        "img/productos/structure/djbooth/djbooth1.jpg",
        "img/productos/structure/djbooth/djbooth2.jpg",
        "img/productos/structure/djbooth/djbooth3.jpg",
        "img/productos/structure/djbooth/djbooth4.jpg",
        "img/productos/structure/djbooth/djbooth5.jpg",
        "img/productos/structure/djbooth/djbooth6.jpg",
        "img/productos/structure/djbooth/djbooth7.jpg"
      ]
    },
    {
      id: "truss8x8",
      categoria: "structure",
      nombre: "Aluminum Truss 8x8 (module)",
      descripcion: "8x8 aluminum truss module for lighting rigs.",
      precioDia: 150,
      fotos: [
        "img/productos/structure/truss8x8/truss8x8.jpg",
        "img/productos/structure/truss8x8/truss8x81.jpg",
        "img/productos/structure/truss8x8/truss8x82.jpg",
        "img/productos/structure/truss8x8/truss8x83.jpg",
        "img/productos/structure/truss8x8/truss8x84.jpg",
        "img/productos/structure/truss8x8/truss8x85.jpg"
      ]
    }
  ]
};


// Variables de control global
let currentFilter = "all"; 
let galleryIntervals = []; // Array para rastrear y limpiar los timers de las fotos

/*********************************
 * CART STORAGE
 *********************************/
const CART_KEY = "jeca_quote_cart";
const DAYS_KEY = "jeca_rental_days";

function loadCart() {
  try { return JSON.parse(localStorage.getItem(CART_KEY) || "[]"); }
  catch { return []; }
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
  cart.forEach(ci => {
    const eq = infoEmpresa.equipos.find(e => e.id === ci.id);
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

  // counter
  const countEl = document.getElementById("cart-count");
  if (countEl) countEl.textContent = String(cart.reduce((a, x) => a + x.qty, 0));

  // days input
  const daysInput = document.getElementById("rental-days");
  if (daysInput) daysInput.value = String(loadDays());

  // items
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

  // total
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
const time = (timeRaw && ampm) ? `${timeRaw} ${ampm}` : timeRaw;

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

  const lines = cart.map(ci => {
    const eq = infoEmpresa.equipos.find(e => e.id === ci.id);
    return eq ? `• ${ci.qty} x ${eq.nombre}` : "";
  }).filter(Boolean);

  const message =
    (lang === "es")
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

    // LIMPIEZA: Detener todos los intervalos de cambio de fotos anteriores
    galleryIntervals.forEach(id => clearInterval(id));
    galleryIntervals = []; 
    
    grid.innerHTML = "";
    // ... resto del código que ya tienes ...

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

      <button class="btn-main" type="button" onclick="addToCart('${equipo.id}')">
        ${translations[lang].add_to_quote}
      </button>
    `;

    grid.appendChild(card);

    if (equipo.fotos.length > 1) {
            let fotoActual = 0;
            const intervalId = setInterval(() => { // Guardamos el ID aquí
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
 * FILTERS
 *********************************/
function filtrarEquipos(cat, e) {
  document.querySelectorAll(".filter-btn").forEach(btn => btn.classList.remove("active"));
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
    // 1. Cargar idioma guardado
    const lang = localStorage.getItem("language") || "en"; 
    setLanguage(lang); 
    
    // 2. Si estamos en la página de renta, inicializar inventario y carrito
    if (document.getElementById("rental-grid")) {
        cargarEquipoRental();
        updateCartUI();
        attachDaysListener();
    }
}); // <--- Aquí se cierra correctamente el evento

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


