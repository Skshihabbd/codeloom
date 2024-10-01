import { createBrowserRouter } from "react-router-dom";
import Main from "../Component/Main";
import Home from "../Component/Home";
import ErrorPage from "../Component/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);
