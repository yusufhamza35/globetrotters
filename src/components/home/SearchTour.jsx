import React, { useEffect, useState } from "react";
import {
  FaBus,
  FaPaperPlane,
  FaPlane,
  FaSearch,
  FaTrain,
} from "react-icons/fa";
import tours from "../../data/tourList";
import { ShowCurrency, CurrencyConvert } from "../../helpers/Currency";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";

export default function SearchTour() {
  const currency = useSelector((state) => state.currency.value);
  const [transport, setTransport] = useState("bus");
  const [searchText, setSearchText] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  const iconBase = "cursor-pointer p-2 rounded-full transition";
  const getIconStyle = (type) =>
    transport === type
      ? `${iconBase} bg-white text-blue-800`
      : `${iconBase} text-white hover:bg-blue-600`;

  const normalizeText = (str) =>
    str
      .toLocaleLowerCase("tr")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const tourFinder = (val) => {
    const text =
      val && val.target
        ? val.target.value != null
          ? normalizeText(val.target.value)
          : val
        : val;
    setSearchText(text);

    const results = tours.filter(
      (tour) =>
        (normalizeText(tour.destination).includes(text) ||
          normalizeText(tour.name).includes(text)) &&
        tour.transport === transport
    );

    setFilteredTours(results.slice(0, 4));
  };

  useEffect(() => {
    if (searchText != "") {
      tourFinder(searchText);
    }
  }, [transport]);

  const getIcon = (type) => {
    switch (type) {
      case "bus":
        return <FaBus className="inline-block mr-2" />;
      case "plane":
        return <FaPlane className="inline-block mr-2" />;
      case "train":
        return <FaTrain className="inline-block mr-2" />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-gray-100 searchTour py-6 px-4  flex flex-col gap-6 justify-center items-center shadow-sm mb-6 mt-16 md:mt-6">
      <div className="flex w-full max-w-3xl rounded-lg overflow-hidden shadow-md bg-blue-900 focus-within:ring-2 focus-within:ring-blue-300 transition z-50">
        <span className="flex items-center justify-center px-4 text-white bg-blue-800">
          <FaSearch />
        </span>

        <input
          type="text"
          onChange={tourFinder}
          value={searchText}
          placeholder={t.searchTour}
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-slate-300 focus:outline-none"
        />

        <Link
          to={`/turlar/1/${transport}`}
          className="bg-blue-800 hover:bg-blue-700 text-white px-6 flex items-center justify-center transition-all cursor-pointer"
        >
          <FaPaperPlane />
        </Link>
      </div>

      <div className="select flex justify-center items-center gap-4 text-2xl bg-blue-700 p-4 rounded-lg text-white z-50">
        <span
          className={getIconStyle("bus")}
          onClick={() => setTransport("bus")}
        >
          <FaBus />
        </span>
        <span
          className={getIconStyle("plane")}
          onClick={() => setTransport("plane")}
        >
          <FaPlane />
        </span>
        <span
          className={getIconStyle("train")}
          onClick={() => setTransport("train")}
        >
          <FaTrain />
        </span>
      </div>

      {filteredTours.length > 0 && (
        <div className="w-full max-w-3xl grid md:grid-cols-2 gap-4">
          {filteredTours.map((tour, i) => (
            <Link key={i} to={`/tur/${tour.slug}`}>
              <div className="bg-white searchedTour shadow-md rounded-lg overflow-hidden p-4 flex items-center gap-4 cursor-pointer">
                <div className="left flex-1">
                  <img
                    className="rounded-lg shadow-md object-cover"
                    src={tour.image}
                    alt=""
                  />
                </div>

                <div className="right flex-1">
                  <h2 className="text-lg font-semibold">{tour.name}</h2>
                  <p className="text-sm text-gray-500">{tour.destination}</p>
                  <p className="text-sm mt-1">{tour.date}</p>
                  <div className="flex justify-between items-center mt-2">
                    <p className="text-sm mt-1">
                      {CurrencyConvert(tour.priceType, tour.price, currency)}
                    </p>
                    {getIcon(tour.transport)}
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {searchText.length > 0 && filteredTours.length === 0 && (
        <p className="text-gray-500">{t.searchEmpty}</p>
      )}
    </div>
  );
}
