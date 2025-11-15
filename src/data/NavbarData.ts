import { lazy } from "react";

export const navbarElements = [
  {
    title: "Home",
    path: "/",
    component: lazy(() => import("@/layout/home")),
  },
  {
    title: "Projects",
    path: "/my-projects",
    component: lazy(() => import("@/layout/projects")),
  },
  {
    title: "CV",
    path: "/CV",
    component: lazy(() => import("@/layout/cv")),
  },
  {
    title: "Contact",
    path: "/contact",
    component: lazy(() => import("@/layout/contact")),
  },
] satisfies {
  title: string;
  path: string;
  component: React.LazyExoticComponent<React.FC>;
}[];
