import ReactDOM from 'react-dom/client';
import React from 'react';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './home/pages/Home';
import Single from './home/pages/Single';
import Write from './home/pages/Write';
import Settings from './home/pages/Settings';
import Login from './home/pages/Login';
import Register from './home/pages/Register';
import { createBrowserRouter, RouterProvider  } from "react-router-dom";

 
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "write",
        element: <Write />,
      },
      {
        path: "single",
        element: <Single />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },

      ],
    },
  ],
)



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
