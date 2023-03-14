import React from "react";
import { useLocation, Link } from "react-router-dom";

export const Navbar: () => JSX.Element = () => {
  const { hash, pathname } = useLocation();

  console.log(hash, pathname);

  return (
    <nav className="fixed top-0 flex items-center justify-between w-full px-5 mt-5">
      <div className="text-xl italic">Landing Pages</div>
      <div className="w-1/2">
        {pathname === "/" ? (
          <ul className="flex justify-around">
            <li>
              <a href="#home">home</a>
            </li>
            <li>
              <a href="#projects">templates</a>
            </li>
            <li>
              <a href="#about-us">about us</a>
            </li>
          </ul>
        ) : (
          <ul className="flex justify-around">
            <li>
              <Link to="/#home">home</Link>
            </li>
            <li>
              <Link to="/#projects">templates</Link>
            </li>
            <li>
              <Link to="/#about-us">about us</Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};
