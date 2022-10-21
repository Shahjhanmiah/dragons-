import { createBrowserRouter } from "react-router-dom";
import Category from "../Category/Category";
import Home from "../Home/Home";
import Main from "../layout/Main";
import Login from "../Login/Login";
import News from "../News/News";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Header from "../Share/Header/Header";
import TremsAndCondtions from "../TremsAndCondtions/TremsAndCondtions";

export const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[

           {
            path:'/',
            element:<Home></Home>,
            loader:()=>fetch('http://localhost:5000/news')

           },
           {
            path:'/category/:id',
            element:<Category></Category>,
            loader:({params})=>fetch(`http://localhost:5000/category/${params.id}`)
           },
           {
            path:'/news/:id',
            element:<PrivateRoute><News></News></PrivateRoute>,
            loader:({params})=>fetch(`http://localhost:5000/news/${params.id}`)
           },
           {
            path:'/',
            element:<Header></Header>

           },
           {
            path:'/login',
            element:<Login></Login>
           },
           {
            path:'/register',
            element:<Register></Register>
           },
           {
            path:'/terms',
            element:<TremsAndCondtions></TremsAndCondtions>
           },
           {
            path:'/profile',
            element:<PrivateRoute><Profile></Profile></PrivateRoute>
           }

        ]
    }

]);
