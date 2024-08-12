import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "./Root";
import AddCoffee from "../Pages/addCoffee/addCoffee";
import UpdateCoffee from "../Pages/updateCoffee/updateCoffee";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/addCoffee",
        element: <AddCoffee />,
      },
      {
        path: "/updateCoffee",
        element: <UpdateCoffee />,
      },
    ],
  },
]);

export default router;
