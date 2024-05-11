import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import DashBoard from "../pages/DashBoard";
import JobDescription from "../pages/JobDescription";
import SignUp from "../pages/SignUp";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <SignUp />,
      },
      {
        path: "/DashBoard",
        element: <DashBoard />,
      },
      {
        path: "/JobDescription",
        element: <JobDescription />,
      },
      
    ],
  },
 
]);

export default router;
