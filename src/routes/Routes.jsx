import { createBrowserRouter } from "react-router-dom";
import Main from '../layouts/Main'
import Home from './../pages/Home';
import Login from "../pages/Login";
import Register from "../pages/Register";
import NeedVolunteer from "../components/NeedVolunteer";
import AddVolunteer from "../pages/AddVolunteer";
import PrivateRoute from './PrivateRoute';
import ManagePost from "../components/ManagePost";
import Details from "../pages/Details";
import BeAVolunteer from "../pages/BeAVolunteer";
import UpdateVolunteer from "../pages/UpdateVolunteer";
import AppliedPost from "../pages/AppliedPost";
import ErrorPage from "../pages/ErrorPage";

const Router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage />,
        children: [
            {
              path: "/",
              element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/register",
                element: <Register />,
            },
            {
                path: "/need-volunteer",
                element: <NeedVolunteer />,
            },
            {
                path: "/add-volunteer",
                element: <PrivateRoute><AddVolunteer /></PrivateRoute>,
            },
            {
                path: "/manage-my-post",
                element: <PrivateRoute><ManagePost /></PrivateRoute>,
            },
            {
                path: "/volunteer/:id",
                element: <PrivateRoute><Details /></PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
            },
            {
                path: "/be-a-volunteer/:id",
                element: <PrivateRoute><BeAVolunteer /></PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
            },
            {
                path: "/update/:id",
                element: <PrivateRoute><UpdateVolunteer /></PrivateRoute>,
                loader:({params})=>fetch(`${import.meta.env.VITE_API_URL}/volunteer/${params.id}`)
            },
            {
                path: "/applied-post",
                element: <PrivateRoute><AppliedPost /></PrivateRoute>,
            },
            
          ],
    },
]);

export default Router