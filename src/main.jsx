import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import Home from './routers/Home.jsx';
import Mentor from './routers/mentor/MentorInicial.jsx';

// configurando Router
import {
  createBrowserRouter, RouterProvider
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
    
    ],},
    {
    path: "/",
    element: <App2 />,
    children: [
      {
        path: "mentor",
        element: <Mentor />,
      },
    ],
    }
    

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
