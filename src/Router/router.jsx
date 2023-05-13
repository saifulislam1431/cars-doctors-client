import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import ErrorPage from "../Pages/Error/ErrorPage";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ServiceDetails from "../Pages/ServiceDetails/ServiceDetails";
import Checkout from "../Pages/Checkout/Checkout";
import PrivateRoute from "./PrivateRoute";
import MyBooking from "../Pages/MyBookings/MyBooking";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage />,
      children:[
        {
            path: "/",
            element:<Home></Home>,
        },
        {
          path: "/login",
          element:<Login></Login>
        },
        {
          path: "/register",
          element:<Register></Register>
        },
        {
          path:"/service/:id",
          element: <PrivateRoute><ServiceDetails></ServiceDetails></PrivateRoute>,
          loader: ({params})=> fetch(`https://cars-doctors-server.vercel.app/services/${params.id}`)
        },
        {
          path: "/checkout/:id",
          element: <PrivateRoute><Checkout></Checkout></PrivateRoute>,
          loader: ({params})=> fetch(`https://cars-doctors-server.vercel.app/services/${params.id}`)
        },
        {
          path: "/myBookings",
          element: <PrivateRoute>
            <MyBooking></MyBooking>
          </PrivateRoute>
        }
      ]
    },
  ]);

  export default router;