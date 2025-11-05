import React, { useEffect } from "react";
import { changeLang } from "../../stores/languageReducer";
import { useSelector, useDispatch } from "react-redux";
import translations from "../../languages/translations";

export default function LanguageSwitch() {
  const language = useSelector((state) => state.language.value);
  const t = translations[language];
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);
  return (
    <div className="mt-4 flex gap-2">
      <a
        onClick={(e) => {
          e.preventDefault();
          dispatch(changeLang("tr"));
        }}
        className="p-2 text-sm rounded-md text-white bg-red-500 cursor-pointer"
      >
        {t.langSwitchTr}
      </a>
      <a
        onClick={(e) => {
          e.preventDefault();
          dispatch(changeLang("eng"));
        }}
        className="p-2  text-sm  rounded-md text-white bg-blue-500 cursor-pointer"
      >
        {t.langSwitchEng}
      </a>
    </div>
  );
}
