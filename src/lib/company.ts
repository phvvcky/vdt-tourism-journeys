// Offizielle Firmendaten (Quelle: vdt-berlin.de / Preisliste BangGiaVeMayBay)
export const COMPANY = {
  name: "VDT Touristik GmbH",
  street: "Biesterfelder Straße 12",
  zipCity: "13053 Berlin",
  country: "Deutschland",
  phone: "+49 160 8 05 88 71",
  phoneHref: "+491608058871",
  email: "vdt@vdt-berlin.de",
  homepage: "www.vdt-berlin.de",
  ceo: "Vu Duy Toan",
  bankName: "Deutsche Bank Berlin",
  iban: "DE45 1007 0024 0726 8048 00",
  bic: "DEUTDEDBBER",
  taxNumber: "37/569/31228",
  register: "HRB 82334 Berlin-Charlottenburg",
} as const;

// WhatsApp-Direktlink (gleiche Nummer wie Telefon/Viber/Zalo)
export const WHATSAPP_URL = `https://wa.me/${COMPANY.phoneHref.replace(/[^0-9]/g, "")}`;
