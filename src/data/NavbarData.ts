import Home from "@/layout/home";
import Projects from "@/layout/projects";
import CV from "@/layout/cv";

export const navbarElements = [
  {
    title: "Home",
    path: "/",
    component: Home,
  },
  {
    title: "Projects",
    path: "/my-projects",
    component: Projects,
  },
  {
    title: "CV",
    path: "/CV",
    component: CV,
  },
] satisfies {
  title: string;
  path: string;
  component: React.FC;
}[];
