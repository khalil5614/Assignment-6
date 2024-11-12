import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import HomePage from "../pages/HomePage";
import SkillsPage from "../pages/SkillsPage";
import ProjectsPage from "../pages/ProjectsPage";
import ContactDetails from "../pages/ContatDetails";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
      {
        path: "/skills",
        element: <SkillsPage />,
      },
      {
        path: "/contact",
        element: <ContactDetails />,
      },
    ],
  },
]);

export default router;
