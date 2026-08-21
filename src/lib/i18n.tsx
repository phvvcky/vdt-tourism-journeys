import { createContext, useContext, useEffect, useState, type ReactNode } from "react";

export type Lang = "de" | "vi" | "en";

export const LANGS: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "vi", label: "VI" },
  { code: "en", label: "EN" },
];

const de = {
  nav: { home: "Startseite", flights: "Flugziele", contact: "Kontakt" },
  brand: { tagline: "Ihr Flugspezialist in Berlin – Tickets weltweit, persönlich beraten." },
  common: {
    back: "Zurück zur Startseite",
    perPerson: "pro Person, einfacher Flug",
    request: "Flug anfragen",
    allDestinations: "Alle Flugziele",
    iata: "IATA Accredited Agent",
  },
  footer: {
    contact: "Kontakt",
    legal: "Rechtliches",
    imprint: "Impressum",
    privacy: "Datenschutz",
    hours: "Mo–Fr: 9:00–17:00 Uhr",
    rights: "Alle Rechte vorbehalten.",
  },
  hero: {
    badge: "IATA akkreditierter Agent",
    title: "Flugtickets aus Berlin – weltweit",
    lead: "Als IATA-Agent buchen wir Ihre Flüge mit Vietnam Airlines, Qatar Airways und weiteren Partner-Airlines – zu besten Konditionen und mit persönlicher Beratung.",
    ctaContact: "Kontakt aufnehmen",
    ctaOffers: "Flugziele entdecken",
  },
  why: {
    title: "Warum VDT Touristik?",
    lead: "Wir sind auf Flugtickets spezialisiert – seit Jahren die erste Adresse in Berlin für Flüge nach Vietnam und ganz Asien.",
    items: [
      {
        title: "Partner-Airlines",
        description:
          "Vietnam Airlines, Qatar Airways, Turkish Airlines, Emirates und weitere starke Partner für Ihre Strecke.",
      },
      {
        title: "Beste Konditionen als IATA-Agent",
        description: "Direkter Zugang zu Airline-Tarifen und Sonderkonditionen, die online oft nicht verfügbar sind.",
      },
      {
        title: "Persönliche Beratung",
        description: "Umbuchungen, Gepäck, Anschlüsse: Wir beraten Sie vor Ort in Berlin und bleiben erreichbar.",
      },
      {
        title: "Vietnam-Spezialist seit 199X",
        description: "Langjährige Erfahrung mit Flügen nach Vietnam und Südostasien – inklusive Visa-Hilfe.",
      },
    ],
  },
  routes: {
    title: "Beliebte Strecken",
    lead: "Eine Auswahl unserer gefragtesten Flugziele. Weitere Strecken und Tagespreise erhalten Sie persönlich im Büro oder telefonisch.",
    pageLead:
      "Hier finden Sie unsere gefragtesten Flugstrecken ab Berlin. Alle Preise sind Richtpreise für einfache Flüge und variieren je nach Reisezeit, Airline und Verfügbarkeit.",
    priceOneWay: "einfach",
    items: [
      {
        title: "Berlin – Hanoi",
        subtitle: "mit Vietnam Airlines & Qatar Airways",
        description: "Direkte und günstige Umsteigeverbindungen in die Hauptstadt Vietnams.",
        price: "ab 389 €",
        tag: "Vietnam",
        highlights: ["1 Zwischenstopp", "23 kg Freigepäck", "Flexible Termine", "Visa-Hilfe"],
      },
      {
        title: "Berlin – Ho-Chi-Minh-Stadt",
        subtitle: "mit Vietnam Airlines & Turkish Airlines",
        description: "Beliebte Strecke nach Saigon – auch mit Anschluss ins Mekong-Delta.",
        price: "ab 419 €",
        tag: "Vietnam",
        highlights: ["Kurze Umsteigezeiten", "23 kg Freigepäck", "Gruppentarife", "Visa-Hilfe"],
      },
      {
        title: "Berlin – Bangkok",
        subtitle: "mit Qatar Airways & Emirates",
        description: "Weitere Asien-Ziele wie Bangkok, Singapur, Seoul oder Tokio auf Anfrage.",
        price: "ab 359 €",
        tag: "Asien",
        highlights: ["Viele Abflugtage", "Anschlussflüge Asien", "Business Class möglich", "Beratung inklusive"],
      },
    ],
  },
  contactPreview: {
    title: "Sprechen Sie uns an",
    lead: "Besuchen Sie uns in Berlin oder rufen Sie uns an. Wir erstellen Ihnen gerne ein unverbindliches Flugangebot.",
    company: "VDT Touristik GmbH",
    phone: "Telefon",
    email: "E-Mail",
    cta: "Zum Kontaktformular",
    hoursTitle: "Öffnungszeiten",
    monFri: "Montag – Freitag",
    sat: "Samstag",
    sun: "Sonntag",
    closed: "geschlossen",
    hoursNote: "Termine außerhalb der Öffnungszeiten sind nach Vereinbarung möglich.",
  },
  contact: {
    title: "Kontakt",
    lead: "Besuchen Sie uns in unserem Büro in Berlin oder senden Sie uns eine Nachricht. Wir melden uns zeitnah bei Ihnen.",
    dataTitle: "Kontaktdaten",
    hours: "Öffnungszeiten",
    hoursWeek: "Mo–Fr: 9:00–17:00 Uhr",
    hoursWeekend: "Sa–So: geschlossen",
    iataTitle: "IATA akkreditiert",
    iataText:
      "VDT Touristik GmbH ist IATA akkreditierter Agent. Ihr Zeichen für seriöse und professionelle Flugvermittlung.",
    formTitle: "Kontaktformular",
    formLead: "Füllen Sie das Formular aus und wir melden uns innerhalb eines Werktags bei Ihnen.",
    name: "Name",
    namePlaceholder: "Ihr Name",
    emailLabel: "E-Mail",
    emailPlaceholder: "ihre@email.de",
    phoneLabel: "Telefon (optional)",
    subject: "Betreff",
    subjectPlaceholder: "Welche Strecke suchen Sie?",
    message: "Nachricht",
    messagePlaceholder: "Reiseziel, Reisedaten und Anzahl der Personen…",
    submit: "Nachricht senden",
  },
};

type Dict = typeof de;

const vi: Dict = {
  nav: { home: "Trang chủ", flights: "Điểm đến", contact: "Liên hệ" },
  brand: { tagline: "Chuyên gia vé máy bay tại Berlin – vé toàn cầu, tư vấn tận tình." },
  common: {
    back: "Về trang chủ",
    perPerson: "mỗi người, vé một chiều",
    request: "Yêu cầu báo giá",
    allDestinations: "Tất cả điểm đến",
    iata: "Đại lý được IATA công nhận",
  },
  footer: {
    contact: "Liên hệ",
    legal: "Pháp lý",
    imprint: "Thông tin pháp lý",
    privacy: "Bảo mật dữ liệu",
    hours: "Thứ 2–Thứ 6: 9:00–17:00",
    rights: "Mọi quyền được bảo lưu.",
  },
  hero: {
    badge: "Đại lý được IATA công nhận",
    title: "Vé máy bay từ Berlin đi toàn thế giới",
    lead: "Là đại lý IATA, chúng tôi đặt vé với Vietnam Airlines, Qatar Airways và nhiều hãng đối tác khác – giá tốt nhất kèm tư vấn trực tiếp.",
    ctaContact: "Liên hệ ngay",
    ctaOffers: "Xem điểm đến",
  },
  why: {
    title: "Vì sao chọn VDT Touristik?",
    lead: "Chúng tôi chuyên về vé máy bay – nhiều năm là địa chỉ tin cậy tại Berlin cho các chuyến bay đi Việt Nam và châu Á.",
    items: [
      {
        title: "Các hãng đối tác",
        description:
          "Vietnam Airlines, Qatar Airways, Turkish Airlines, Emirates và nhiều đối tác mạnh cho hành trình của bạn.",
      },
      {
        title: "Giá tốt nhất với tư cách đại lý IATA",
        description: "Truy cập trực tiếp giá vé và ưu đãi đặc biệt của hãng, thường không có trên mạng.",
      },
      {
        title: "Tư vấn tận tình",
        description: "Đổi vé, hành lý, nối chuyến: chúng tôi tư vấn trực tiếp tại Berlin và luôn sẵn sàng hỗ trợ.",
      },
      {
        title: "Chuyên gia Việt Nam từ 199X",
        description: "Nhiều năm kinh nghiệm với các chuyến bay đi Việt Nam và Đông Nam Á – hỗ trợ cả visa.",
      },
    ],
  },
  routes: {
    title: "Chặng bay phổ biến",
    lead: "Một số chặng bay được yêu cầu nhiều nhất. Các chặng khác và giá trong ngày xin liên hệ trực tiếp hoặc qua điện thoại.",
    pageLead:
      "Đây là những chặng bay được yêu cầu nhiều nhất từ Berlin. Giá là giá tham khảo cho vé một chiều, thay đổi theo thời điểm, hãng bay và tình trạng chỗ.",
    priceOneWay: "một chiều",
    items: [
      {
        title: "Berlin – Hà Nội",
        subtitle: "với Vietnam Airlines & Qatar Airways",
        description: "Chuyến bay trực tiếp và nối chuyến giá tốt đến thủ đô Việt Nam.",
        price: "từ 389 €",
        tag: "Việt Nam",
        highlights: ["1 điểm nối chuyến", "23 kg hành lý", "Ngày bay linh hoạt", "Hỗ trợ visa"],
      },
      {
        title: "Berlin – TP. Hồ Chí Minh",
        subtitle: "với Vietnam Airlines & Turkish Airlines",
        description: "Chặng bay được yêu thích đến Sài Gòn – có thể nối chuyến về Đồng bằng sông Cửu Long.",
        price: "từ 419 €",
        tag: "Việt Nam",
        highlights: ["Nối chuyến nhanh", "23 kg hành lý", "Giá theo nhóm", "Hỗ trợ visa"],
      },
      {
        title: "Berlin – Bangkok",
        subtitle: "với Qatar Airways & Emirates",
        description: "Các điểm đến châu Á khác như Bangkok, Singapore, Seoul hay Tokyo theo yêu cầu.",
        price: "từ 359 €",
        tag: "Châu Á",
        highlights: ["Nhiều ngày khởi hành", "Nối chuyến trong châu Á", "Có hạng Business", "Tư vấn miễn phí"],
      },
    ],
  },
  contactPreview: {
    title: "Hãy liên hệ với chúng tôi",
    lead: "Ghé thăm văn phòng tại Berlin hoặc gọi cho chúng tôi. Chúng tôi sẵn sàng báo giá vé miễn phí.",
    company: "VDT Touristik GmbH",
    phone: "Điện thoại",
    email: "Email",
    cta: "Đến mẫu liên hệ",
    hoursTitle: "Giờ mở cửa",
    monFri: "Thứ 2 – Thứ 6",
    sat: "Thứ 7",
    sun: "Chủ nhật",
    closed: "đóng cửa",
    hoursNote: "Có thể hẹn ngoài giờ mở cửa theo thỏa thuận.",
  },
  contact: {
    title: "Liên hệ",
    lead: "Ghé văn phòng của chúng tôi tại Berlin hoặc gửi tin nhắn. Chúng tôi sẽ phản hồi sớm nhất.",
    dataTitle: "Thông tin liên hệ",
    hours: "Giờ mở cửa",
    hoursWeek: "Thứ 2–Thứ 6: 9:00–17:00",
    hoursWeekend: "Thứ 7–Chủ nhật: đóng cửa",
    iataTitle: "Được IATA công nhận",
    iataText: "VDT Touristik GmbH là đại lý được IATA công nhận – bảo đảm dịch vụ vé máy bay uy tín, chuyên nghiệp.",
    formTitle: "Mẫu liên hệ",
    formLead: "Điền thông tin và chúng tôi sẽ phản hồi trong vòng một ngày làm việc.",
    name: "Họ và tên",
    namePlaceholder: "Tên của bạn",
    emailLabel: "Email",
    emailPlaceholder: "email@vidu.com",
    phoneLabel: "Điện thoại (không bắt buộc)",
    subject: "Tiêu đề",
    subjectPlaceholder: "Bạn cần chặng bay nào?",
    message: "Nội dung",
    messagePlaceholder: "Điểm đến, ngày bay và số lượng khách…",
    submit: "Gửi tin nhắn",
  },
};

const en: Dict = {
  nav: { home: "Home", flights: "Destinations", contact: "Contact" },
  brand: { tagline: "Your flight ticket specialist in Berlin – worldwide tickets, personal advice." },
  common: {
    back: "Back to home",
    perPerson: "per person, one way",
    request: "Request flight",
    allDestinations: "All destinations",
    iata: "IATA Accredited Agent",
  },
  footer: {
    contact: "Contact",
    legal: "Legal",
    imprint: "Imprint",
    privacy: "Privacy",
    hours: "Mon–Fri: 9:00–17:00",
    rights: "All rights reserved.",
  },
  hero: {
    badge: "IATA accredited agent",
    title: "Flight tickets from Berlin – worldwide",
    lead: "As an IATA agent we book your flights with Vietnam Airlines, Qatar Airways and other partner airlines – at the best rates and with personal advice.",
    ctaContact: "Get in touch",
    ctaOffers: "Explore destinations",
  },
  why: {
    title: "Why VDT Touristik?",
    lead: "We specialise in flight tickets – for years Berlin's first address for flights to Vietnam and across Asia.",
    items: [
      {
        title: "Partner airlines",
        description: "Vietnam Airlines, Qatar Airways, Turkish Airlines, Emirates and more strong partners for your route.",
      },
      {
        title: "Best rates as an IATA agent",
        description: "Direct access to airline fares and special conditions that are often not available online.",
      },
      {
        title: "Personal advice",
        description: "Rebooking, baggage, connections: we advise you in person in Berlin and stay reachable.",
      },
      {
        title: "Vietnam specialist since 199X",
        description: "Many years of experience with flights to Vietnam and Southeast Asia – visa support included.",
      },
    ],
  },
  routes: {
    title: "Popular routes",
    lead: "A selection of our most requested flight destinations. Further routes and daily fares are available in the office or by phone.",
    pageLead:
      "These are our most requested routes from Berlin. All prices are guide prices for one-way flights and vary by travel date, airline and availability.",
    priceOneWay: "one way",
    items: [
      {
        title: "Berlin – Hanoi",
        subtitle: "with Vietnam Airlines & Qatar Airways",
        description: "Direct and affordable connecting flights to Vietnam's capital.",
        price: "from €389",
        tag: "Vietnam",
        highlights: ["1 stopover", "23 kg baggage", "Flexible dates", "Visa support"],
      },
      {
        title: "Berlin – Ho Chi Minh City",
        subtitle: "with Vietnam Airlines & Turkish Airlines",
        description: "A popular route to Saigon – with onward connections to the Mekong Delta.",
        price: "from €419",
        tag: "Vietnam",
        highlights: ["Short layovers", "23 kg baggage", "Group fares", "Visa support"],
      },
      {
        title: "Berlin – Bangkok",
        subtitle: "with Qatar Airways & Emirates",
        description: "Further Asian destinations such as Bangkok, Singapore, Seoul or Tokyo on request.",
        price: "from €359",
        tag: "Asia",
        highlights: ["Many departure days", "Asia connections", "Business class available", "Advice included"],
      },
    ],
  },
  contactPreview: {
    title: "Talk to us",
    lead: "Visit us in Berlin or give us a call. We are happy to prepare a free flight quote for you.",
    company: "VDT Touristik GmbH",
    phone: "Phone",
    email: "Email",
    cta: "To the contact form",
    hoursTitle: "Opening hours",
    monFri: "Monday – Friday",
    sat: "Saturday",
    sun: "Sunday",
    closed: "closed",
    hoursNote: "Appointments outside opening hours are possible by arrangement.",
  },
  contact: {
    title: "Contact",
    lead: "Visit our office in Berlin or send us a message. We will get back to you shortly.",
    dataTitle: "Contact details",
    hours: "Opening hours",
    hoursWeek: "Mon–Fri: 9:00–17:00",
    hoursWeekend: "Sat–Sun: closed",
    iataTitle: "IATA accredited",
    iataText:
      "VDT Touristik GmbH is an IATA accredited agent – your sign of reliable and professional flight ticketing.",
    formTitle: "Contact form",
    formLead: "Fill in the form and we will reply within one working day.",
    name: "Name",
    namePlaceholder: "Your name",
    emailLabel: "Email",
    emailPlaceholder: "your@email.com",
    phoneLabel: "Phone (optional)",
    subject: "Subject",
    subjectPlaceholder: "Which route are you looking for?",
    message: "Message",
    messagePlaceholder: "Destination, travel dates and number of passengers…",
    submit: "Send message",
  },
};

const dicts: Record<Lang, Dict> = { de, vi, en };

const STORAGE_KEY = "vdt-lang";

const LanguageContext = createContext<{ lang: Lang; setLang: (l: Lang) => void; t: Dict }>({
  lang: "de",
  setLang: () => {},
  t: de,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("de");

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && stored in dicts) setLangState(stored);
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try {
      window.localStorage.setItem(STORAGE_KEY, l);
    } catch {
      /* ignore */
    }
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t: dicts[lang] }}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
