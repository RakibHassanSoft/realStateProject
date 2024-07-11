import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './pages/Root/Root.jsx';
import Home from './pages/Home/Home.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import SignIn from './components/SignIn/SignIn.jsx';
import Login from './components/Login/Login.jsx';
import Properties from './pages/Properties/Properties.jsx';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile.jsx';
import Details from './components/Details/Details.jsx';
import Blog from './pages/Blog/Blog.jsx';
import PageNotFound from './pages/PageNotFound/PageNotFound.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<PageNotFound></PageNotFound>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: () => fetch('/data.json'),
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/blog',
        element:<Blog></Blog>
      }
      ,
      {
        path:'/register',
        element:<SignIn></SignIn>
      },{
        path:'/updateProfile',
        element:<UpdateProfile></UpdateProfile>
      },
      {
        path:'/properties',
        loader: () => fetch('/data.json'),
        element:<Properties></Properties>
      },{
        path:'/properties/:userID',
        loader: () => fetch('/data.json'),
        element:<Details></Details>,
      },
    ]
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
</React.StrictMode>
)
