import Header from "./components/Header";
import ProjectsSection from "./components/ProjectsSection";

const ProjectLayout = () => {
  return (
    <section className="flex justify-center">
      <div className="flex flex-col items-center w-full gap-10">
        <Header />

        <ProjectsSection />
      </div>
    </section>
  );
};
export default ProjectLayout;
