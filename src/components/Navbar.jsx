import React from "react";
import logo from "/images/logo.png";

const navbar = [
  "خانه",
  "محصولات",
  "تماس با ما",
  "درباره ما"
  ];

const Navbar = () => {
  const middleIndex = Math.floor(navbar.length / 2);
  return (
    <ul className="flex flex-row-reverse justify-between px-96 items-center w-full">
      {navbar.map((item, idx) => (
        <React.Fragment key={item}>
          {idx === middleIndex && (
            <li className="mx-4" key="logo">
              <img src={logo} alt="Logo" className="h-48 w-48 object-contain" />
            </li>
          )}
          <li className="text-white text-xl font-bold cursor-pointer">
            {item}
          </li>
        </React.Fragment>
      ))}
    </ul>
  );
};

export default Navbar;
