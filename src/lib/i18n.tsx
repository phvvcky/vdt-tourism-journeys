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
    request: "Anfragen",
    allDestinations: "Alle Flugziele",
    iata: "IATA Accredited Agent",
    whatsapp: "WhatsApp",
    call: "Anrufen",
    topRoute: "Top-Strecke",
    airlines: "Airlines",
    nonstop: "Nonstop",
    via: "über",
    layover: "Umsteigezeit",
    from: "ab",
    oneWay: "einfach",
    hourShort: "h",
    minuteShort: "min",
    copyPhone: "Nummer kopieren",
    phoneCopied: "Kopiert!",
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
        description:
          "Direkter Zugang zu Airline-Tarifen und Sonderkonditionen, die online oft nicht verfügbar sind.",
      },
      {
        title: "Persönliche Beratung",
        description:
          "Umbuchungen, Gepäck, Anschlüsse: Wir beraten Sie vor Ort in Berlin und bleiben erreichbar.",
      },
      {
        title: "Vietnam-Spezialist seit 199X",
        description:
          "Langjährige Erfahrung mit Flügen nach Vietnam und Südostasien – inklusive Visa-Hilfe.",
      },
    ],
  },
  routes: {
    title: "Beliebte Strecken",
    lead: "Unsere gefragtesten Verbindungen ab Berlin. Preise sind Richtpreise für einen einfachen Flug – Tagespreise erhalten Sie persönlich oder per WhatsApp.",
    pageLead:
      "Hier finden Sie unsere gefragtesten Flugstrecken ab Berlin. Alle Preise sind Richtpreise für einfache Flüge und variieren je nach Reisezeit, Airline und Verfügbarkeit.",
    cities: {
      hanoi: "Hanoi",
      saigon: "Ho-Chi-Minh-Stadt",
      danang: "Da Nang",
      nhatrang: "Nha Trang",
      phuquoc: "Phu Quoc",
      hue: "Hue",
      bangkok: "Bangkok",
      singapore: "Singapur",
      kualalumpur: "Kuala Lumpur",
      phnompenh: "Phnom Penh",
      bali: "Bali",
      seoul: "Seoul",
      tokyo: "Tokio",
      manila: "Manila",
      dubai: "Dubai",
    } as Record<string, string>,
    teasers: {
      hanoi: "Altstadt, Halong-Bucht und Straßenküche im Norden Vietnams.",
      saigon: "Pulsierende Millionenmetropole im Süden Vietnams.",
      danang: "Traumstrände und Marmorberge an der Zentralküste.",
      nhatrang: "Türkisblaues Wasser und die längste Seilbahn Vietnams.",
      phuquoc: "Vietnams Inselparadies mit Sonnenuntergängen am Meer.",
      hue: "Kaiserstadt mit Zitadelle und Grabmälern am Parfümfluss.",
      bangkok: "Tempel, Streetfood und Großstadtflair in Thailand.",
      singapore: "Gardens by the Bay und moderne Skyline in einem.",
      kualalumpur: "Petronas Towers und Vielfalt zwischen Ost und West.",
      phnompenh: "Königspalast und bewegte Geschichte in Kambodscha.",
      bali: "Reisterrassen, Tempel und Traumstrände in Indonesien.",
      seoul: "K-Pop, Paläste und Streetfood in Südkorea.",
      tokyo: "Tradition trifft Zukunft in Japans Hauptstadt.",
      manila: "Tor zu den Philippinen mit über 7.000 Inseln.",
      dubai: "Luxus, Wüste und Wolkenkratzer in den Emiraten.",
    } as Record<string, string>,
  },
  map: {
    title: "Unsere Strecken auf der Karte",
    lead: "Wählen Sie Ihren Abflughafen. Fahren Sie mit der Maus über eine Linie, um Airline, Umsteigezeit und Richtpreis zu sehen.",
    departure: "Abflughafen",
    destination: "Zielflughafen",
    chooseDestination: "Ziel wählen",
    cta: "Strecke anfragen",
    note: "Kein Live-Preisvergleich – wir prüfen Ihre Wunschtermine persönlich und melden uns mit dem besten Tarif.",
  },
  destinationCards: {
    title: "Reiseziele entdecken",
    lead: "Zum Durchswipen: unsere beliebtesten Ziele ab Berlin.",
  },
  stats: {
    years: "Jahre Erfahrung",
    destinations: "Reiseziele",
    airports: "Abflughäfen",
    airlines: "Partner-Airlines",
  },
  testimonials: {
    title: "Google-Bewertungen",
    lead: "Ausgewählte Stimmen zufriedener Kundinnen und Kunden. (Platzhalterinhalte – werden durch echte Google-Bewertungen ersetzt)",
    ratingSummary: "4,8 von 5",
    ratingCount: "128 Bewertungen auf Google",
    filterNote: "Gefiltert: nur 4- und 5-Sterne-Bewertungen",
    items: [
      {
        quote:
          "Platzhalter: Hier steht später eine echte Kundenstimme über die persönliche Beratung und den schnellen Ticketkauf.",
        name: "M. Nguyen",
        meta: "Berlin – Hanoi",
        rating: 5,
      },
      {
        quote:
          "Platzhalter: Hier steht später eine echte Kundenstimme über Umbuchung und Gepäckfragen kurz vor dem Abflug.",
        name: "T. Pham",
        meta: "Berlin – Ho-Chi-Minh-Stadt",
        rating: 5,
      },
      {
        quote:
          "Platzhalter: Hier steht später eine echte Kundenstimme über Familientarife und Gruppenbuchungen.",
        name: "S. Weber",
        meta: "Berlin – Bangkok",
        rating: 4,
      },
      {
        quote:
          "Platzhalter: Hier steht später eine echte Kundenstimme über die Hilfe beim Vietnam E-Visa.",
        name: "L. Tran",
        meta: "Berlin – Da Nang",
        rating: 5,
      },
    ],
  },
  faq: {
    title: "Häufige Fragen",
    lead: "Gepäck, Visa, Umbuchung – die wichtigsten Antworten vor Ihrer Buchung.",
    items: [
      {
        q: "Wie viel Gepäck ist inklusive?",
        a: "Auf Langstrecken nach Asien sind in der Economy Class in der Regel 23 kg Freigepäck plus Handgepäck enthalten. Bei Vietnam Airlines sind je nach Tarif auch 2 × 23 kg möglich. Wir prüfen den Tarif vor der Buchung und können Zusatzgepäck direkt mitbuchen.",
      },
      {
        q: "Brauche ich ein Visum für Vietnam?",
        a: "Für die meisten Reisenden ist ein Vietnam E-Visa nötig (bis 90 Tage, ein- oder mehrfache Einreise). Wir sagen Ihnen, welche Unterlagen Sie brauchen, und unterstützen beim Antrag. Deutsche Staatsangehörige benötigen zusätzlich einen mindestens sechs Monate gültigen Reisepass.",
      },
      {
        q: "Kann ich meinen Flug umbuchen oder stornieren?",
        a: "Das hängt vom gebuchten Tarif ab. Wir sagen Ihnen vor der Buchung, welche Gebühren bei Umbuchung oder Storno anfallen, und übernehmen die Änderung im Ernstfall direkt bei der Airline – ohne Warteschleife.",
      },
      {
        q: "Warum im Reisebüro buchen statt online?",
        a: "Als IATA akkreditierter Agent haben wir Zugang zu Airline-Tarifen und Sonderkonditionen, die online oft nicht sichtbar sind. Bei Flugausfall, Umbuchung oder Gepäckproblemen haben Sie einen Ansprechpartner in Berlin – auf Deutsch und Vietnamesisch.",
      },
    ],
  },
  contactPreview: {
    title: "Sprechen Sie uns an",
    lead: "Besuchen Sie uns in Berlin, rufen Sie an oder schreiben Sie uns per WhatsApp. Wir erstellen Ihnen gerne ein unverbindliches Flugangebot.",
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
  company: {
    bankTitle: "Bankverbindung",
    bank: "Bank",
    ceo: "Geschäftsführer",
    taxNo: "Steuer-Nr.",
    register: "Handelsregister",
    seat: "Sitz der Gesellschaft und Gerichtsstand Berlin",
    partnerTitle: "Unsere Partner & Akkreditierungen",
    partnerLead:
      "Autorisierte Vietnam Airlines Agentur in Deutschland und IATA akkreditierter Agent.",
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
    whatsapp: "WhatsApp",
    call: "Gọi ngay",
    topRoute: "Chặng nổi bật",
    airlines: "Hãng bay",
    nonstop: "Bay thẳng",
    via: "quá cảnh",
    layover: "Thời gian nối chuyến",
    from: "từ",
    oneWay: "một chiều",
    hourShort: "g",
    minuteShort: "ph",
    copyPhone: "Sao chép số",
    phoneCopied: "Đã sao chép!",
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
        description:
          "Truy cập trực tiếp giá vé và ưu đãi đặc biệt của hãng, thường không có trên mạng.",
      },
      {
        title: "Tư vấn tận tình",
        description:
          "Đổi vé, hành lý, nối chuyến: chúng tôi tư vấn trực tiếp tại Berlin và luôn sẵn sàng hỗ trợ.",
      },
      {
        title: "Chuyên gia Việt Nam từ 199X",
        description:
          "Nhiều năm kinh nghiệm với các chuyến bay đi Việt Nam và Đông Nam Á – hỗ trợ cả visa.",
      },
    ],
  },
  routes: {
    title: "Chặng bay phổ biến",
    lead: "Những chặng bay được yêu cầu nhiều nhất từ Berlin. Giá là giá tham khảo cho vé một chiều – giá trong ngày xin liên hệ trực tiếp hoặc qua WhatsApp.",
    pageLead:
      "Đây là những chặng bay được yêu cầu nhiều nhất từ Berlin. Giá là giá tham khảo cho vé một chiều, thay đổi theo thời điểm, hãng bay và tình trạng chỗ.",
    cities: {
      hanoi: "Hà Nội",
      saigon: "TP. Hồ Chí Minh",
      danang: "Đà Nẵng",
      nhatrang: "Nha Trang",
      phuquoc: "Phú Quốc",
      hue: "Huế",
      bangkok: "Bangkok",
      singapore: "Singapore",
      kualalumpur: "Kuala Lumpur",
      phnompenh: "Phnom Penh",
      bali: "Bali",
      seoul: "Seoul",
      tokyo: "Tokyo",
      manila: "Manila",
      dubai: "Dubai",
    } as Record<string, string>,
    teasers: {
      hanoi: "Phố cổ, vịnh Hạ Long và ẩm thực đường phố miền Bắc.",
      saigon: "Đô thị sôi động bậc nhất miền Nam Việt Nam.",
      danang: "Bãi biển tuyệt đẹp và Ngũ Hành Sơn ở miền Trung.",
      nhatrang: "Biển xanh ngọc và tuyến cáp treo dài nhất Việt Nam.",
      phuquoc: "Đảo ngọc với hoàng hôn tuyệt đẹp trên biển.",
      hue: "Cố đô với Đại Nội và lăng tẩm bên sông Hương.",
      bangkok: "Đền chùa, ẩm thực đường phố và nhịp sống đô thị Thái Lan.",
      singapore: "Gardens by the Bay và đường chân trời hiện đại.",
      kualalumpur: "Tháp đôi Petronas và sự giao thoa Đông – Tây.",
      phnompenh: "Hoàng cung và lịch sử đầy biến động của Campuchia.",
      bali: "Ruộng bậc thang, đền thờ và bãi biển tuyệt đẹp ở Indonesia.",
      seoul: "K-Pop, cung điện và ẩm thực đường phố Hàn Quốc.",
      tokyo: "Truyền thống gặp gỡ tương lai tại thủ đô Nhật Bản.",
      manila: "Cửa ngõ đến hơn 7.000 hòn đảo của Philippines.",
      dubai: "Sang trọng, sa mạc và những tòa tháp chọc trời.",
    } as Record<string, string>,
  },
  map: {
    title: "Các chặng bay trên bản đồ",
    lead: "Chọn sân bay khởi hành của bạn. Đưa chuột lên đường bay để xem hãng bay, thời gian nối chuyến và giá tham khảo.",
    departure: "Sân bay khởi hành",
    destination: "Sân bay đến",
    chooseDestination: "Chọn điểm đến",
    cta: "Gửi yêu cầu chặng bay",
    note: "Không so sánh giá trực tuyến – chúng tôi kiểm tra ngày bay bạn muốn và báo lại mức giá tốt nhất.",
  },
  destinationCards: {
    title: "Khám phá điểm đến",
    lead: "Vuốt để xem: những điểm đến được yêu thích nhất từ Berlin.",
  },
  stats: {
    years: "năm kinh nghiệm",
    destinations: "điểm đến",
    airports: "sân bay khởi hành",
    airlines: "hãng bay đối tác",
  },
  testimonials: {
    title: "Đánh giá trên Google",
    lead: "Một số cảm nhận nổi bật từ khách hàng. (Nội dung mẫu – sẽ thay bằng đánh giá Google thật)",
    ratingSummary: "4,8/5",
    ratingCount: "128 đánh giá trên Google",
    filterNote: "Đã lọc: chỉ hiển thị đánh giá 4–5 sao",
    items: [
      {
        quote:
          "Nội dung mẫu: sau này sẽ là nhận xét thật của khách về tư vấn tận tình và mua vé nhanh chóng.",
        name: "M. Nguyên",
        meta: "Berlin – Hà Nội",
        rating: 5,
      },
      {
        quote:
          "Nội dung mẫu: sau này sẽ là nhận xét thật của khách về đổi vé và hành lý trước chuyến bay.",
        name: "T. Phạm",
        meta: "Berlin – TP. Hồ Chí Minh",
        rating: 5,
      },
      {
        quote:
          "Nội dung mẫu: sau này sẽ là nhận xét thật của khách về giá vé gia đình và đặt vé theo nhóm.",
        name: "S. Weber",
        meta: "Berlin – Bangkok",
        rating: 4,
      },
      {
        quote: "Nội dung mẫu: sau này sẽ là nhận xét thật của khách về hỗ trợ xin E-Visa Việt Nam.",
        name: "L. Trần",
        meta: "Berlin – Đà Nẵng",
        rating: 5,
      },
    ],
  },
  faq: {
    title: "Câu hỏi thường gặp",
    lead: "Hành lý, visa, đổi vé – những thông tin quan trọng trước khi đặt vé.",
    items: [
      {
        q: "Được mang bao nhiêu hành lý?",
        a: "Các chuyến bay đường dài đi châu Á hạng phổ thông thường bao gồm 23 kg hành lý ký gửi và hành lý xách tay. Với Vietnam Airlines, tuỳ loại vé có thể là 2 × 23 kg. Chúng tôi kiểm tra điều kiện vé trước khi đặt và có thể mua thêm hành lý ngay.",
      },
      {
        q: "Tôi có cần visa vào Việt Nam?",
        a: "Phần lớn khách cần E-Visa Việt Nam (tối đa 90 ngày, một hoặc nhiều lần nhập cảnh). Chúng tôi cho bạn biết cần giấy tờ gì và hỗ trợ làm đơn. Hộ chiếu cần còn hạn ít nhất sáu tháng.",
      },
      {
        q: "Có thể đổi hoặc hủy vé không?",
        a: "Tuỳ vào loại vé đã đặt. Trước khi đặt, chúng tôi thông báo rõ phí đổi và phí hủy, và khi cần sẽ làm việc trực tiếp với hãng bay thay bạn – không phải chờ tổng đài.",
      },
      {
        q: "Vì sao nên đặt qua đại lý thay vì đặt online?",
        a: "Là đại lý được IATA công nhận, chúng tôi có giá vé và ưu đãi của hãng mà trên mạng thường không thấy. Khi hoãn chuyến, đổi vé hay thất lạc hành lý, bạn luôn có người phụ trách tại Berlin – bằng tiếng Đức và tiếng Việt.",
      },
    ],
  },
  contactPreview: {
    title: "Hãy liên hệ với chúng tôi",
    lead: "Ghé thăm văn phòng tại Berlin, gọi điện hoặc nhắn WhatsApp. Chúng tôi sẵn sàng báo giá vé miễn phí.",
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
    iataText:
      "VDT Touristik GmbH là đại lý được IATA công nhận – bảo đảm dịch vụ vé máy bay uy tín, chuyên nghiệp.",
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
  company: {
    bankTitle: "Thông tin ngân hàng",
    bank: "Ngân hàng",
    ceo: "Giám đốc",
    taxNo: "Mã số thuế",
    register: "Đăng ký doanh nghiệp",
    seat: "Trụ sở và địa điểm pháp lý: Berlin",
    partnerTitle: "Đối tác & chứng nhận",
    partnerLead: "Đại lý Vietnam Airlines được uỷ quyền tại Đức và đại lý được IATA công nhận.",
  },
};

const en: Dict = {
  nav: { home: "Home", flights: "Destinations", contact: "Contact" },
  brand: {
    tagline: "Your flight ticket specialist in Berlin – worldwide tickets, personal advice.",
  },
  common: {
    back: "Back to home",
    perPerson: "per person, one way",
    request: "Request",
    allDestinations: "All destinations",
    iata: "IATA Accredited Agent",
    whatsapp: "WhatsApp",
    call: "Call us",
    topRoute: "Top route",
    airlines: "Airlines",
    nonstop: "Nonstop",
    via: "via",
    layover: "Layover",
    from: "from",
    oneWay: "one way",
    hourShort: "h",
    minuteShort: "min",
    copyPhone: "Copy number",
    phoneCopied: "Copied!",
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
        description:
          "Vietnam Airlines, Qatar Airways, Turkish Airlines, Emirates and more strong partners for your route.",
      },
      {
        title: "Best rates as an IATA agent",
        description:
          "Direct access to airline fares and special conditions that are often not available online.",
      },
      {
        title: "Personal advice",
        description:
          "Rebooking, baggage, connections: we advise you in person in Berlin and stay reachable.",
      },
      {
        title: "Vietnam specialist since 199X",
        description:
          "Many years of experience with flights to Vietnam and Southeast Asia – visa support included.",
      },
    ],
  },
  routes: {
    title: "Popular routes",
    lead: "Our most requested connections from Berlin. Prices are guide prices for a one-way flight – ask us for today's fare in person or via WhatsApp.",
    pageLead:
      "These are our most requested routes from Berlin. All prices are guide prices for one-way flights and vary by travel date, airline and availability.",
    cities: {
      hanoi: "Hanoi",
      saigon: "Ho Chi Minh City",
      danang: "Da Nang",
      nhatrang: "Nha Trang",
      phuquoc: "Phu Quoc",
      hue: "Hue",
      bangkok: "Bangkok",
      singapore: "Singapore",
      kualalumpur: "Kuala Lumpur",
      phnompenh: "Phnom Penh",
      bali: "Bali",
      seoul: "Seoul",
      tokyo: "Tokyo",
      manila: "Manila",
      dubai: "Dubai",
    } as Record<string, string>,
    teasers: {
      hanoi: "Old Quarter, Halong Bay and street food in northern Vietnam.",
      saigon: "Vietnam's buzzing southern megacity.",
      danang: "Dream beaches and the Marble Mountains on the central coast.",
      nhatrang: "Turquoise water and Vietnam's longest cable car.",
      phuquoc: "Vietnam's island paradise with sunsets over the sea.",
      hue: "Imperial city with citadel and royal tombs on the Perfume River.",
      bangkok: "Temples, street food and big-city energy in Thailand.",
      singapore: "Gardens by the Bay and a modern skyline in one city.",
      kualalumpur: "Petronas Towers and a mix of East and West.",
      phnompenh: "Royal palace and eventful history in Cambodia.",
      bali: "Rice terraces, temples and dream beaches in Indonesia.",
      seoul: "K-pop, palaces and street food in South Korea.",
      tokyo: "Tradition meets the future in Japan's capital.",
      manila: "Gateway to over 7,000 islands in the Philippines.",
      dubai: "Luxury, desert and skyscrapers in the Emirates.",
    } as Record<string, string>,
  },
  map: {
    title: "Our routes on the map",
    lead: "Choose your departure airport. Hover a line to see airline, layover and guide price.",
    departure: "Departure airport",
    destination: "Destination airport",
    chooseDestination: "Choose destination",
    cta: "Request this route",
    note: "No live price comparison – we check your preferred dates personally and come back with the best fare.",
  },
  destinationCards: {
    title: "Discover destinations",
    lead: "Swipe through our most popular destinations from Berlin.",
  },
  stats: {
    years: "Years of experience",
    destinations: "Destinations",
    airports: "Departure airports",
    airlines: "Partner airlines",
  },
  testimonials: {
    title: "Google reviews",
    lead: "A selection of feedback from happy customers. (Placeholder content – will be replaced with real Google reviews)",
    ratingSummary: "4.8 out of 5",
    ratingCount: "128 reviews on Google",
    filterNote: "Filtered: showing 4- and 5-star reviews only",
    items: [
      {
        quote:
          "Placeholder: a real customer quote about personal advice and fast ticketing will go here.",
        name: "M. Nguyen",
        meta: "Berlin – Hanoi",
        rating: 5,
      },
      {
        quote:
          "Placeholder: a real customer quote about rebooking and baggage questions before departure.",
        name: "T. Pham",
        meta: "Berlin – Ho Chi Minh City",
        rating: 5,
      },
      {
        quote: "Placeholder: a real customer quote about family fares and group bookings.",
        name: "S. Weber",
        meta: "Berlin – Bangkok",
        rating: 4,
      },
      {
        quote: "Placeholder: a real customer quote about help with the Vietnam e-visa.",
        name: "L. Tran",
        meta: "Berlin – Da Nang",
        rating: 5,
      },
    ],
  },
  faq: {
    title: "Frequently asked questions",
    lead: "Baggage, visa, rebooking – the key answers before you book.",
    items: [
      {
        q: "How much baggage is included?",
        a: "On long-haul flights to Asia, economy fares usually include 23 kg checked baggage plus hand luggage. With Vietnam Airlines, 2 × 23 kg is possible depending on the fare. We check the fare rules before booking and can add extra baggage right away.",
      },
      {
        q: "Do I need a visa for Vietnam?",
        a: "Most travellers need a Vietnam e-visa (up to 90 days, single or multiple entry). We tell you which documents are required and help with the application. Your passport should be valid for at least six more months.",
      },
      {
        q: "Can I rebook or cancel my flight?",
        a: "That depends on the fare booked. Before booking we tell you the rebooking and cancellation fees, and if needed we handle the change directly with the airline – no call-centre queues.",
      },
      {
        q: "Why book with a travel agency instead of online?",
        a: "As an IATA accredited agent we have access to airline fares and special conditions that are often invisible online. If a flight is cancelled or baggage goes missing, you have a contact person in Berlin – in German and Vietnamese.",
      },
    ],
  },
  contactPreview: {
    title: "Talk to us",
    lead: "Visit us in Berlin, call us or send a WhatsApp message. We are happy to prepare a free flight quote for you.",
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
  company: {
    bankTitle: "Bank details",
    bank: "Bank",
    ceo: "Managing Director",
    taxNo: "Tax no.",
    register: "Commercial register",
    seat: "Registered office and place of jurisdiction: Berlin",
    partnerTitle: "Our partners & accreditations",
    partnerLead: "Authorised Vietnam Airlines agency in Germany and IATA accredited agent.",
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
    <LanguageContext.Provider value={{ lang, setLang, t: dicts[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
