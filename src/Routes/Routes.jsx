import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home";
import Category from "../Pages/Category/Category";
import NewsDisplay from "../Layouts/NewsDisplay";
import News from "../Pages/News/News";
import NewsContext from "../contexts/NewsProvider";
import AuthLayout from "../Layouts/AuthLayout";
import Login from "../Pages/AuthPages/Login";
import Register from "../Pages/AuthPages/Register";
import PrivateRoute from "./PrivateRoute";
import TermsCondition from "../Pages/AuthPages/TermsCondition";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />,
                loader: () => fetch('http://localhost:5000/news/')

            },
            {
                path: 'category/:id',
                element: <Category />,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)
            }
        ]
    },
    {
        path: 'news',
        element: <PrivateRoute><NewsDisplay /></PrivateRoute>,
        children: [
            {
                path: '/news/:id',
                element: <News />,
                loader: ({ params }) => fetch(`http://localhost:5000/news/${params.id}`)
            }
        ]
    },
    {
        path: 'auth',
        element: <AuthLayout />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'register',
                element: <Register />
            },
            {
                path: 'terms-and-condition',
                element: <TermsCondition/>
            }
        ]
    }
])