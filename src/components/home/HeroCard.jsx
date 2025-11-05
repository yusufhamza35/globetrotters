import React from "react";
import { Link } from "react-router-dom";

export default function HeroCard({
  image,
  title,
  description,
  href,
  icon: Icon,
  buttonActive = true,
  buttonText = "Detaylar",
}) {
  return (
    <div className="rounded shadow bg-white md:h-[360px]">
      <div className="flex flex-col-reverse md:flex-row">
        <div className="bg-slate-900 hero flex-1 flex flex-col justify-center items-start p-4 sm:p-12 text-white h-[300px] md:h-[500px]">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <p className="text-slate-200 mb-6 text-sm sm:text-base leading-relaxed">
            {description}
          </p>
          {buttonActive && (
            <Link
              className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-md text-white font-semibold text-base flex items-center gap-2"
              to={href}
            >
              {Icon && <Icon />} {buttonText}
            </Link>
          )}
        </div>

        <div className="md:flex-1 flex items-center justify-center bg-gray-100 relative h-[300px] md:h-[500px]">
          <div className="absolute bg-[rgba(0,0,0,0.1)] w-full h-full left-0 top-0 z-10" />
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover z-0"
          />
        </div>
      </div>
    </div>
  );
}
