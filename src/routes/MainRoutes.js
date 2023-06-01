import MainLayout from "../layout";
import Home from "../pages/home";

const MainRoutes = {
  path: "/",
  element: <MainLayout />,
  children: [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/dashboard",
      element: <Home />,
    },
    {
      path: "*",
      element: <Home />,
    },
  ],
};

export default MainRoutes;
