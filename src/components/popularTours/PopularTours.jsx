import React from "react";
import popularTours from "../../data/popularTours";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import EmbedFrame from "./EmbedFrame";
import PulsingButton from "../others/PulsingButton";
import { FaEye } from "react-icons/fa";

export default function PopularTours() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  return (
    <div className="flex flex-col items-center p-4">
      <h2 className="text-gray-800 font-bold text-2xl mb-6 title">
        {t.popularTours}
      </h2>
      <div className="flex flex-col items-center justify-center gap-4 w-full">
        {popularTours.map((tour, id) => (
          <div
            className={`flex flex-col md:flex-row ${
              id % 2 !== 0 ? "md:flex-row-reverse" : ""
            } gap-4 w-full bg-gray-200 popularTour`}
            key={id}
          >
            <div className="embed w-full md:w-1/2">
              <EmbedFrame embed={tour.embed} />
            </div>
            <div className="info flex-1 p-8">
              <h2 className="text-gray-800 font-bold text-2xl mb-4 title">
                {tour.title}
              </h2>
              <p className="text-gray-800 font-light text-md mb-4 popularTourText">
                {tour.description}
              </p>
              <PulsingButton
                href={tour.url}
                icon={<FaEye />}
                text={t.popularTourBtn}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
