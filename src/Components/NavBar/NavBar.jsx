import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import { BsTelephoneOutboundFill } from "react-icons/bs";

export default function Navbar() {
  const [open, setOpen] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setOpen(null);
  };

  return (
    <nav className="bg-blue-600 py-3">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-20">
        <div className="text-white">
          <h1 className="text-3xl md:text-4xl font-bold">
            High<span className="text-green-900">Tech</span>
          </h1>
        </div>

        <button
          className="md:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div
          className={`${
            menuOpen ? "block" : "hidden"
          } md:block absolute md:static top-16 left-0 w-full md:w-auto bg-blue-600`}
        >
          <ul className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-white font-semibold text-lg md:text-xl px-6 md:px-0 py-4 md:py-0">
            <li onClick={closeMenu}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>

            <li onClick={closeMenu}>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }
              >
                About
              </NavLink>
            </li>

            <li
              onMouseEnter={() => setOpen("Service")}
              onMouseLeave={() => setOpen(null)}
              className="relative cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Service <FaChevronDown size={14} />
              </span>

              {open === "Service" && (
                <div className="md:absolute bg-white text-black rounded-lg shadow-lg w-48 mt-2">
                  <p className="px-5 py-2 hover:bg-gray-200">
                    <NavLink to="/services" onClick={closeMenu}>
                      Services
                    </NavLink>
                  </p>
                  <p className="px-5 py-2 hover:bg-gray-200">
                    <NavLink to="/services/details" onClick={closeMenu}>
                      Service Details
                    </NavLink>
                  </p>
                </div>
              )}
            </li>

            <li
              onMouseEnter={() => setOpen("Project")}
              onMouseLeave={() => setOpen(null)}
              className="relative cursor-pointer"
            >
              <span className="flex items-center gap-2">
                Project <FaChevronDown size={14} />
              </span>

              {open === "Project" && (
                <div className="md:absolute bg-white text-black rounded-lg shadow-lg w-48 mt-2">
                  <p className="px-5 py-2 hover:bg-gray-200">
                    <NavLink to="/projects">Projects</NavLink>
                  </p>
                  <p className="px-5 py-2 hover:bg-gray-200">
                    <NavLink to="/projects/details">Project Details</NavLink>
                  </p>
                </div>
              )}
            </li>

            <li onClick={closeMenu}>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? "text-gray-300" : "text-white"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="hidden md:flex gap-4 items-center text-white">
          <div className="relative inline-flex">
            <BsTelephoneOutboundFill className="text-3xl relative z-10" />
            <span className="absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75 animate-ping"></span>
          </div>
          <div>
            <p className="font-bold">Have Any Questions?</p>
            <p>+123 456 78998</p>
          </div>
        </div>
      </div>
    </nav>
  );
}
