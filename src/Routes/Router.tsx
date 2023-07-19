/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/HomePage/Home";
import AllBooks from "../Pages/AllBooks/AllBooks";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NotFound from "../Pages/NotFound/NotFound";
import AddBooks from "../Pages/AddBooks/AddBooks";
import PrivateRoute from "./PrivateRoute";
import BookDetails from "../Pages/BookDetails/BookDetails";
import UpdateBook from "../Pages/UpdateBook/UpdateBook";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allbooks",
        element: <AllBooks></AllBooks>,
      },
      {
        path: "/book/:id",
        element: <BookDetails></BookDetails>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/v1/books/getSingle-book/${params.id}`
          ),
      },
      {
        path: "/updateBook/:id",
        element: <UpdateBook></UpdateBook>,
        loader: ({ params }) =>
          fetch(
            `http://localhost:5000/api/v1/books/getSingle-book/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Register></Register>,
      },
      {
        path: "/addbooks",
        element: (
          <PrivateRoute>
            <AddBooks></AddBooks>
          </PrivateRoute>
        ),
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
