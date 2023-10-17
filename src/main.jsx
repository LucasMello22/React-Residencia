import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import App2 from './App2.jsx'
import Home from './routers/Home/Home.jsx';

import Mentor from './routers/mentor/MentorInicial.jsx';
import MenTurma from './routers/mentor/MentorTurmas.jsx';
import MenDiscussao from './routers/mentor/MentorDiscussao.jsx';
import MenCalendario from './routers/mentor/MentorCalendario.jsx';
import Singin from './routers/Singin/Singin.jsx'
import Singup from './routers/Singup/Singup.jsx'

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
      {
        path: "/singin",
        element: <Singin />,
      }, 
      {
        path: "/singup",
        element: <Singup />,
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
      {
        path: "/mentor/turma",
        element: <MenTurma />,
      },
      {
        path: "/mentor/discussao",
        element: <MenDiscussao />,
      },   
      {
        path: "/mentor/calendario",
        element: <MenCalendario />,
      }
    ],
    }
    

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  
    <RouterProvider router={router} />
  </React.StrictMode>,
)
