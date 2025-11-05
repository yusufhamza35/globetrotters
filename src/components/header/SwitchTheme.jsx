import React, { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../../stores/themeReducer";

export default function SwitchTheme() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.value);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme) {
      dispatch(changeTheme(storedTheme));
    } else {
      dispatch(changeTheme("light"));
    }
  }, [dispatch]);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--headerBg", "#1A1B1F");
      root.style.setProperty("--footerBg", "#1A1B1F");
      document.querySelector("body").classList.add("dark");
    } else {
      root.style.setProperty("--headerBg", "#023E8A");
      root.style.setProperty("--footerBg", "#023E8A");
      document.querySelector("body").classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <span
      onClick={() => {
        dispatch(changeTheme(theme === "dark" ? "light" : "dark"));
      }}
      className="rounded-full w-12 h-12 flex justify-center items-center text-white bg-blue-500 cursor-pointer"
    >
      {theme == "light" ? <FaMoon /> : <FaSun />}
    </span>
  );
}
