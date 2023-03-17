import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { SideBar } from './components/navigation/SideBar';
import Deals from './components/app/promote/Deals';


const router = createBrowserRouter([
  {
    path:'/',
    element:<SideBar/>,
    children:[
      {
        path:'app',
        element:<App/>
      },
      {
        path:'deal',
        element:<Deals/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
