/*********************************
 * TRADUCCIONES
 *********************************/
const translations = {
  en: {
    rental_inventory: "Rental Inventory",
    filter_all: "All",
    filter_speakers: "Speakers",
    filter_consoles: "Consoles",
    filter_mics: "Mics & Monitoring",
    filter_lighting: "Lighting",
    filter_effects: "Special Effects",
    filter_structure: "Structure",

    quote_cart_title: "Your Quote Cart",
    clear_cart: "Clear cart",
    rental_days: "Rental Days",
    rental_days_note: "Select the number of rental days.",
    product_specs_title: "Specifications",
    booking_title: "Event Details",

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
    filter_consoles: "Consolas",
    filter_mics: "Micrófonos",
    filter_lighting: "Iluminación",
    filter_effects: "Efectos Especiales",
    filter_structure: "Estructura",

    quote_cart_title: "Tu Carrito de Cotización",
    clear_cart: "Vaciar carrito",
    rental_days: "Días de renta",
    rental_days_note: "Selecciona la cantidad de días de renta.",
    product_specs_title: "Especificaciones",
    booking_title: "Detalles del Evento",

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

    if (el.tagName === "INPUT" && "placeholder" in el) {
      el.placeholder = value;
    } else if (el.tagName === "TEXTAREA" && "placeholder" in el) {
      el.placeholder = value;
    } else {
      el.innerText = value;
    }
  });

  // ✅ guardar idioma
  localStorage.setItem("language", lang);

  // ✅ marcar botón activo (ENG / ESP)
  document.querySelectorAll(".lang-btn[data-lang]").forEach(btn => {
  btn.classList.toggle("active", btn.dataset.lang === lang);
});

  // ✅ refrescar páginas/partes que dependen del idioma (si existen)
  try { cargarEquipoRental(currentFilter || "all"); } catch {}
  try { updateCartUI(); } catch {}
}
function setLanguageSafe(lang) {
  if (typeof setLanguage === "function") setLanguage(lang);
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
      categoria: "speakers",
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
      id: "uphoria",
      categoria: "lighting",
      nombre: "U’King Moving Head + Laser (4 in 1)",
      descripcion: "Moving head with built-in laser and lighting effects. Dynamic party atmosphere.",
      precioDia: 100,
      fotos: [
        "img/productos/luces/uphoria/uphoria1.jpeg",
        "img/productos/luces/uphoria/uphoria2.jpeg",
        "img/productos/luces/uphoria/uphoria3.jpeg",
        "img/productos/luces/uphoria/uphoria4.jpeg"
      ]
    },
    {
      id: "movinghead",
      categoria: "lighting",
      nombre: "Moving Head Light 7R",
      descripcion: "High-power moving head with sharp beams and vibrant colors.",
      precioDia: 150,
      fotos: [
        "img/productos/luces/movinghead/movinghead1.jpeg",
        "img/productos/luces/movinghead/movinghead2.jpeg",
        "img/productos/luces/movinghead/movinghead3.jpeg",
        "img/productos/luces/movinghead/movinghead4.jpeg"
      ]
    },

    // -------- EFFECTS --------
    {
      id: "co2gun",
      categoria: "effects",
      nombre: "CO2 Cryo Gun",
      descripcion: "Handheld CO2 gun for dramatic event effects.",
      precioDia: 60,
      fotos: [
        "img/productos/efectos/co2gun/co2gun1.jpeg",
        "img/productos/efectos/co2gun/co2gun2.jpeg",
        "img/productos/efectos/co2gun/co2gun3.jpeg"
      ]
    },

    // -------- STRUCTURE --------
    {
      id: "truss",
      categoria: "structure",
      nombre: "Aluminum Truss System",
      descripcion: "Modular truss system for lighting and effects setup.",
      precioDia: 200,
      fotos: [
        "img/productos/estructura/truss/truss1.jpeg",
        "img/productos/estructura/truss/truss2.jpeg",
        "img/productos/estructura/truss/truss3.jpeg"
      ]
    }
  ]
};

/*********************************
 * SCROLL EFECTO HEADER
 *********************************/
const header = document.getElementById("main-header");
window.addEventListener("scroll", () => {
  if (!header) return;
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});

/*********************************
 * INVENTARIO RENTAL
 *********************************/
const rentalGrid = document.getElementById("rental-grid");
let currentFilter = "all";

function filtrarEquipos(categoria, event) {
  if (event) {
    document.querySelectorAll(".filter-btn").forEach((btn) => btn.classList.remove("active"));
    event.target.classList.add("active");
  }
  currentFilter = categoria;
  cargarEquipoRental(categoria);
}

function cargarEquipoRental(categoria = "all") {
  if (!rentalGrid) return;
  rentalGrid.innerHTML = "";

  const equipos = infoEmpresa.equipos.filter((eq) =>
    categoria === "all" ? true : eq.categoria === categoria
  );

  equipos.forEach((eq) => {
    const card = document.createElement("div");
    card.className = "equipment-card";
    card.innerHTML = `
      <div class="image-container">
        <img src="${eq.fotos[0]}" alt="${eq.nombre}">
      </div>
      <h4>${eq.nombre}</h4>
      <p>${eq.descripcion}</p>
      <strong>$${eq.precioDia}/day</strong>
      <button class="btn-main" onclick="addToCart('${eq.id}')">${translations?.[getCurrentLang()]?.add_to_quote || "Add to Quote"}</button>
    `;
    card.addEventListener("click", (e) => {
      if (e.target.tagName === "BUTTON") return;
      openProductModal(eq);
    });
    rentalGrid.appendChild(card);
  });
}

/*********************************
 * MODAL DE PRODUCTO
 *********************************/
const productModal = document.getElementById("product-modal");
const productModalTitle = document.getElementById("product-modal-title");
const productModalDescription = document.getElementById("product-modal-description");
const productModalImage = document.getElementById("product-modal-image");
const productModalThumbs = document.getElementById("product-modal-thumbs");
const productModalSpecs = document.getElementById("product-modal-specs");

function openProductModal(eq) {
  if (!productModal) return;
  productModalTitle.textContent = eq.nombre;
  productModalDescription.textContent = eq.descripcion;
  productModalImage.src = eq.fotos[0];

  productModalThumbs.innerHTML = "";
  eq.fotos.forEach((foto, idx) => {
    const thumb = document.createElement("img");
    thumb.src = foto;
    thumb.className = "product-thumb";
    if (idx === 0) thumb.classList.add("active");
    thumb.addEventListener("click", () => {
      productModalImage.src = foto;
      document.querySelectorAll(".product-thumb").forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
    productModalThumbs.appendChild(thumb);
  });

  productModalSpecs.innerHTML = "<ul><li>High quality</li><li>Pro audio</li><li>Event-ready</li></ul>";
  productModal.classList.add("open");
  productModal.setAttribute("aria-hidden", "false");
}

const productModalClose = document.getElementById("product-modal-close");
if (productModalClose) {
  productModalClose.addEventListener("click", () => {
    productModal.classList.remove("open");
    productModal.setAttribute("aria-hidden", "true");
  });
}

/*********************************
 * CART
 *********************************/
let cart = [];

function addToCart(id) {
  const eq = infoEmpresa.equipos.find((e) => e.id === id);
  if (!eq) return;

  const item = cart.find((c) => c.id === id);
  if (item) {
    item.qty++;
  } else {
    cart.push({ ...eq, qty: 1 });
  }
  updateCartUI();
  toggleCart(true);
}

function removeFromCart(id) {
  cart = cart.filter((c) => c.id !== id);
  updateCartUI();
}

function updateCartUI() {
  const cartItems = document.getElementById("cart-items");
  const cartCount = document.getElementById("cart-count");
  if (!cartItems || !cartCount) return;

  cartCount.textContent = cart.reduce((sum, c) => sum + c.qty, 0);

  if (cart.length === 0) {
    cartItems.innerHTML = `<p>${translations?.[getCurrentLang()]?.empty_cart || "Your cart is empty."}</p>`;
    return;
  }

  cartItems.innerHTML = cart
    .map(
      (item) => `
    <div class="cart-row">
      <div>
        <h4>${item.nombre}</h4>
        <div class="meta">$${item.precioDia}/day</div>
      </div>
      <div class="qty">
        <button onclick="changeQty('${item.id}', -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${item.id}', 1)">+</button>
      </div>
    </div>
  `
    )
    .join("");
}

function changeQty(id, delta) {
  const item = cart.find((c) => c.id === id);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) removeFromCart(id);
  updateCartUI();
}

function clearCart() {
  cart = [];
  updateCartUI();
}

function toggleCart(open) {
  const cartPanel = document.querySelector(".quote-cart");
  const overlay = document.querySelector(".cart-overlay");
  if (!cartPanel || !overlay) return;

  if (open) {
    cartPanel.classList.add("open");
    overlay.classList.add("open");
  } else {
    cartPanel.classList.remove("open");
    overlay.classList.remove("open");
  }
}

/*********************************
 * BOOKING MODAL
 *********************************/
const bookingModal = document.getElementById("booking-modal");
const bookingBtn = document.getElementById("book-now-btn");
const bookingClose = document.getElementById("booking-modal-close");

if (bookingBtn && bookingModal) {
  bookingBtn.addEventListener("click", () => {
    bookingModal.classList.add("open");
    bookingModal.setAttribute("aria-hidden", "false");
  });
}
if (bookingClose && bookingModal) {
  bookingClose.addEventListener("click", () => {
    bookingModal.classList.remove("open");
    bookingModal.setAttribute("aria-hidden", "true");
  });
}

/*********************************
 * SEND WHATSAPP
 *********************************/
function submitQuote(event) {
  if (event) event.preventDefault();
  const phone = infoEmpresa.whatsapp;
  const message = encodeURIComponent("Hola! Quiero una cotización.");
  window.open(`https://wa.me/${phone}?text=${message}`, "_blank");
}

/*********************************
 * UTIL
 *********************************/
function getCurrentLang() {
  return localStorage.getItem("language") || "en";
}

window.addEventListener("DOMContentLoaded", () => {
  setLanguage(getCurrentLang());
  cargarEquipoRental("all");
});
