import { useState, useEffect } from "react";

import ToggleButton from "../ui/ToggleButton";

import chartjsImg from "../../img/chartjs.png";
import moonIcon from "../../img/icons/moon.svg";
import sunIcon from "../../img/icons/sun.svg";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") == "false" ? false : true
  );

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
      root.classList.add("bg-slate-900");
      localStorage.setItem("darkMode", "true");
    } else {
      root.classList.remove("dark");
      root.classList.remove("bg-slate-900");
      localStorage.setItem("darkMode", "false");
    }
  }, [darkMode]);

  return (
    <div className="flex items-center justify-between bg-gradient-to-r from-lgStart to-lgEnd h-12 w-100% px-4 md:px-24 lg:px-34 py-4">
      <h1 className="text-white text-sm md:text-lg">
        React Visualisation Examples with Chart.js
        <img
          src={chartjsImg}
          alt="chartjs logo"
          className="inline h-6 w-6 ml-2"
        />
      </h1>
      <ToggleButton
        icon1={sunIcon}
        icon2={moonIcon}
        state={darkMode}
        changeHandler={() => setDarkMode((prev) => !prev)}
      />
    </div>
  );
};

export default Navbar;
