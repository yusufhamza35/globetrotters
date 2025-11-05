import React from "react";
import popularTours from "../../data/popularTours";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import whyUsData from "../../data/whyUsData";
import PulsingButton from "../others/PulsingButton";

export default function WhyUs() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  return (
    <div className="flex flex-col items-center p-4 my-6">
      <h2 className="text-gray-800 font-bold text-3xl mb-2 title ">
        {t.whyUs}
      </h2>
      <div className="flex lg:flex-row flex-col items-center justify-center gap-8 w-full p-10 whyUs">
        {whyUsData
          .filter((why) => why.active == 1)
          .map((why, id) => (
            <div
              key={id}
              className="whyCard flex-1 bg-white h-96 shadow-lg rounded-xl flex flex-col items-center p-6 gap-4"
            >
              <span className="text-gray-800 text-4xl bg-slate-300 rounded-full p-4 flex items-center justify-center">
                {why.icon}
              </span>
              <h2 className="text-black text-3xl font-semibold text-center whyTitle">
                {why.title}
              </h2>
              <p className="text-black text-md font-extralight text-center whyText">
                {why.desc}
              </p>
              <PulsingButton href={why.href} text={t.whyView} />
            </div>
          ))}
      </div>
    </div>
  );
}
