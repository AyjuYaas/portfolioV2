import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import NotFound from "./layout/notfound";
import { navbarElements } from "./data/NavbarData";
import { Suspense } from "react";
import Loading from "./components/Loading";

const App = () => {
  return (
    <main>
      <Navbar />

      <div className="min-h-screen w-full py-30 px-10">
        <Suspense fallback={<Loading />}>
          <Routes>
            {navbarElements.map(({ path, component: Component }, index) => (
              <Route key={index} path={path} element={<Component />} />
            ))}

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </div>
    </main>
  );
};
export default App;
