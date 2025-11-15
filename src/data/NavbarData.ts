import Home from "@/layout/home";
import Projects from "@/layout/projects";
import CV from "@/layout/cv";
import Contact from "@/layout/contact";

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
  {
    title: "Contact",
    path: "/contact",
    component: Contact,
  },
] satisfies {
  title: string;
  path: string;
  component: React.FC;
}[];
