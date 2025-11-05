import {
  FaDollarSign,
  FaShieldAlt,
  FaTachometerAlt,
  FaUser,
} from "react-icons/fa";

const whyUsData = [
  {
    title: "Hızlı ve Kaliteli Hizmet",
    desc: "Hizmetlerimizde hız ve kaliteyi her zaman ön planda tutuyoruz.",
    icon: <FaTachometerAlt />,
    href: "",
    active: 1,
  },
  {
    title: "Güvenilir ve Garantili Hizmet",
    desc: "Müşterilerimize güvenli ve emniyetli hizmet sunmak önceliğimizdir.",
    icon: <FaShieldAlt />,
    href: "",
    active: 1,
  },
  {
    title: "Tur Rehberi Deneyimi",
    desc: "Deneyimli tur rehberlerimizle en iyi gezileri sizlere sunuyoruz.",
    icon: <FaUser />,
    href: "",
    active: 1,
  },
  {
    title: "Ekonomik Fırsatlar",
    desc: "Herkese uygun fiyatlarla kaliteli tatiller sunuyoruz.",
    icon: <FaDollarSign />,
    href: "",
    active: 1,
  },
];

export default whyUsData;
