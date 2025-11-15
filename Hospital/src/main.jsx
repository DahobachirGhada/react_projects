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
import PasswordReset from './pages/medecin/password_reset';
import SetNewPassword from './pages/medecin/set_new_password';
import DashBoard from './pages/medecin/Dashboard';
import DynamicChart from './pages/medecin/PatientOverviewCHART';

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
    },
    {
      path: "/PasswordReset",
      element: <PasswordReset/>
    },
    {
      path: "/SetNewPassword",
      element: <SetNewPassword/>
    },
    {
      path: "/DashBoard",
      element: <DashBoard/>
    }
]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
