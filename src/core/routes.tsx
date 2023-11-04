import React from "react";
import { Outlet, useRoutes } from "react-router";
import EBooks from "../components/EBooks/EBooks";
import EBookDetails from "../components/EBookDetails/EBookDetails";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      element: <Outlet />,

      children: [
        {
          path: "",
          element: <EBooks />,
        },
        {
          path: "book/:id",
          element: <EBookDetails />,
        },
      ],
    },
  ]);
};

export default Routes;
