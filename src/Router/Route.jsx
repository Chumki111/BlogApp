import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main.jsx";
import Home from "../Pages/Home.jsx";
import AddBlog from "../Pages/AddBlog.jsx";
import MyBlog from "../Pages/MyBlog.jsx";


export const Routes =createBrowserRouter([
    {
        path:'/',
        element:<Main/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/add-blog',
                element:<AddBlog/>
            },
            {
                path:'/my-blog',
                element:<MyBlog/>
            }
        ]
    }
])