import { createBrowserRouter } from "react-router-dom";
import { Dashlayout, Weblayout } from "../components";
import DashIndex from "../pages/DashIndex";
import Home from "../pages/Home";
import SignUp from "../pages/SignUp";
import ErrorBoundary from "../utils/hoc/ErrorBoundary";

export const AllRoutes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorBoundary />,
    hasErrorBoundary: true,

    children: [
      {
        element: <Weblayout />,
        children: [
          {
            index: true,
            element: <Home />,
          },
        ],
      },

      {
        element: <Dashlayout />,
        children: [
          {
            path: "dashboard",
            element: <DashIndex />,
          },
        ],
      },

      {
        path: "signup",
        element: <SignUp />,
      },
    ],
  },
]);
