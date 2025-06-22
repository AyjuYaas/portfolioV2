import ThemeToggleButton from "./ThemeToggleButton";

const Navbar = () => {
  return (
    <nav className="fixed p-3 px-10 flex justify-end w-full bg-background z-[99]">
      <ThemeToggleButton />
    </nav>
  );
};
export default Navbar;
