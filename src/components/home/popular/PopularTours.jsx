import React from "react";

import popularTour from "../../../assets/popularTour.jpg";
import ParticlesHome from "./ParticlesHome";
import PulsingButton from "../../others/PulsingButton";
import { useSelector } from "react-redux";
import translations from "../../../languages/translations";
import { FaEye } from "react-icons/fa";

export default function PopularTours() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];
  return (
    <div className="my-6 relative w-full h-[360px] overflow-hidden flex justify-center items-center">
      <ParticlesHome />
      <img
        className="absolute left-0 top-0 w-full h-full object-cover z-0"
        src={popularTour}
        alt="Popular Tour"
      />

      <div className="overlayTour absolute w-full h-full left-0 top-0 bg-[rgba(0,0,0,0.5)] z-20"></div>

      <div className="max-w-7xl absolute z-50 w-full h-full flex flex-col items-center gap-5 justify-center text-white">
        <h2 className="text-3xl font-bold select-none">{t.popularTours}</h2>
        <span className="text-slate-300 text-center  select-none">
          {t.popularToursText}
        </span>
        <PulsingButton
          href="/populer-turlar"
          icon={<FaEye />}
          text={t.popularToursBtn}
        />
      </div>
    </div>
  );
}
