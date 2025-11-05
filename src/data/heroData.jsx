// data/heroCardData.js
import experience from "../assets/experience.jpg";
import callService from "../assets/callService.jpg";
import tourImage from "../assets/tours.png";

import { FaQuestion, FaPen, FaEye } from "react-icons/fa";
import { getNavItemById } from "../helpers/NavHelper";

const heroData = [
  {
    image: experience,
    title: "25 Yıllık Deneyim",
    description: `Seyahat sektöründe 25 yılı aşkın süredir hizmet veriyoruz. 
    Bu köklü geçmişimiz sayesinde her bir turumuzu titizlikle planlıyor, 
    misafir memnuniyetini her zaman önceliğimiz olarak görüyoruz. 
    Güvenli, konforlu ve unutulmaz bir tatil için doğru adrestesiniz.`,
    href: getNavItemById(3).href,
    icon: FaQuestion,
    buttonText: "Hakkımızda",
    buttonActive: true,
  },
  {
    image: callService,
    title: "Hızlı Destek",
    description: `Her zaman yanınızdayız! 7 gün 24 saat aktif olan müşteri destek hattımız sayesinde, 
    tur programlarımızla ilgili aklınıza takılan her soruya anında yanıt alabilirsiniz. 
    Profesyonel ekibimiz size en kısa sürede yardımcı olmaktan mutluluk duyacaktır.`,
    href: getNavItemById(5).href,
    icon: FaPen,
    buttonText: "İletişime Geçin",
    buttonActive: true,
  },
  {
    image: tourImage,
    title: "Yeni Turlarımız",
    description: `Tur yelpazemizi sürekli olarak güncelliyor, her ay yepyeni lokasyonlar ve özel fırsatlarla sizleri buluşturuyoruz. 
    Doğa tutkunlarından şehir gezginlerine kadar her gezginin hayaline hitap eden rotaları portföyümüze ekleyerek, 
    seyahat deneyiminizi unutulmaz kılmak için çalışıyoruz.`,
    href: getNavItemById(2).href,
    icon: FaEye,
    buttonText: "Turlarımızı Gör",
    buttonActive: true,
  },
];

export default heroData;
