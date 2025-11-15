import DescriptionSection from "./components/DescriptionSection";
import LinkSection from "./components/LinkSection";
import TitleSection from "./components/TitleSection";

const Home = () => {
  return (
    <div className="flex justify-center">
      <div className="flex flex-col gap-5 w-full max-w-[700px] min-w-[400px]">
        <TitleSection />
        <DescriptionSection />
        <LinkSection />
      </div>
    </div>
  );
};
export default Home;
