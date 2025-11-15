import { Link, useLocation } from "react-router-dom";
import ThemeToggleButton from "./ThemeToggleButton";
import { navbarElements } from "@/data/NavbarData";

const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="fixed p-3 px-10 flex justify-end items-center gap-4 w-full bg-background z-[99]">
      <ThemeToggleButton />
      <section className="flex gap-5 justify-center items-center">
        {navbarElements.map((element, index) => (
          <Link
            key={index}
            to={element.path}
            className={`${
              pathname === element.path
                ? "hidden"
                : "relative inline-block after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:h-[2px] after:w-0 after:bg-current after:transition-all after:duration-500 hover:after:w-full"
            }`}
          >
            {element.title}
          </Link>
        ))}
      </section>
    </nav>
  );
};
export default Navbar;
