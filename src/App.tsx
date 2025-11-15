import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./layout/notfound";
import { navbarElements } from "./data/NavbarData";

const App = () => {
  return (
    <main>
      <Navbar />

      <div className="min-h-screen w-full pt-20 px-10">
        <Routes>
          {navbarElements.map(({ path, component: Component }, index) => (
            <Route key={index} path={path} element={<Component />} />
          ))}

          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </main>
  );
};
export default App;
