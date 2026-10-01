/* Páginas de servicio: cambio de idioma y enlaces de WhatsApp.
   Usa la misma clave "language" que la portada, así el idioma elegido se
   mantiene al pasar de una página a otra. */

const WHATSAPP_NUMBER = "15025540333";

function readLanguage() {
  try {
    const saved = localStorage.getItem("language");
    if (saved === "es" || saved === "en") return saved;
  } catch (error) {
    // Sin acceso a localStorage (modo privado): se usa el idioma del navegador.
  }
  return (navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en";
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

function applyLanguage(lang) {
  const root = document.documentElement;
  root.setAttribute("data-lang", lang);
  root.lang = lang;

  const title = root.dataset[lang === "es" ? "titleEs" : "titleEn"];
  if (title) document.title = title;

  document.querySelectorAll("[data-wa-es]").forEach((link) => {
    const message = lang === "es" ? link.dataset.waEs : link.dataset.waEn;
    if (message) link.href = whatsappUrl(message);
  });

  document.querySelectorAll(".lp-lang button").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.lang === lang));
  });
}

function setLanguage(lang) {
  try {
    localStorage.setItem("language", lang);
  } catch (error) {
    // Si no se puede guardar, el cambio vale solo para esta visita.
  }
  applyLanguage(lang);
}

document.querySelectorAll(".lp-lang button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

applyLanguage(readLanguage());
