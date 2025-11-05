import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import TourCard from "./TourCard";
import tours from "../../data/tourList";
import { FaBus, FaPlane, FaTrain, FaSearch } from "react-icons/fa";
import { useSelector } from "react-redux";
import translations from "../../languages/translations";

const ITEMS_PER_PAGE = 6;

export default function Tours() {
  const navigate = useNavigate();
  const { page = "1", transport = "all" } = useParams();
  const [searchText, setSearchText] = useState("");
  const currentPage = parseInt(page, 10) || 1;
  const language = useSelector((state) => state.language.value);
  const t = translations[language];

  const normalizeText = (str) =>
    str
      .toLocaleLowerCase("tr")
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");

  const filteredTours = tours.filter((tour) => {
    const matchesTransport =
      transport === "all" || tour.transport === transport;
    const matchesSearch =
      normalizeText(tour.name).includes(normalizeText(searchText)) ||
      normalizeText(tour.destination).includes(normalizeText(searchText));

    return matchesTransport && matchesSearch;
  });

  const totalPages = Math.ceil(filteredTours.length / ITEMS_PER_PAGE);
  const safePage =
    currentPage > totalPages ? totalPages : currentPage < 1 ? 1 : currentPage;
  const startIndex = (safePage - 1) * ITEMS_PER_PAGE;
  const currentTours = filteredTours.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  const handlePageChange = (pageNum) => {
    navigate(`/turlar/${pageNum}/${transport}`);
  };

  const handleTransportChange = (newTransport) => {
    navigate(`/turlar/1/${newTransport}`);
  };

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
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center title">
        {t.toursTitle}
      </h1>

      <div className="flex w-full max-w-2xl mx-auto mb-6 rounded-lg overflow-hidden shadow-md bg-blue-900 focus-within:ring-2 focus-within:ring-blue-300 transition">
        <span className="flex items-center justify-center px-4 text-white bg-blue-800">
          <FaSearch />
        </span>

        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder={t.tourSearch}
          className="flex-1 px-4 py-3 bg-transparent text-white placeholder-slate-300 focus:outline-none"
        />
      </div>

      <div className="flex justify-center gap-4 mb-6">
        {["all", "bus", "plane", "train"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 rounded outline-none flex items-center justify-center w-24 h-10 ${
              transport === type
                ? "bg-blue-700 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
            onClick={() => handleTransportChange(type)}
          >
            <span className="flex items-center gap-2">
              {getIcon(type)}
              {type === "all" && t.toursAll}
            </span>
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {currentTours.length > 0 ? (
          currentTours.map((tour) => <TourCard key={tour.slug} tour={tour} />)
        ) : (
          <p className="text-center col-span-3 text-gray-500">
            Sonuç bulunamadı.
          </p>
        )}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center mt-8 gap-2">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded cursor-pointer ${
                safePage === index + 1
                  ? "bg-blue-700 text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
