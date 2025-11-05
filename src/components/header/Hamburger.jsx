import React, { useEffect, useState } from "react";
import getNavList from "../../data/navList";
import { NavLink } from "react-router-dom";
import { FaGlobe, FaTimes } from "react-icons/fa";
import SwitchTheme from "./SwitchTheme";
import { useSelector } from "react-redux";

export default function Hamburger({ hamburger, setHamburger }) {
  const [navList, setNavList] = useState([]);
  const language = useSelector((state) => state.language.value);

  useEffect(() => {
    setNavList(getNavList(language));
  }, [language]);
  return (
    <div
      style={{ backdropFilter: "blur(10px)" }}
      className={`hamburger fixed flex justify-center items-center top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.7)] ${
        hamburger === 0 ? "hidden" : "block"
      }`}
    >
      <nav>
        <ul className="flex flex-col gap-8">
          <div className="flex gap-2 items-center border-b-2 text-slate-200 p-4">
            <h1 className="logo text-slate-200 text-3xl font-bold flex items-center gap-2 select-none p-4 md:p-0 ">
              <FaGlobe /> GlobeTrotters
            </h1>
            <SwitchTheme />
          </div>

          {navList
            .filter((nav) => nav.active == 1)
            .map((nav) => (
              <li onClick={() => setHamburger(0)} key={nav.name}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-white text-4xl flex gap-2 p-3 items-center border-b-3 transition-all duration-300 ${
                      isActive
                        ? "border-slate-100 text-slate-100"
                        : "border-transparent hover:border-slate-100 hover:text-slate-100"
                    }`
                  }
                >
                  {nav.icon}
                  {nav.name}
                </NavLink>
              </li>
            ))}
        </ul>
      </nav>
      <span
        onClick={() => {
          setHamburger(0);
        }}
        className="close absolute right-4 text-4xl text-white font-bold hover:bg-red-500 p-4 transition-all duration-300 cursor-pointer top-4"
      >
        {" "}
        <FaTimes />{" "}
      </span>
    </div>
  );
}
