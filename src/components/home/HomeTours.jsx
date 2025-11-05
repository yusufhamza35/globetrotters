import React from "react";
import TourCard from "../tours/TourCard";
import tours from "../../data/tourList";
import translations from "../../languages/translations";
import { useSelector } from "react-redux";

export default function HomeTours() {
  const getRandomItems = (array, count) => {
    const shuffled = [...array].sort(() => 0.5 - Math.random());
    return shuffled.slice(0, count);
  };

  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  return (
    <div>
      <h1 className="text-3xl mb-2 font-bold justify-center flex py-4 title">
        {t.randomTours}
      </h1>
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-4  homeTours">
        {getRandomItems(tours, 5).map((tour) => (
          <TourCard key={tour.slug} tour={tour} />
        ))}
      </div>
    </div>
  );
}
