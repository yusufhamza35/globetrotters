import React, { useEffect } from "react";
import socials from "../../data/socialMedia";
import { FaMapMarkerAlt } from "react-icons/fa";
import translations from "../../languages/translations";
import { useSelector } from "react-redux";
import ceo from "../../assets/ceo.png";
import AOS from "aos";
import "aos/dist/aos.css";

export default function About() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <div className="my-4">
      <div data-aos="fade-right" className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 md:px-16 aboutSection bg-slate-100">
          <h1 className="text-4xl font-bold mb-4 aboutTitle">{t.aboutTitle}</h1>
          <span className="text-gray-700 text-center md:text-left aboutText whitespace-pre-line">
            Biz, Globetrotters, 1995 yılında hayalini kuran birkaç gezginin bir
            araya gelerek başlattığı bir yolculuğun sonucuyuz. O zamanlar küçük
            bir ofiste, sadece birkaç çalışanla başladık ama zamanla büyüdük.
            Seyahati bir eğlence değil, kültürleri keşfetme, dünyayı anlama
            fırsatı olarak görüyorduk. Her birimiz, farklı yerleri görmek,
            insanlarla tanışmak ve hikayelerimizi paylaşmak istedik. Başlangıçta
            sunduğumuz turlar sınırlıydı. Avrupa ve Asya'nın bilinen
            destinasyonlarına geziler düzenliyorduk. Ama biz her zaman yenilikçi
            olmaya, farklı yerler keşfetmeye odaklandık. Yavaşça dünyanın her
            köşesini keşfe çıktık, tropik adalardan dağ köylerine, gizli kalmış
            güzelliklerden tarihi kalelere kadar pek çok yer sunduk
            misafirlerimize. Müşterilerimizin memnuniyeti her zaman bizim için
            en önemli şeydi. Seyahat etmek, sadece bir tatil değil, aynı zamanda
            unutulmaz bir deneyim olmalıydı. Bu yüzden her turumuzda
            misafirlerimizin rahatını ve güvenliğini ön planda tuttuk. Ayrıca,
            rehberlerimiz, sadece bölgenin tarihini anlatmakla kalmayıp,
            gezginlerimize her konuda rehberlik etti. 2000'lerin başında dijital
            dünyanın yükselmesiyle, çevrimiçi rezervasyon sistemini kurduk. Bu
            adım, bizi daha fazla kişiye ulaştırdı ve küresel bir marka olma
            yolunda önemli bir dönüm noktasıydı. Bugün, her yıl binlerce gezgini
            dünyanın dört bir yanına götürüyoruz. Bizim için seyahat, sadece bir
            iş değil; bir yaşam tarzı. Globetrotters olarak, herkesin dünyayı
            keşfetmesi için varız ve bu yolculuğa devam ediyoruz.
          </span>
        </div>

        <div className="w-full md:w-[450px] md:ml-8 p-4">
          <div className="mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48151.726903102215!2d28.908373055589543!3d41.036567056905085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabafc0a9b81af%3A0xcc055e85c3c2a845!2zWcSxbGTEsXogVGVrbmlrIMOcbml2ZXJzaXRlc2kgLSBEYXZ1dHBhxZ9hIEthbXDDvHPDvA!5e0!3m2!1str!2str!4v1760821497311!5m2!1str!2str"
              style={{ border: 0, height: "200px", width: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Globetrotters Location"
            />
          </div>

          <div className="flex gap-4 mb-6 flex-col-reverse md:flex-row justify-center items-center md:items-start">
            <div className="flex-1 flex justify-center items-center flex-col md:items-start">
              <h2 className="text-2xl font-bold flex items-center gap-3 mb-2 aboutTitle">
                {t.aboutSocial}
              </h2>
              <ul className="flex gap-4 text-3xl text-black justify-center md:justify-start">
                {socials
                  .filter((social) => social.active === 1)
                  .map((social) => (
                    <li key={social.name}>
                      <a
                        href={social.href || "#"}
                        className="hover:text-gray-700 transition aboutSocial"
                        aria-label={social.name}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </li>
                  ))}
              </ul>
            </div>

            <div className="flex-1 flex justify-center items-center flex-col md:items-start">
              <h2 className="text-2xl font-bold flex items-center gap-2 mb-2 aboutTitle">
                <FaMapMarkerAlt /> {t.aboutAddress}
              </h2>
              <p className="text-center md:text-left aboutText">
                Çifte Havuzlar, YTÜ-Davutpaşa Kampüsü, 34220 Esenler/İstanbul
              </p>
            </div>
          </div>
        </div>
      </div>

      <div data-aos="fade-left" className="flex flex-col-reverse lg:flex-row-reverse items-center justify-center mt-12">
        <div className="flex flex-col items-center justify-center flex-1 px-4 py-8 md:px-16 bg-slate-100 aboutSection">
          <h1 className="text-4xl font-bold mb-4 aboutTitle">
            John Doe ({t.aboutFounder})
          </h1>
          <span className="text-gray-700 text-center md:text-left aboutText whitespace-pre-line">
            Ben John Doe. Globetrotters’ın kuruluşundan bu yana, bu tutkulu
            yolculuğun bir parçası olmaktan büyük gurur duyuyorum. 1995 yılında,
            birkaç gezginin hayalleri doğrultusunda başlayan bu serüven, benim
            için sadece bir kariyer değil; aynı zamanda dünyayı keşfetme arzusu
            ve kültürlere duyulan saygının ifadesi oldu. Şirketimiz küçük bir
            ofiste, sınırlı bir ekiple yola çıktı. O günlerden bu yana, seyahati
            sadece eğlence olarak görmeyip, her turun bir keşif, bir öğrenme
            fırsatı olduğunu savunduk. Bu vizyonla, Globetrotters’ı her geçen
            gün büyüttük, hizmet yelpazemizi genişlettik ve dünyanın dört bir
            yanına açıldık. Müşteri memnuniyetini her zaman en öncelikli
            değerimiz olarak benimsedik. Onların rahatlığı ve güvenliği için
            titizlikle çalıştık, rehberlerimizle sadece tarihi anlatmakla
            kalmayıp, gezginlerimizin her an yanında olduk. 2000’li yıllarda
            dijitalleşmenin sunduğu imkanları hızlıca benimseyerek, çevrimiçi
            rezervasyon sistemimizi kurduk ve küresel ölçekte bir marka olma
            yolunda önemli adımlar attık. Bugün, binlerce gezginin hayatına
            dokunmak ve onlara unutulmaz deneyimler yaşatmak bizim en büyük
            mutluluğumuz. Globetrotters’ın bu hikayesinin bir parçası olmak,
            bana her gün dünyayı yeniden keşfetme heyecanı veriyor. Çünkü
            seyahat bizim için sadece bir iş değil, bir yaşam biçimi.
          </span>
        </div>

        <div className="w-full md:w-[450px] md:ml-8 p-4 flex justify-center items-center">
          <img
            src={ceo}
            alt="John Doe - CEO"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
