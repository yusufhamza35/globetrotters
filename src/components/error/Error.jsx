import React from "react";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";
import PulsingButton from "../others/PulsingButton";
import { FaExclamationTriangle, FaHome } from "react-icons/fa";

export default function Error() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  return (
    <div className="flex items-center justify-center bg-slate-200 min-h-[80vh] errorPage">
      <div className="text-center flex flex-col gap-2 justify-center items-center p-8 rounded-xl ">
        <h1 className="text-9xl font-bold errorText">404</h1>
        <h1 className="text-2xl font-bold errorText mb-4 flex items-center justify-center gap-2">
          {" "}
          <FaExclamationTriangle /> {t.notFound}
        </h1>
        <PulsingButton icon={<FaHome />} href="/" text={t.goHome} />
      </div>
    </div>
  );
}
