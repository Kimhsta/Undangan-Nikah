import heroImage from "../assets/hero.jpg";
import groomImage from "../assets/image copy.png";
import brideImage from "../assets/93c7743b649278f1ea85962b5ffdcefe.jpg";
import weddingMusic from "../assets/ssstik.io_1779027738656.mp3";
import gallery1 from "../assets/galery1.jpg";
import gallery2 from "../assets/galery2.jpg";
import gallery3 from "../assets/galery3.jpg";
import gallery4 from "../assets/galery4.jpg";
import gallery5 from "../assets/galery5.jpg";
import gallery6 from "../assets/galery6.jpg";
import gallery7 from "../assets/galery7.jpg";
import gallery8 from "../assets/galery8.jpg";

export {
    heroImage,
    weddingMusic,
};

export const WEDDING_TITLE = "Mantu Gusti";
export const COUPLE_NAME = "Mahes & Nadiya";
export const WEDDING_DATE_LABEL = "Jumat, 19 April 2030";
export const WEDDING_DATE_TIME = "2030-04-19T08:00:00+07:00";
export const OPENING_GREETING = "السلام عليكم ورحمة الله وبركاته";
export const OPENING_TEXT =
    "Kanthi ngaturaken syukur dhumateng Allah Subhanahu wa Ta’ala, kula kekalih nyuwun rawuhipun Bapak/Ibu/Sedherek sedaya wonten ing adicara walimatul ‘urs kula kekalih. Rawuhipun saha donga panjenengan mugi dados kebaikan saha keberkahan saking Allah kangge kula kekalih.";

const receptionMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.0212873837963!2d110.8258514!3d-7.5727096!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a1682f643037d%3A0xe54e6067fc9b6bd5!2sKraton%20Surakarta%20Hadiningrat!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";
const akadMap =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3955.031534062831!2d110.8242!3d-7.5719!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a16825c3f911f%3A0x6b8eb6a988d89e2!2sMasjid%20Agung%20Surakarta!5e0!3m2!1sid!2sid!4v1700000000000!5m2!1sid!2sid";

export const coupleMembers = [
    {
        image: groomImage,
        alt: "Mahes",
        name: "Mahes",
        role: "Putra Kapitu",
    },
    {
        image: brideImage,
        alt: "Nadiya",
        name: "Nadiya",
        role: "Mempelai Putri",
    },
];

export const eventCards = [
    {
        borderColor: "border-keraton-gold",
        mapBorderColor: "border-keraton-gold/30",
        iconBg: "bg-keraton-maroon",
        icon: "fa-dove",
        title: "Ijab Qobul",
        subtitle: "Akad Nikah",
        accentColor: "text-keraton-gold",
        mapSrc: akadMap,
        details: [
            {
                icon: "fa-calendar-alt",
                iconColor: "text-keraton-gold",
                text: WEDDING_DATE_LABEL,
            },
            {
                icon: "fa-clock",
                iconColor: "text-keraton-gold",
                text: "08.00 - 10.00 WIB",
            },
            {
                icon: "fa-map-marker-alt",
                iconColor: "text-keraton-gold",
                text: "Masjid Agung Surakarta",
                subtext: "Jl. Masjid No.1, Kauman, Surakarta",
            },
        ],
    },
    {
        borderColor: "border-keraton-maroon",
        mapBorderColor: "border-keraton-maroon/30",
        iconBg: "bg-keraton-gold",
        icon: "fa-glass-cheers",
        title: "Pahargyan Ageng",
        subtitle: "Resepsi",
        accentColor: "text-keraton-maroon",
        mapSrc: receptionMap,
        details: [
            {
                icon: "fa-calendar-alt",
                iconColor: "text-keraton-maroon",
                text: WEDDING_DATE_LABEL,
            },
            {
                icon: "fa-map-marker-alt",
                iconColor: "text-keraton-maroon",
                text: "Sasana Handrawina",
                subtext: "Kraton Surakarta Hadiningrat",
            },
        ],
    },
];

export const galleryImages = [
    { src: gallery1, alt: "Gallery 1" },
    { src: gallery2, alt: "Gallery 2" },
    { src: gallery3, alt: "Gallery 3" },
    { src: gallery4, alt: "Gallery 4" },
    { src: gallery5, alt: "Gallery 5" },
    { src: gallery6, alt: "Gallery 6" },
    { src: gallery7, alt: "Gallery 7" },
    { src: gallery8, alt: "Gallery 8" },
];

export const giftAccount = {
    bank: "Mandiri",
    number: "1370 0024 8961 3",
    name: "Wong Mumet",
    qrisTitle: "QRIS Wong Mumet",
    qrisName: "Wong Mumet",
};
