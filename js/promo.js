const STORAGE_KEY = "JECA_PROMO_V1";
const CONSENT_KEY = "JECA_CONSENT";
const OFFER_WINDOW_MS = 24 * 60 * 60 * 1000;
const COOLDOWN_MS = 14 * 24 * 60 * 60 * 1000;

let countdownTimer = null;
let currentState = null;

const formatCurrency = (value) => {
  const numeric = Number(String(value).replace(/[^0-9.]/g, ""));
  if (Number.isNaN(numeric)) {
    return `$${value}`;
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(numeric);
};

const formatDuration = (ms) => {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const hours = String(Math.floor(totalSeconds / 3600)).padStart(2, "0");
  const minutes = String(Math.floor((totalSeconds % 3600) / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${hours}:${minutes}:${seconds}`;
};

const getDeviceType = () => {
  const ua = navigator.userAgent.toLowerCase();
  const width = window.innerWidth;
  const isMobileUA = /mobi|android|iphone|ipod|blackberry|phone/.test(ua);
  const isTabletUA = /ipad|tablet|playbook|silk/.test(ua);

  if (isMobileUA || width < 768) {
    return "mobile";
  }

  if (isTabletUA || (width >= 768 && width <= 1024)) {
    return "tablet";
  }

  return "desktop";
};

const isPromoActive = (state, now = Date.now()) =>
  Boolean(state.promoExpires && now < state.promoExpires);

const isCooldownActive = (state, now = Date.now()) =>
  Boolean(state.cooldownUntil && now < state.cooldownUntil);

const createBaseState = () => {
  const now = Date.now();
  return {
    promoStart: null,
    promoExpires: null,
    cooldownUntil: null,
    deviceType: getDeviceType(),
    createdAt: now,
    updatedAt: now,
    version: "v1",
  };
};

const loadState = () => {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") {
      throw new Error("Invalid state");
    }
    return parsed;
  } catch (error) {
    localStorage.removeItem(STORAGE_KEY);
    return null;
  }
};

const saveState = (state) => {
  const now = Date.now();
  state.updatedAt = now;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
};

const syncStateNow = (state) => {
  const now = Date.now();

  if (state.promoExpires && now >= state.promoExpires) {
    state.promoStart = null;
    state.promoExpires = null;
    if (!state.cooldownUntil || state.cooldownUntil <= now) {
      state.cooldownUntil = now + COOLDOWN_MS;
    }
  }

  if (state.cooldownUntil && now >= state.cooldownUntil) {
    state.cooldownUntil = null;
  }

  state.updatedAt = now;
  return state;
};

const maybeStartPromo = (state) => {
  const now = Date.now();
  if (!isPromoActive(state, now) && !isCooldownActive(state, now)) {
    state.promoStart = now;
    state.promoExpires = now + OFFER_WINDOW_MS;
    state.updatedAt = now;
  }
  return state;
};

const renderPricing = (state) => {
  const cards = document.querySelectorAll(".package-card[data-normal][data-offer]");
  const promoActive = isPromoActive(state);

  cards.forEach((card) => {
    const normalPrice = formatCurrency(card.dataset.normal);
    const offerPrice = formatCurrency(card.dataset.offer);

    const pricing = card.querySelector(".package-pricing") || card;
    let priceContainer = pricing.querySelector(".package-price");
    if (!priceContainer) {
      priceContainer = document.createElement("div");
      priceContainer.className = "package-price";
      pricing.prepend(priceContainer);
    }

    priceContainer.innerHTML = "";
    const priceNow = document.createElement("span");
    priceNow.className = "price-now";
    priceNow.textContent = promoActive ? offerPrice : normalPrice;

    const priceOld = document.createElement("span");
    priceOld.className = "price-old";
    priceOld.textContent = `Antes: ${normalPrice}`;

    priceContainer.appendChild(priceNow);
    priceContainer.appendChild(priceOld);

    const badge = card.querySelector("[data-promo-badge]");
    if (badge) {
      badge.classList.toggle("is-hidden", !promoActive);
    }

    const saveNote = card.querySelector("[data-price-save]");
    if (saveNote) {
      saveNote.classList.toggle("is-hidden", !promoActive);
    }

    priceOld.classList.toggle("is-hidden", !promoActive);
  });
};

const renderPromoBanner = (state) => {
  const banner = document.getElementById("promo-banner");
  if (!banner) {
    return;
  }

  const promoActive = isPromoActive(state);
  banner.classList.toggle("is-hidden", !promoActive);
};

const startCountdown = (expiresAt) => {
  const countdown = document.getElementById("promo-countdown");
  if (!countdown) {
    return;
  }

  const update = () => {
    const remaining = expiresAt - Date.now();
    if (remaining <= 0) {
      clearInterval(countdownTimer);
      countdownTimer = null;
      currentState = syncStateNow(currentState);
      saveState(currentState);
      renderPricing(currentState);
      renderPromoBanner(currentState);
      countdown.textContent = "00:00:00";
      return;
    }

    countdown.textContent = formatDuration(remaining);
  };

  update();
  countdownTimer = setInterval(update, 1000);
};

const setupStorageConsent = () => {
  const consent = document.getElementById("storage-consent");
  if (!consent) {
    return;
  }

  const hasConsent = localStorage.getItem(CONSENT_KEY) === "true";
  if (hasConsent) {
    consent.classList.add("is-hidden");
    return;
  }

  const button = consent.querySelector("button");
  if (button) {
    button.addEventListener("click", () => {
      localStorage.setItem(CONSENT_KEY, "true");
      consent.classList.add("is-hidden");
    });
  }
};

const initPromo = () => {
  const stored = loadState();
  currentState = stored || createBaseState();

  if (!currentState.deviceType) {
    currentState.deviceType = getDeviceType();
  }

  currentState = syncStateNow(currentState);
  currentState = maybeStartPromo(currentState);
  saveState(currentState);

  renderPricing(currentState);
  renderPromoBanner(currentState);

  if (isPromoActive(currentState)) {
    startCountdown(currentState.promoExpires);
  }

  setupStorageConsent();
};

initPromo();
