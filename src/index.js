import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

//  For react-flatpikr
import 'flatpickr/dist/flatpickr.css'

// Component CSS
import './components/app/promote/promote-css/StepThree.css'

//  Components
import { SideBar } from './components/navigation/SideBar';
import Deals from './components/app/promote/Deals';
import Integrations from './components/app/promote/Integrations';
import StepOne from './components/app/promote/StepOne';
import StepTwo from './components/app/promote/StepTwo';
import StepThree from './components/app/promote/StepThree';
import StepFour from './components/app/promote/StepFour';


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
        path:'promote/deals',
        element:<Deals/>
      },
      {
        path:'promote/integrations',
        element:<Integrations/>
      }
    ]
  },
  {
    path:'/promote/stepone',
    element:<StepOne/>
  },
  {
    path:'/promote/steptwo',
    element:<StepTwo/>
  },
  {
    path:'/promote/stepthree',
    element:<StepThree/>
  },
  {
    path:'/promote/stepfour',
    element:<StepFour/>
  },
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
