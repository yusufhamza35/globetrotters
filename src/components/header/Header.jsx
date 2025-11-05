import React, { useEffect, useState } from "react";
import { FaBars, FaGlobe } from "react-icons/fa";
import getNavList from "../../data/navList";
import { Link, NavLink } from "react-router-dom";
import Hamburger from "./Hamburger";
import SwitchTheme from "./SwitchTheme";
import { useSelector } from "react-redux";

export default function Header() {
  const [hamburger, setHamburger] = useState(0);
  const [navList, setNavList] = useState([]);
  const language = useSelector((state) => state.language.value);

  useEffect(() => {
    setNavList(getNavList(language));
  }, [language]);

  return (
    <header className="justify-between flex bg-[var(--headerBg)] px-4 py-2 items-center h-24">
      <Link
        to=""
        className="logo text-slate-200 text-4xl font-bold flex items-center gap-2 select-none p-4 md:p-0"
      >
        <FaGlobe /> <span className="hidden md:block">GlobeTrotters</span>
      </Link>

      <nav className="hidden lg:block">
        <ul className="flex gap-3 items-center">
          {navList
            .filter((nav) => nav.active == 1)
            .map((nav) => (
              <li key={nav.id}>
                <NavLink
                  to={nav.href}
                  className={({ isActive }) =>
                    `text-white text-xl flex gap-1 p-2 items-center border-b-2 transition-all duration-300 ${
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
          <SwitchTheme />
        </ul>
      </nav>

      <span
        onClick={() => setHamburger(1)}
        className="bg-gray-200 text-3xl text-gray-800 p-4 cursor-pointer block lg:hidden"
      >
        <FaBars />
      </span>
      <Hamburger hamburger={hamburger} setHamburger={setHamburger} />
    </header>
  );
}
