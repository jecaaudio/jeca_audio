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
    booking_addons_title: "FX Experience (Add-On)",

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
    selected_items: "Selected items",
    tagline: "PROFESSIONAL SOUND & LIGHTING",
    am: "AM",
    pm: "PM",
     // ✅ HOME (index.html)
    experience_title: "Experience the Vibe",
    dj_title: "Full DJ Services",
    dj_description: "Weddings, Quinceañeras, and Private Events.",
    dj_bullet_mc: "MC / Announcements (EN/ES)",
    dj_bullet_playlist: "Customized playlist",
    dj_bullet_setup: "Setup + breakdown included",
    dj_bullet_backup: "Backup equipment",
    book_now: "Book Now",
    rental_title: "Equipment Rental",
    rental_description: "Professional audio and lights for your event.",
    rent_btn: "Rent Equipment",
    follow_text: "Follow the vibe:",
    trust_title: "Trusted by clients across Louisville",
    trust_subtitle: "DJ in Louisville KY • Sound & lighting rentals Louisville",
    trust_events: "Events completed",
    trust_reviews: "Average rating",
    trust_response: "Fast WhatsApp response",
    review_one_text: "“Incredible sound and lighting. Our wedding felt like a concert!”",
    review_two_text: "“Professional setup, bilingual MC, and the dance floor stayed full.”",
    review_three_text: "“Quick response and top-quality gear. Highly recommend!”",
    video_cta: "Watch event video highlights",
    party_videos_title: "Party Videos",
    party_videos_subtitle: "Enjoy highlights from recent celebrations.",
    party_videos_playlist: "Playlist",
    packages_title: "DJ Packages",
    package_includes_label: "Includes",
    package1_title: "DJ Essential",
    package1_description: "Entry-level DJ package for small private events.",
    package1_include_1: "Professional DJ service",
    package1_include_2: "DJ Controller (DDJ-FLX4)",
    package1_include_3: "2 Full-range speakers",
    package1_include_4: "Wireless microphones (2)",
    package1_include_5: "Portable DJ booth",
    package1_include_6: "Basic LED ambient lighting",
    package1_capacity: "Recommended Capacity: 30–60 guests",
    package2_title: "DJ Party",
    package2_description: "Enhanced sound and lighting for energetic celebrations.",
    package2_include_1: "Professional DJ service",
    package2_include_2: "DJ Controller (DDJ-FLX4)",
    package2_include_3: "2 Full-range speakers",
    package2_include_4: "1 Subwoofer",
    package2_include_5: "Wireless microphones",
    package2_include_6: "DJ booth",
    package2_include_7: "Dynamic lighting effects (beams + LED bars)",
    package2_include_8: "Fog machine",
    package2_capacity: "Recommended Capacity: 60–120 guests",
    package3_title: "DJ Pro Event",
    package3_description: "Professional-level package for formal and medium-sized events.",
    package3_include_1: "Professional DJ service",
    package3_include_2: "DJ Controller + Digital Mixing Console",
    package3_include_3: "2 Full-range speakers",
    package3_include_4: "2 Subwoofers",
    package3_include_5: "Wireless microphones",
    package3_include_6: "DJ booth",
    package3_include_7: "Professional lighting (moving heads & beams)",
    package3_include_8: "Fog machine",
    package3_capacity: "Recommended Capacity: 120–200 guests",
    package4_title: "DJ Wedding / XV",
    package4_description: "Elegant production designed for weddings and quinceañeras.",
    package4_include_1: "Professional DJ service",
    package4_include_2: "DJ Controller + Digital Mixing Console",
    package4_include_3: "2 Full-range speakers",
    package4_include_4: "2 Subwoofers",
    package4_include_5: "Wireless microphones",
    package4_include_6: "Elegant DJ booth",
    package4_include_7: "Lighting truss system",
    package4_include_8: "Premium lighting (RGBW moving heads)",
    package4_include_9: "Low-lying fog machine (cloud effect)",
    package4_capacity: "Recommended Capacity: 150–250 guests",
    package5_title: "DJ Show Impact",
    package5_description: "High-impact production for large events and stage-style setups.",
    package5_include_1: "Professional DJ service",
    package5_include_2: "Advanced digital mixing console",
    package5_include_3: "DJ Controller",
    package5_include_4: "2 Full-range speakers",
    package5_include_5: "2 Subwoofers",
    package5_include_6: "Wireless microphones",
    package5_include_7: "DJ booth",
    package5_include_8: "Full truss structure",
    package5_include_9: "Advanced lighting system (spots, rotating beams, mini beams)",
    package5_include_10: "Fog machine",
    package5_include_11: "Cold spark machines",
    package5_capacity: "Recommended Capacity: 200–400 guests",
    addons_title: "FX Experience (Add-On)",
    addons_card_title: "FX Experience (Add-On)",
    addons_option_1: "Cold spark machines",
    addons_option_2: "Low-lying fog",
    addons_option_3: "Electric confetti launcher",
    addons_option_4: "Air-powered confetti cannons",
    package_btn: "Book this package",
    about_title: "About Jeca Audio",
    about_text:
      "Jeca Audio, provides DJ services and PRO sound & lighting rentals, in Louisville, KY. We bring bilingual MC services, music experience, and reliable gear to your event so it feels effortless, with the best Quality.",
    about_area_title: "Service area",
    about_area_text: "Louisville, KY + surrounding areas.",
    about_response_title: "Fast response",
    about_response_text: "Message us on WhatsApp and get a quick quote.",
    about_years_title: "Experience",
    about_years_text: "Over {years} years of events, weddings, and private parties.",
    contact_title: "Contact",
    contact_phone_label: "Phone",
    contact_email_label: "Email",
    event_venue: "Venue / Area",
    pickup_delivery: "Pickup or delivery?",
    pickup: "Pickup",
    delivery: "Delivery",
    event_access: "Stairs / elevator?",
    access_stairs: "Stairs",
    access_elevator: "Elevator",
    access_ground: "Ground level",
    access_not_sure: "Not sure",
    rental_policies_title: "Rental policies",
    rental_policy_deposit: "Security deposit required.",
    rental_policy_id: "Valid ID required at pickup.",
    rental_policy_delivery: "Pickup or delivery available.",
    rental_policy_late: "Late return fees may apply.",
    rental_availability: "Availability confirmed after request.",
    product_includes_title: "Includes",
    product_requirements_title: "Requirements",
    includes_default_cables: "Cables and power cords (as needed).",
    includes_default_setup: "Basic setup guidance at pickup.",
    requirements_power: "Standard power outlet required.",
    requirements_space: "Recommended clear setup space.",
    missing_fields_title: "Please complete all required fields:",
    required_notice: "All fields are required to send your request.",
    operator_needed: "Do you need an operator?",
    operator_yes: "Yes",
    operator_no: "No",
    confirm_booking_title: "Confirm your details before WhatsApp?",
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
    booking_addons_title: "Experiencia FX (Adicional)",

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
    selected_items: "Equipos seleccionados",
    tagline: "SONIDO E ILUMINACIÓN PROFESIONAL",
    am: "a. m.",
    pm: "p. m.",
 // ✅ HOME (index.html)
    experience_title: "Vive la Experiencia",
    dj_title: "Servicio Completo de DJ",
    dj_description: "Bodas, Quinceañeras y Eventos Privados.",
    dj_bullet_mc: "MC / Anuncios (EN/ES)",
    dj_bullet_playlist: "Lista musical personalizada",
    dj_bullet_setup: "Montaje + desmontaje incluido",
    dj_bullet_backup: "Equipo de respaldo",
    book_now: "Reservar Ahora",
    rental_title: "Renta de Equipo",
    rental_description: "Audio e iluminación profesional para tu evento.",
    rent_btn: "Rentar Equipo",
    follow_text: "Síguenos:",
    trust_title: "Con la confianza de clientes en Louisville",
    trust_subtitle: "DJ en Louisville KY • Renta de sonido e iluminación en Louisville",
    trust_events: "Eventos realizados",
    trust_reviews: "Calificación promedio",
    trust_response: "Respuesta rápida por WhatsApp",
    review_one_text: "“Sonido e iluminación increíbles. ¡Nuestra boda fue un concierto!”",
    review_two_text: "“Montaje profesional, MC bilingüe y pista llena.”",
    review_three_text: "“Respuesta rápida y equipo de primera. ¡Recomendado!”",
    video_cta: "Ver videos de eventos",
    party_videos_title: "Videos de Fiesta",
    party_videos_subtitle: "Disfruta momentos de celebraciones recientes.",
    party_videos_playlist: "Lista de reproducción",
    packages_title: "Paquetes de DJ",
    package_includes_label: "Incluye",
    package1_title: "DJ Esencial",
    package1_description: "Paquete básico de DJ para eventos privados pequeños.",
    package1_include_1: "Servicio profesional de DJ",
    package1_include_2: "Controladora DJ (DDJ-FLX4)",
    package1_include_3: "2 altavoces principales",
    package1_include_4: "Micrófonos inalámbricos (2)",
    package1_include_5: "Booth DJ portátil",
    package1_include_6: "Iluminación LED básica (ambiente)",
    package1_capacity: "Capacidad recomendada: 30–60 invitados",
    package2_title: "DJ Fiesta",
    package2_description: "Más potencia de sonido e iluminación para celebraciones con energía.",
    package2_include_1: "Servicio profesional de DJ",
    package2_include_2: "Controladora DJ (DDJ-FLX4)",
    package2_include_3: "2 altavoces principales",
    package2_include_4: "1 subwoofer",
    package2_include_5: "Micrófonos inalámbricos",
    package2_include_6: "Booth DJ",
    package2_include_7: "Iluminación dinámica (beams + barras LED)",
    package2_include_8: "Máquina de humo",
    package2_capacity: "Capacidad recomendada: 60–120 invitados",
    package3_title: "DJ Pro Evento",
    package3_description: "Paquete profesional para eventos formales y medianos.",
    package3_include_1: "Servicio profesional de DJ",
    package3_include_2: "Controladora DJ + consola digital",
    package3_include_3: "2 altavoces principales",
    package3_include_4: "2 subwoofers",
    package3_include_5: "Micrófonos inalámbricos",
    package3_include_6: "Booth DJ",
    package3_include_7: "Iluminación profesional (moving heads + beams)",
    package3_include_8: "Máquina de humo",
    package3_capacity: "Capacidad recomendada: 120–200 invitados",
    package4_title: "DJ Boda / XV",
    package4_description: "Producción elegante diseñada para bodas y quinceañeros.",
    package4_include_1: "Servicio profesional de DJ",
    package4_include_2: "Controladora DJ + consola digital",
    package4_include_3: "2 altavoces principales",
    package4_include_4: "2 subwoofers",
    package4_include_5: "Micrófonos inalámbricos",
    package4_include_6: "Booth DJ elegante",
    package4_include_7: "Estructura truss de iluminación",
    package4_include_8: "Iluminación premium (moving heads RGBW)",
    package4_include_9: "Máquina de humo bajo (efecto nube)",
    package4_capacity: "Capacidad recomendada: 150–250 invitados",
    package5_title: "DJ Impacto Show",
    package5_description: "Producción de alto impacto para eventos grandes y montajes tipo escenario.",
    package5_include_1: "Servicio profesional de DJ",
    package5_include_2: "Consola digital avanzada",
    package5_include_3: "Controladora DJ",
    package5_include_4: "2 altavoces principales",
    package5_include_5: "2 subwoofers",
    package5_include_6: "Micrófonos inalámbricos",
    package5_include_7: "Booth DJ",
    package5_include_8: "Estructura truss completa",
    package5_include_9: "Iluminación avanzada (spots, rotating beams, mini beams)",
    package5_include_10: "Máquina de humo",
    package5_include_11: "Máquinas de chispas frías",
    package5_capacity: "Capacidad recomendada: 200–400 invitados",
    addons_title: "Experiencia FX (Adicional)",
    addons_card_title: "Experiencia FX (Adicional)",
    addons_option_1: "Chispas frías",
    addons_option_2: "Humo bajo",
    addons_option_3: "Lanzador eléctrico de confeti",
    addons_option_4: "Cañones de aire con confeti",
    package_btn: "Reservar este paquete",
    about_title: "Sobre Jeca Audio",
    about_text:
      "Jeca Audio ofrece DJ y renta de sonido e iluminación en Louisville, KY. Somos bilingües, creamos la música ideal y llevamos equipo confiable para que tu evento sea perfecto.",
    about_area_title: "Zona de servicio",
    about_area_text: "Louisville, KY y alrededores.",
    about_response_title: "Respuesta rápida",
    about_response_text: "Escríbenos por WhatsApp y recibe tu cotización.",
    about_years_title: "Experiencia",
    about_years_text: "Más de {years} años en eventos, bodas y fiestas privadas.",
    contact_title: "Contacto",
    contact_phone_label: "Teléfono",
    contact_email_label: "Correo",
    event_venue: "Lugar / Zona",
    pickup_delivery: "¿Recogida o entrega?",
    pickup: "Recogida",
    delivery: "Entrega",
    event_access: "¿Escaleras / elevador?",
    access_stairs: "Escaleras",
    access_elevator: "Elevador",
    access_ground: "Planta baja",
    access_not_sure: "No estoy seguro",
    rental_policies_title: "Políticas de renta",
    rental_policy_deposit: "Se requiere depósito de seguridad.",
    rental_policy_id: "ID válido requerido al recoger.",
    rental_policy_delivery: "Pickup o entrega disponible.",
    rental_policy_late: "Se puede cobrar por entrega tardía.",
    rental_availability: "Disponibilidad confirmada después de la solicitud.",
    product_includes_title: "Incluye",
    product_requirements_title: "Requisitos",
    includes_default_cables: "Cables y alimentación (según aplique).",
    includes_default_setup: "Guía básica de instalación al recoger.",
    requirements_power: "Se requiere toma de corriente estándar.",
    requirements_space: "Se recomienda espacio libre de montaje.",
    missing_fields_title: "Por favor completa todos los campos obligatorios:",
    required_notice: "Todos los campos son obligatorios para enviar tu solicitud.",
    operator_needed: "¿Necesitas operador?",
    operator_yes: "Sí",
    operator_no: "No",
    confirm_booking_title: "¿Confirmar detalles antes de WhatsApp?",
  },
};

/*********************************
 * EXPERIENCE YEARS
 *********************************/
const EXPERIENCE_START_YEAR = 2020;

function getExperienceYears() {
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - EXPERIENCE_START_YEAR);
}

/*********************************
 * CAMBIO DE IDIOMA
 *********************************/
function setLanguage(lang) {
  const experienceYears = getExperienceYears();

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    let value = translations?.[lang]?.[key];
    if (!value) return;

    if (key === "about_years_text") {
      value = value.replace("{years}", experienceYears);
    }

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
  try { updatePackageButtons(lang); } catch {}
}
function setLanguageSafe(lang) {
  if (typeof setLanguage === "function") setLanguage(lang);
}

function updatePackageButtons(lang) {
  const buttons = document.querySelectorAll(".package-btn[data-package]");
  if (!buttons.length) return;

  const messages = {
    en: (pkg) => `Hi JECA AUDIO, I'm interested in the ${pkg} DJ package. Please share availability and details.`,
    es: (pkg) => `Hola JECA AUDIO, me interesa el paquete ${pkg} de DJ. ¿Me pueden compartir disponibilidad y detalles?`,
  };

  buttons.forEach((btn) => {
    const pkg =
      (lang === "es" ? btn.dataset.packageEs : btn.dataset.packageEn) ||
      btn.dataset.package ||
      "DJ";
    const message = messages[lang] ? messages[lang](pkg) : messages.en(pkg);
    btn.dataset.packageMessage = message;
  });
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
        "img/productos/lights/LightBarLED10/LightBarLED108.gif"
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
let galleryIntervals = [];
let homeGalleryIntervals = [];

function getAllEquipmentPhotos() {
  const photos = (infoEmpresa.equipos || []).flatMap((equipo) =>
    Array.isArray(equipo.fotos) ? equipo.fotos : []
  );
  return Array.from(new Set(photos));
}

function setupHomeGallery() {
  const galleryImages = document.querySelectorAll(".gallery-grid img[data-gallery-slot]");
  if (!galleryImages.length) return;

  homeGalleryIntervals.forEach((id) => clearInterval(id));
  homeGalleryIntervals = [];

  const photos = getAllEquipmentPhotos();
  if (!photos.length) return;

  galleryImages.forEach((img, slotIndex) => {
    let currentIndex = (slotIndex * 2) % photos.length;
    img.src = photos[currentIndex];

    if (photos.length <= 1) return;

    const intervalId = setInterval(() => {
      currentIndex = (currentIndex + 1) % photos.length;
      img.style.opacity = "0";
      setTimeout(() => {
        img.src = photos[currentIndex];
        img.style.opacity = "1";
      }, 250);
    }, 3000);

    homeGalleryIntervals.push(intervalId);
  });
}

/*********************************
 * PARTY VIDEO PLAYLIST
 *********************************/
const partyVideoFallback = [
  "Download.mp4",
  "Download (1).mp4",
  "Download (5).mp4",
  "Download (6).mp4",
  "Download (7).mp4"
];

function formatVideoTitle(filename) {
  const name = filename.replace(/\.[^/.]+$/, "");
  return name.replace(/[-_]+/g, " ").trim();
}

async function initPartyVideoPlaylist() {
  const playlistEl = document.getElementById("party-video-playlist");
  const player = document.getElementById("party-video-player");
  if (!playlistEl || !player) return;

  const playlistSrc = playlistEl.dataset.playlistSrc;
  let files = [];

  if (playlistSrc) {
    try {
      const response = await fetch(playlistSrc, { cache: "no-store" });
      if (response.ok) {
        const data = await response.json();
        if (Array.isArray(data)) files = data;
      }
    } catch {
      files = [];
    }
  }

  if (!files.length) files = partyVideoFallback;

  const basePath = playlistSrc ? playlistSrc.replace(/[^/]*$/, "") : "img/video/party/";
  const items = files
    .map((entry) =>
      typeof entry === "string"
        ? { file: entry, title: formatVideoTitle(entry) }
        : { file: entry.file, title: entry.title || formatVideoTitle(entry.file || "") }
    )
    .filter((item) => item.file);

  if (!items.length) return;

  let currentIndex = 0;

  const playIndex = (index, shouldPlay = true) => {
    currentIndex = index;
    const src = encodeURI(`${basePath}${items[index].file}`);
    player.src = src;
    updateActive();
    if (shouldPlay) {
      const playPromise = player.play();
      if (playPromise && typeof playPromise.catch === "function") {
        playPromise.catch(() => {});
      }
    }
  };

  const updateActive = () => {
    playlistEl.querySelectorAll(".video-playlist-item").forEach((btn, idx) => {
      btn.classList.toggle("active", idx === currentIndex);
    });
  };

  playlistEl.innerHTML = "";
  items.forEach((item, index) => {
    const li = document.createElement("li");
    const button = document.createElement("button");
    button.type = "button";
    button.className = "video-playlist-item";
    button.textContent = item.title;
    button.addEventListener("click", () => playIndex(index));
    li.appendChild(button);
    playlistEl.appendChild(li);
  });

  player.addEventListener("ended", () => {
    const nextIndex = (currentIndex + 1) % items.length;
    playIndex(nextIndex);
  });

  playIndex(0, false);
}

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
  const summaryEl = document.getElementById("cart-summary");
  const summaryListEl = document.getElementById("cart-summary-list");
  const submitActions = document.getElementById("cart-actions-submit");
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = `<div style="padding:14px;opacity:.85;">${translations[lang].empty_cart}</div>`;
    if (summaryEl) summaryEl.classList.add("is-hidden");
    if (summaryListEl) summaryListEl.innerHTML = "";
    if (submitActions) submitActions.classList.add("is-hidden");
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
    if (summaryEl) summaryEl.classList.remove("is-hidden");
    if (summaryListEl) {
      summaryListEl.innerHTML = cart
        .map((ci) => {
          const eq = infoEmpresa.equipos.find((e) => e.id === ci.id);
          if (!eq) return "";
          return `<li><span>${eq.nombre}</span><span>${translations[lang].qty}: ${ci.qty}</span></li>`;
        })
        .join("");
    }
  }

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

function setupCartSteps() {
  const eventSection = document.getElementById("cart-event");
  const nextBtn = document.getElementById("cart-next-step");
  const nextWrapper = nextBtn?.closest(".cart-actions-top");
  const submitActions = document.getElementById("cart-actions-submit");
  if (!eventSection || !nextBtn || !nextWrapper || !submitActions) return;

  eventSection.classList.add("is-hidden");
  nextBtn.addEventListener("click", () => {
    eventSection.classList.remove("is-hidden");
    eventSection.scrollIntoView({ behavior: "smooth", block: "start" });
    nextWrapper.classList.add("is-hidden");
    submitActions.classList.remove("is-hidden");
  });
}

/*********************************
 * PRODUCT MODAL
 *********************************/
function openProductModal(equipo) {
  const modal = document.getElementById("product-modal");
  if (!modal || !equipo) return;

  const titleEl = document.getElementById("product-modal-title");
  const descEl = document.getElementById("product-modal-description");
  const imageEl = document.getElementById("product-modal-image");
  const thumbsEl = document.getElementById("product-modal-thumbs");
  const specsEl = document.getElementById("product-modal-specs");
  const includesEl = document.getElementById("product-modal-includes");
  const requirementsEl = document.getElementById("product-modal-requirements");

  if (titleEl) titleEl.textContent = equipo.nombre;
  if (descEl) descEl.textContent = equipo.descripcion || "";

  const fotos = Array.isArray(equipo.fotos) ? equipo.fotos : [];
  if (imageEl) {
    imageEl.src = fotos[0] || "";
    imageEl.alt = equipo.nombre || "";
  }

  if (thumbsEl) {
    thumbsEl.innerHTML = fotos
      .map(
        (foto, index) =>
          `<img class="product-thumb ${index === 0 ? "active" : ""}" src="${foto}" alt="${equipo.nombre || ""}" data-index="${index}">`
      )
      .join("");
    thumbsEl.querySelectorAll(".product-thumb").forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const idx = Number(thumb.dataset.index || 0);
        if (imageEl) imageEl.src = fotos[idx] || "";
        thumbsEl.querySelectorAll(".product-thumb").forEach((el) => el.classList.remove("active"));
        thumb.classList.add("active");
      });
    });
  }

  const lang = localStorage.getItem("language") || "en";
  if (specsEl) {
    const specs = Array.isArray(equipo.especificaciones) ? equipo.especificaciones : [];
    if (specs.length) {
      specsEl.innerHTML = `<ul>${specs.map((s) => `<li>${s}</li>`).join("")}</ul>`;
    } else {
      specsEl.innerHTML = `<p>${equipo.categoria ? `Category: ${equipo.categoria}` : "Specs available upon request."}</p>`;
    }
  }

  if (includesEl) {
    const includes = Array.isArray(equipo.incluye)
      ? equipo.incluye
      : [translations[lang].includes_default_cables, translations[lang].includes_default_setup];
    includesEl.innerHTML = `<ul>${includes.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  if (requirementsEl) {
    const requirements = Array.isArray(equipo.requisitos)
      ? equipo.requisitos
      : [translations[lang].requirements_power, translations[lang].requirements_space];
    requirementsEl.innerHTML = `<ul>${requirements.map((item) => `<li>${item}</li>`).join("")}</ul>`;
  }

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeProductModal() {
  const modal = document.getElementById("product-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}


/*********************************
 * BOOKING MODAL
 *********************************/
let selectedPackage = null;

function openBookingModal(packageName) {
  selectedPackage = packageName || null;
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");
}

function closeBookingModal() {
  const modal = document.getElementById("booking-modal");
  if (!modal) return;
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
}

function submitBookingQuote(ev) {
  ev?.preventDefault();

  const lang = localStorage.getItem("language") || "en";
  const date = document.getElementById("booking-date")?.value || "";
  const timeRaw = document.getElementById("booking-time")?.value || "";
  const ampm = document.getElementById("booking-ampm")?.value || "";
  const time = timeRaw && ampm ? `${timeRaw} ${ampm}` : timeRaw;

  const type = document.getElementById("booking-type")?.value || "";
  const guests = document.getElementById("booking-guests")?.value || "";
  const io = document.getElementById("booking-io")?.value || "";
  const city = document.getElementById("booking-city")?.value || "";
  const venue = document.getElementById("booking-venue")?.value || "";
  const hours = document.getElementById("booking-hours")?.value || "";
  const power = document.getElementById("booking-power")?.value || "";
  const access = document.getElementById("booking-access")?.value || "";
  const notes = document.getElementById("booking-notes")?.value || "";
  const addonValues = Array.from(
    document.querySelectorAll(".booking-addon-options input[type=\"checkbox\"]:checked")
  ).map((input) => input.value);
  const addonLabels = addonValues.map((key) => translations[lang]?.[key] || key);
  const addonsLine = addonLabels.length
    ? lang === "es"
      ? `Adicionales: ${addonLabels.join(", ")}`
      : `Add-ons: ${addonLabels.join(", ")}`
    : "";

  const requiredFields = [
    { key: "event_date", value: date },
    { key: "event_time", value: timeRaw },
    { key: "event_type", value: type },
    { key: "event_city", value: city },
    { key: "event_venue", value: venue },
  ];

  const missing = requiredFields.filter((field) => !field.value.trim());
  if (missing.length) {
    const missingText = missing
      .map((field) => `• ${translations[lang][field.key] || field.key}`)
      .join("\n");
    window.alert(`${translations[lang].missing_fields_title}\n${missingText}`);
    return;
  }

  const packageLine = selectedPackage
    ? lang === "es"
      ? `Paquete: ${selectedPackage}`
      : `Package: ${selectedPackage}`
    : "";

  const summary =
    lang === "es"
      ? `Fecha: ${date}\nHora: ${time}\nTipo: ${type}\nCiudad: ${city}\nLugar/Zona: ${venue}\nAcceso: ${access || "—"}${packageLine ? `\n${packageLine}` : ""}${addonsLine ? `\n${addonsLine}` : ""}`
      : `Date: ${date}\nTime: ${time}\nType: ${type}\nCity: ${city}\nVenue/Area: ${venue}\nAccess: ${access || "—"}${packageLine ? `\n${packageLine}` : ""}${addonsLine ? `\n${addonsLine}` : ""}`;

  const confirmSend = window.confirm(`${translations[lang].confirm_booking_title}\n\n${summary}`);
  if (!confirmSend) return;

  const message =
    lang === "es"
      ? `Hola JECA AUDIO, quiero una cotización.\n\n` +
        `${selectedPackage ? `🎧 Paquete: ${selectedPackage}\n` : ""}` +
        `📅 Fecha: ${date}\n⏰ Hora: ${time}\n🎉 Tipo: ${type}\n👥 Invitados: ${guests}\n🏠 Interior/Exterior: ${io}\n📍 Ciudad: ${city}\n📌 Lugar/Zona: ${venue}\n⏳ Duración: ${hours} horas\n🔌 Electricidad: ${power}\n🏢 Acceso: ${access}\n\n` +
        `📝 Notas: ${notes}`
      : `Hi JECA AUDIO, I’d like a quote.\n\n` +
        `${selectedPackage ? `🎧 Package: ${selectedPackage}\n` : ""}` +
        `📅 Date: ${date}\n⏰ Time: ${time}\n🎉 Type: ${type}\n👥 Guests: ${guests}\n🏠 Indoor/Outdoor: ${io}\n📍 City: ${city}\n📌 Venue/Area: ${venue}\n⏳ Duration: ${hours} hours\n🔌 Power: ${power}\n🏢 Access: ${access}\n\n` +
        `📝 Notes: ${notes}`;

  const wa = `https://wa.me/${infoEmpresa.whatsapp}?text=${encodeURIComponent(message)}`;
  window.open(wa, "_blank", "noopener");
}

/*********************************
 * WHATSAPP
 *********************************/
function submitQuote(ev) {
  ev?.preventDefault();

  const lang = localStorage.getItem("language") || "en";
  const cart = loadCart();

  if (!cart.length) {
    toggleCart(true);
    return;
  }

  const getValue = (cartId) => {
    const cartValue = document.getElementById(cartId)?.value || "";
    return cartValue;
  };

  const date = getValue("cart-date");
  const timeRaw = getValue("cart-time");
  const ampm = getValue("cart-ampm");
  const time = timeRaw && ampm ? `${timeRaw} ${ampm}` : timeRaw;

  const type = getValue("cart-type");
  const guests = getValue("cart-guests");
  const io = getValue("cart-io");
  const city = getValue("cart-city");
  const venue = getValue("cart-venue");
  const delivery = getValue("cart-delivery");
  const hours = getValue("cart-hours");
  const power = getValue("cart-power");
  const operator = getValue("cart-operator");
  const access = getValue("cart-access");
  const notes = getValue("cart-notes");
  const days = loadDays();

  const requiredFields = [
    { key: "event_date", value: date, id: "cart-date" },
    { key: "event_time", value: timeRaw, id: "cart-time" },
    { key: "event_type", value: type, id: "cart-type" },
    { key: "guest_count", value: guests, id: "cart-guests" },
    { key: "indoor_outdoor", value: io, id: "cart-io" },
    { key: "event_city", value: city, id: "cart-city" },
    { key: "event_venue", value: venue, id: "cart-venue" },
    { key: "pickup_delivery", value: delivery, id: "cart-delivery" },
    { key: "duration_hours", value: hours, id: "cart-hours" },
    { key: "power_available", value: power, id: "cart-power" },
    { key: "operator_needed", value: operator, id: "cart-operator" },
    { key: "event_access", value: access, id: "cart-access" },
    { key: "notes", value: notes, id: "cart-notes" },
  ];

  const missing = requiredFields.filter((field) => !field.value.trim());
  if (missing.length) {
    const firstMissing = document.getElementById(missing[0].id);
    if (firstMissing) {
      firstMissing.focus();
      firstMissing.reportValidity?.();
    }
    const missingText = missing
      .map((field) => `• ${translations[lang][field.key] || field.key}`)
      .join("\n");
    window.alert(`${translations[lang].missing_fields_title}\n${missingText}`);
    return;
  }

  const deliveryLabel = delivery
    ? translations[lang][delivery.toLowerCase()] || delivery
    : delivery;
  const operatorLabel = operator
    ? translations[lang][`operator_${operator.toLowerCase()}`] || operator
    : operator;

  const lines = cart
    .map((ci) => {
      const eq = infoEmpresa.equipos.find((e) => e.id === ci.id);
      return eq ? `• ${ci.qty} x ${eq.nombre}` : "";
    })
    .filter(Boolean);

  const message =
    lang === "es"
      ? `Hola JECA AUDIO, quiero una cotización.\n\n` +
        `📅 Fecha: ${date}\n⏰ Hora: ${time}\n🎉 Tipo: ${type}\n👥 Invitados: ${guests}\n🏠 Interior/Exterior: ${io}\n📍 Ciudad: ${city}\n📌 Lugar/Zona: ${venue}\n⏳ Duración: ${hours} horas\n🔌 Electricidad: ${power}\n🏢 Acceso: ${access}\n\n` +
        `🚚 Recogida/Entrega: ${deliveryLabel}\n👷 Operador requerido: ${operatorLabel}\n\n` +
        `🛒 Equipos:\n${lines.join("\n")}\n\n` +
        `📆 Días de renta: ${days}\n\n` +
        `📝 Notas: ${notes}`
      : `Hi JECA AUDIO, I’d like a quote.\n\n` +
        `📅 Date: ${date}\n⏰ Time: ${time}\n🎉 Type: ${type}\n👥 Guests: ${guests}\n🏠 Indoor/Outdoor: ${io}\n📍 City: ${city}\n📌 Venue/Area: ${venue}\n⏳ Duration: ${hours} hours\n🔌 Power: ${power}\n🏢 Access: ${access}\n\n` +
        `🚚 Pickup/Delivery: ${deliveryLabel}\n👷 Operator needed: ${operatorLabel}\n\n` +
        `🛒 Items:\n${lines.join("\n")}\n\n` +
        `📆 Rental days: ${days}\n\n` +
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
  filter === "all"
    ? (infoEmpresa.equipos || [])
    : (infoEmpresa.equipos || []).filter((e) => e.categoria === filter);

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

      <div class="equipment-card-actions">
        <button class="btn-main add-to-cart-btn" type="button">
          ${translations[lang].add_to_quote}
        </button>
      </div>
    `;

    grid.appendChild(card);
    card.addEventListener("click", () => openProductModal(equipo));

    const addBtn = card.querySelector(".add-to-cart-btn");
    if (addBtn) {
      addBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        addToCart(equipo.id);
      });
    }

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
  toggleCart(true);
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
    setupCartSteps();

    const modal = document.getElementById("product-modal");
    const closeBtn = document.getElementById("product-modal-close");
    if (closeBtn) closeBtn.addEventListener("click", closeProductModal);
    if (modal) {
      modal.addEventListener("click", (event) => {
        if (event.target === modal) closeProductModal();
      });
    }
  }

  const bookingModal = document.getElementById("booking-modal");
  const bookingClose = document.getElementById("booking-modal-close");
  const bookingBtn = document.getElementById("book-now-btn");
  const bookingForm = document.getElementById("booking-form");
  const packageButtons = document.querySelectorAll(".package-btn[data-package]");

  if (bookingBtn) bookingBtn.addEventListener("click", () => openBookingModal());
  packageButtons.forEach((btn) => {
    btn.addEventListener("click", () => openBookingModal(btn.dataset.package));
  });
  if (bookingClose) bookingClose.addEventListener("click", closeBookingModal);
  if (bookingModal) {
    bookingModal.addEventListener("click", (event) => {
      if (event.target === bookingModal) closeBookingModal();
    });
  }
  if (bookingForm) bookingForm.addEventListener("submit", submitBookingQuote);

  setupHomeGallery();
  initPartyVideoPlaylist();
});

/*********************************
 * HEADER SCROLL
 *********************************/
window.addEventListener(
  "scroll",
  () => {
    const header = document.getElementById("main-header");
    if (!header) return;
    header.classList.toggle("scrolled", window.scrollY > 50);
  },
  { passive: true }
);

/*********************************
 * GLOBALS
 *********************************/
window.setLanguage = setLanguage;
window.setLanguageSafe = setLanguageSafe;
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
window.openProductModal = openProductModal;
window.closeProductModal = closeProductModal;
window.openBookingModal = openBookingModal;
window.closeBookingModal = closeBookingModal;
window.submitBookingQuote = submitBookingQuote;
