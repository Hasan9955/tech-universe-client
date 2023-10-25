import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Children/Home';
import Root from './Components/Root/Root';
import Error from './Components/Children/Error';
import Cart from './Components/Children/Cart';
import Login from './Components/Children/Login';
import Register from './Components/Children/Register';
import AuthProvider from './Auth/AuthProvider';
import PrivateRoute from './Route Manage/PrivateRoute';
import Details from './Components/Children/Details';
import AddProduct from './Components/Children/AddProduct';
import Products from './Components/Children/Products';
import { ThemeProvider } from '@material-tailwind/react';
import Update from './Components/Children/Update';
import MyAccount from './Components/Children/MyAccount';
import Blogs from './Components/Children/Blogs';
import BlogDetails from './Components/Children/BlogDetails';
import About from './Components/Children/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/brands')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/cart')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/details/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      },
      {
        path: '/products/:name',
        element: <Products></Products>,
        loader: ({ params }) => fetch(`https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/products/${params.name}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/update/${params.id}`)
      },
      {
        path: '/account',
        element: <PrivateRoute><MyAccount></MyAccount></PrivateRoute>
      },
      {
        path: '/blog',
        element: <Blogs></Blogs>,
        loader: () => fetch('https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/blog')
      },
      {
        path: '/blog/:id',
        element: <BlogDetails></BlogDetails>,
        loader: ({params}) => fetch(`https://technology-shop-server-l150fk00p-hasan-bin-alis-projects.vercel.app/blog/${params.id}`)
      },
      {
        path: '/about',
        element: <About></About>
      }
      

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <ThemeProvider>
        <RouterProvider router={router}></RouterProvider>
      </ThemeProvider>
    </AuthProvider>
  </React.StrictMode>,
)
