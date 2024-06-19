import React from "react";

const NavbarLine = () => {
  return (
    <nav className="bg-blue-500 text-black px-4 py-2 md:px-20 md:5 sticky top-0">
      <div className="flex justify-between items-center">
        <div className="font-bold text-4xl text-black hover:text-blue-300 list-none">
          <li>
            <a href="/">
              Gamsky<sup>Porto</sup>
            </a>
          </li>
        </div>
        <div className="font-semibold text-10">
          <ul className="flex space-x-10 ">
            <li>
              <a href="/about" className="text-black hover:text-blue-300">
                About Me
              </a>
            </li>
            <li>
              <a href="/project" className="text-black hover:text-blue-300">
                My Project
              </a>
            </li>
            <li>
              <a href="/experience" className="text-black hover:text-blue-300">
                My Experience
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLine;
