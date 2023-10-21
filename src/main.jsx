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
        element: <AddProduct></AddProduct>
      },
      {
        path: '/cart',
        element: <PrivateRoute><Cart></Cart></PrivateRoute>
      },
      {
        path: '/details',
        element: <PrivateRoute><Details></Details></PrivateRoute>
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
        loader: ({params}) => fetch(`http://localhost:5000/products/${params.name}`)
      }

    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>,
)
