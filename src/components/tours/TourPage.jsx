import React from "react";
import { useParams } from "react-router-dom";
import tours from "../../data/tourList";
import { ShowCurrency } from "../../helpers/Currency";
import {
  FaCalendar,
  FaExclamationTriangle,
  FaHome,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaShoppingCart,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import PulsingButton from "../others/PulsingButton";
import Alert from "../others/Alert";
import TourCard from "./TourCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

export default function TourPage() {
  const { slug } = useParams();
  const tour = tours.find((tour) => tour.slug === slug);
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  if (!tour) {
    return (
      <div className="flex items-center justify-center bg-slate-200 min-h-[80vh] errorPage">
        <div className="text-center flex flex-col gap-2 justify-center items-center p-8 rounded-xl bg-slate-100 notPage">
          <h1 className="text-4xl font-bold errorText flex items-center justify-center gap-3">
            <FaExclamationTriangle /> {t.notFound}
          </h1>
          <h1 className="text-lg font-bold errorText mb-4">{t.tourNotFound}</h1>
          <PulsingButton icon={<FaHome />} href="/" text={t.goHome} />
        </div>
      </div>
    );
  }

  const tourSimilar = tours.filter(
    (t) => t.destination === tour.destination && t.slug !== tour.slug
  );

  return (
    <div className="">
      <div className="flex flex-col md:flex-row gap-4 my-4 min-h-0">
        <div className="left flex-1 max-w-full md:max-w-[50%]">
          {Array.isArray(tour.imageList) && tour.imageList.length > 0 ? (
            <div className="aspect-[16/9] w-full rounded-xl overflow-hidden">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={10}
                slidesPerView={1}
                className="w-full h-full"
              >
                {tour.imageList.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`Tour Image ${index + 1}`}
                      className="object-cover w-full h-full"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          ) : (
            <img
              src={tour.image}
              className="object-cover w-full rounded-xl aspect-[16/9]"
              alt={tour.name}
            />
          )}
        </div>

        <div className="right flex-1 flex flex-col gap-2 bg-slate-100 aboutSection rounded-xl text-slate-700 p-10">
          <h1 className="text-black text-4xl font-bold title">{tour.name}</h1>
          <p className="text-sm text-red-400 flex items-center gap-2">
            <FaMapMarkerAlt /> {tour.destination}
          </p>
          <span className="text-xl tourPageText">{tour.desc}</span>
          <p className="italic text-lg tourPageText">{tour.shortDesc}</p>
          <div className="flex justify-between">
            <span className="text-lg tourPageText">
              {ShowCurrency(tour.priceType, tour.price)}
            </span>
            <span className="flex items-center gap-2 tourPageText">
              <FaCalendar /> {tour.date}
            </span>
          </div>
          <span className="flex gap-4 items-center rounded-full border-2 border-slate-300 phoneNum transition-all hover:bg-slate-600 text-black hover:text-white">
            <span className="phoneNumLogo flex items-center justify-center p-2 rounded-full text-white bg-slate-700 w-12 text-xl h-12 callPhone">
              <FaPhoneAlt />
            </span>
            <span className="title text-xl">{tour.phoneNum}</span>
          </span>

          <div className="flex gap-2 items-center mt-4">
            <span className="bg-green-500 flex flex-1 items-center py-4 gap-3 h-16 text-slate-100 pr-4 cursor-pointer hover:bg-green-600 transition-all">
              <span className="bg-green-600 h-16 flex items-center justify-center w-12 text-white">
                <FaShoppingCart />
              </span>{" "}
              Ödemeyi Gerçekleştir
            </span>

            <a
              href={`tel:${tour.phoneNum.replace(/\s+/g, "")}`}
              className="bg-blue-500 flex flex-1 items-center py-4 gap-3 h-16 text-slate-100 pr-4 cursor-pointer hover:bg-blue-600 transition-all"
            >
              <span className="bg-blue-600 h-16 flex items-center justify-center w-12 text-white">
                <FaPhoneAlt />
              </span>{" "}
              Numarayı Ara
            </a>
          </div>
        </div>
      </div>

      <div className="my-6">
        <h1 className="text-3xl mb-2 font-bold justify-center flex py-4 title">
          {t.similarTours}
        </h1>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-4 homeTours w-full">
          {tourSimilar.length > 0 ? (
            tourSimilar.map((tour) => <TourCard key={tour.slug} tour={tour} />)
          ) : (
            <Alert type="info" content={t.noSimilarTours} />
          )}
        </div>
      </div>
    </div>
  );
}
