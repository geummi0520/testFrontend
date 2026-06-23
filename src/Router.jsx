import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import HeaderLayout from "./components/common/Layout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
]);

export default router;
