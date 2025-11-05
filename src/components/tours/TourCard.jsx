import React from "react";
import { FaEye, FaMapMarkerAlt } from "react-icons/fa";
import { ShowCurrency, CurrencyConvert } from "../../helpers/Currency";
import { FaBus, FaPlane, FaTrain } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";

export default function TourCard({ tour }) {
  const currency = useSelector((state) => state.currency.value);
  const language = useSelector((state) => state.language.value);
  const t = translations[language];
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
    <div className="flex flex-1 flex-col bg-white tourCard shadow-lg rounded-md overflow-hidden hover:shadow-xl transition duration-300">
      <img
        src={tour.image}
        alt={tour.name}
        className="h-52 w-full object-cover"
      />

      <div className="p-4 flex flex-col gap-2">
        <h2 className="text-xl font-semibold text-gray-800 tourTitle">
          {tour.name}
        </h2>
        <div className="flex justify-between  items-center">
          <p className="text-sm text-gray-500">{tour.date}</p>
          <p className="text-sm text-gray-400 flex items-center justify-center gap-2">
            <FaMapMarkerAlt /> {tour.destination}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-bold text-blue-700 ">
            {CurrencyConvert(tour.priceType, tour.price, currency)}
          </p>
          {getIcon(tour.transport)}
        </div>
        <p className="text-sm text-gray-700 line-clamp-3 tourDesc">
          {tour.shortDesc.length > 50
            ? `${tour.shortDesc.slice(0, 50)}...`
            : tour.shortDesc}
        </p>

        {tour.slug && (
          <Link
            to={`/tur/${tour.slug}`}
            className="mt-3 text-md  text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded transition flex items-center justify-center gap-2 "
          >
            <FaEye /> {t.toursDetail}
          </Link>
        )}
      </div>
    </div>
  );
}
