import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import testimonials from "../../data/testimonials";
import translations from "../../languages/translations";
import { useSelector } from "react-redux";

export default function TestimonialSlider() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];
  return (
    <>
      <h1 className="text-3xl mb-2 mt-6 font-bold justify-center flex py-4 title">
        {t.testimonial}
      </h1>
      <Swiper
        className="mb-5"
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-slate-100 testimonial shadow-lg rounded-lg p-6 text-center">
              <img
                src={item.photo}
                alt={item.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="font-bold text-lg testimonialName">{item.name}</h3>
              <p className="text-sm text-gray-500 testimonialRole">
                {item.role}
              </p>
              <p className="mt-3 text-gray-700 text-sm testimonialText">
                "{item.text}"
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
