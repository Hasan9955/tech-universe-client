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


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/brands')
      },
      {
        path: '/addProduct',
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>,
        loader: () => fetch('http://localhost:5000/cart')
      },
      {
        path: '/details/:id',
        element: <PrivateRoute><Details></Details></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/details/${params.id}`)
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
        loader: ({ params }) => fetch(`http://localhost:5000/products/${params.name}`)
      },
      {
        path: '/update/:id',
        element: <PrivateRoute><Update></Update></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:5000/update/${params.id}`)
      },
      

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
