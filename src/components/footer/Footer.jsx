import React, { useEffect, useState } from "react";
import { FaQuestion, FaLink, FaPaperPlane, FaEnvelope } from "react-icons/fa";
import getFootList from "../../data/footList";
import socials from "../../data/socialMedia";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { changeCurrency } from "../../stores/currencyReducer";
import ScrollTop from "./ScrollTop";
import LanguageSwitch from "./LanguageSwitch";
import translations from "../../languages/translations";

export default function Footer() {
  const dispatch = useDispatch();
  const currency = useSelector((state) => state.currency.value);
  const [footList, setFootList] = useState([]);
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  useEffect(() => {
    setFootList(getFootList(language));
  }, [language]);

  useEffect(() => {
    const storedCurrency = localStorage.getItem("currency");
    if (
      storedCurrency &&
      (storedCurrency === "USD" ||
        storedCurrency === "EUR" ||
        storedCurrency === "YTL" ||
        storedCurrency === "TL")
    ) {
      dispatch(changeCurrency(storedCurrency));
    }
  }, [dispatch]);

  useEffect(() => {
    if (currency !== "") {
      if (
        currency === "USD" ||
        currency === "EUR" ||
        currency === "YTL" ||
        currency === "TL"
      ) {
        localStorage.setItem("currency", currency);
      }
    }
  }, [currency]);

  return (
    <footer className="bg-[var(--footerBg)] text-white py-8 px-6 mt-4">
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-12">
        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-5">
            <FaQuestion size={28} /> {t.footAboutUs}
          </h2>
          <p className="text-slate-200 text-base leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor
            labore dolorum necessitatibus. Neque voluptates enim mollitia
            aspernatur.
          </p>
        </div>

        <div className="flex-1 flex flex-col md:flex-row gap-8">
          <ul className="space-y-3 text-slate-200 text-base min-w-[150px] z-50 md:flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-5">
              <FaLink size={28} /> {t.footFastLinks}
            </h2>
            {footList
              .filter((foot) => foot.active == 1)
              .map((nav) => (
                <li key={nav.name}>
                  <Link
                    to={nav.href}
                    className="hover:text-slate-400 flex items-center gap-2 transition"
                  >
                    {nav.icon} {nav.name}
                  </Link>
                </li>
              ))}
          </ul>

          <div className="md:flex-1">
            <h2 className="text-2xl font-bold flex items-center gap-3 mb-5 ">
              {t.footMedia}
            </h2>
            <ul className="flex gap-4 text-3xl text-slate-200">
              {socials
                .filter((social) => social.active === 1)
                .map((social) => (
                  <li key={social.name}>
                    <a
                      href="#"
                      className="hover:text-slate-400 transition"
                      aria-label={social.name}
                    >
                      {social.icon}
                    </a>
                  </li>
                ))}
            </ul>
            <LanguageSwitch />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <h2 className="text-2xl font-bold flex items-center gap-3 mb-5">
            <FaPaperPlane size={28} /> {t.footNewsletter}
          </h2>
          <p className="text-slate-300 text-base mb-6 leading-relaxed">
            {t.footNewTours}
          </p>
          <form className="flex md:flex-row md:gap-0 gap-2 flex-col border border-[rgba(255,255,255,0.1)] hover:border-slate-600 transition-all duration-500 rounded overflow-hidden shadow-sm">
            <div className="flex w-full">
              <span className="flex items-center justify-center bg-blue-600 px-4 text-white">
                <FaEnvelope size={20} />
              </span>
              <input
                type="email"
                placeholder={t.footEmail}
                className="flex-1 px-4 py-3 text-white bg-transparent placeholder-slate-400 focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-blue-700 hover:bg-blue-600 px-6 py-3 text-white transition flex items-center justify-center"
              aria-label="Bültene Abone Ol"
            >
              <FaPaperPlane size={20} />
            </button>
          </form>

          <div className="flex flex-col items-center">
            <p className="text-slate-300 text-base mt-4 leading-relaxed">
              {t.selectMoney}
            </p>
            <div className="flex gap-2 p-2">
              <span
                onClick={() => {
                  dispatch(changeCurrency("USD"));
                }}
                className={`${
                  currency === "USD" ? "bg-blue-500" : "bg-slate-400"
                } hover:bg-blue-400 p-2 w-8 flex items-center justify-center cursor-pointer`}
              >
                $
              </span>
              <span
                onClick={() => {
                  dispatch(changeCurrency("EUR"));
                }}
                className={`${
                  currency === "EUR" ? "bg-blue-500" : "bg-slate-400"
                } hover:bg-blue-400 p-2 w-8 flex items-center justify-center cursor-pointer`}
              >
                €
              </span>
              <span
                onClick={() => {
                  dispatch(changeCurrency("YTL"));
                }}
                className={`${
                  currency === "TL" || currency === "YTL"
                    ? "bg-blue-500"
                    : "bg-slate-400"
                } hover:bg-blue-400 p-2 w-8 flex items-center justify-center cursor-pointer`}
              >
                ₺
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center text-slate-400 text-sm mt-12">
        © {new Date().getFullYear()} GlobeTrotters. {t.footCopyright}
      </div>
      <ScrollTop />
    </footer>
  );
}
