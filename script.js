const ceremonyDate = new Date("2026-09-19T15:00:00+02:00");

const translations = {
  pl: {
    navProgram: "Program",
    navRsvp: "RSVP",
    navPost: "Post Scriptum",
    navConfirm: "Potwierdz obecnosc",
    heroEyebrow: "19 wrzesnia 2026 · 15:00 · Bydgoszcz",
    heroLede:
      "Slubny kadr w klimacie plakatu filmowego, a zaraz po nim weselisko z porzadnym rytmem i miejscem na wszystkie dobre historie.",
    days: "dni",
    hours: "godz.",
    minutes: "min",
    seconds: "sek",
    heroCta: "Potwierdz obecnosc",
    heroSecondary: "Zobacz program",
    programEyebrow: "Program",
    programTitle: "Dwa akty, jedna historia",
    ceremonyPart: "Czesc I — Ceremonia",
    ceremonyTitle: "Bazylika pw. sw. Wincentego a Paulo",
    ceremonyCopy:
      "Spotykamy sie w Bazylice w samym sercu Bydgoszczy. Przyjdzcie chwile wczesniej, zeby spokojnie znalezc miejsce.",
    partyPart: "Czesc II — Weselisko",
    partyTitle: "Karczma Gazdowka",
    partyCopy:
      "Po ceremonii przenosimy akcje do Gazdowki. Bedzie kolacja, parkiet i tempo, ktorego nie trzeba bedzie montowac w postprodukcji.",
    mapsCta: "Otworz w Google Maps",
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Dajcie nam znac do 31 lipca 2026",
    rsvpCopy:
      "Wystarczy krotka wiadomosc do Antoniny albo Piotra. Formularz online mozemy podpiac w kolejnym kroku, gdy bedzie gotowy docelowy kanal zbierania odpowiedzi.",
    contactCopy: "Kontakt RSVP",
    postQuote:
      "P.S. Niech ten wieczor bedzie troche jak dobry film: z mocnym otwarciem, swietna obsada i scena finalowa, o ktorej jeszcze dlugo sie opowiada.",
    footerInvite: "Zobacz zaproszenie PDF"
  },
  en: {
    navProgram: "Schedule",
    navRsvp: "RSVP",
    navPost: "Post Scriptum",
    navConfirm: "Confirm attendance",
    heroEyebrow: "19 September 2026 · 3:00 PM · Bydgoszcz",
    heroLede:
      "A wedding frame with a retro movie poster pulse, followed by a party with rhythm, warmth, and room for every good story.",
    days: "days",
    hours: "hrs",
    minutes: "min",
    seconds: "sec",
    heroCta: "Confirm attendance",
    heroSecondary: "See schedule",
    programEyebrow: "Schedule",
    programTitle: "Two acts, one story",
    ceremonyPart: "Part I — Ceremony",
    ceremonyTitle: "St. Vincent de Paul Basilica",
    ceremonyCopy:
      "We meet at the Basilica in the heart of Bydgoszcz. Please arrive a little early so everyone can settle in calmly.",
    partyPart: "Part II — Wedding party",
    partyTitle: "Karczma Gazdowka",
    partyCopy:
      "After the ceremony, the action moves to Gazdowka: dinner, the dance floor, and a pace that needs no editing.",
    mapsCta: "Open in Google Maps",
    rsvpEyebrow: "RSVP",
    rsvpTitle: "Let us know by 31 July 2026",
    rsvpCopy:
      "A short message to Antonina or Piotr is enough. We can connect an online form in the next step once the final response channel is ready.",
    contactCopy: "RSVP contact",
    postQuote:
      "P.S. May this evening feel a bit like a good film: a strong opening, a brilliant cast, and a final scene people keep talking about.",
    footerInvite: "View invitation PDF"
  }
};

let activeLanguage = "pl";

function pad(value) {
  return String(value).padStart(2, "0");
}

function updateCountdown() {
  const now = new Date();
  const diff = Math.max(0, ceremonyDate.getTime() - now.getTime());
  const totalSeconds = Math.floor(diff / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  document.querySelector("[data-countdown-days]").textContent = String(days).padStart(3, "0");
  document.querySelector("[data-countdown-hours]").textContent = pad(hours);
  document.querySelector("[data-countdown-minutes]").textContent = pad(minutes);
  document.querySelector("[data-countdown-seconds]").textContent = pad(seconds);
}

function applyLanguage(language) {
  activeLanguage = language;
  document.documentElement.lang = language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = translations[language][key];
  });
}

document.querySelector("[data-language-toggle]").addEventListener("click", () => {
  applyLanguage(activeLanguage === "pl" ? "en" : "pl");
});

applyLanguage(activeLanguage);
updateCountdown();
setInterval(updateCountdown, 1000);
