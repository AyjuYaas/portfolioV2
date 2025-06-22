import Navbar from "./components/Navbar";
import Home from "./layout/home";

const App = () => {
  return (
    <main>
      <Navbar />

      <div className="min-h-screen w-full pt-20 px-10">
        <Home />
      </div>
    </main>
  );
};
export default App;
