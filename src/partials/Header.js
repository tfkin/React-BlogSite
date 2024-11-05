import React from "react";
import { FaLaptop, FaTabletAlt, FaMobileAlt } from "react-icons/fa";
import useWindowSize from "../hooks/useWindowSize";

const Header = () => {
  const { width } = useWindowSize();
  const title = "React JS Blog";

  return (
    <header className="Header">
      <h1>
        {width < 768 ? (
          <FaMobileAlt />
        ) : width < 992 ? (
          <FaTabletAlt />
        ) : (
          <FaLaptop />
        )}
        {title}
      </h1>
    </header>
  );
};

export default Header;
