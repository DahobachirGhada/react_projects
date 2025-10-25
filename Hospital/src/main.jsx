import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from "react"
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom"

import SignUp from './pages/medecin/Signup';
import SignIn from './pages/Signin';
import ForgotPassword from './pages/medecin/forgot_password';

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>
    },
    {
        path: "/SignUp",
        element: <SignUp/>
    },
    {
      path: "/SignIn",
      element: <SignIn/>
    },
    {
      path: "/ForgotPassword",
      element: <ForgotPassword/>
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
