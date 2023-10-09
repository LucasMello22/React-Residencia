import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Home from './router\'s/Home.jsx';
import Contact from './router\'s/Contact.jsx';

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
        path: "contact",
        element: <Contact />,
      },
      {
        path: "/",
        element: <Home />,
      },
    ],
    }
    

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
