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
import Calendar from './components/app/Appointment/Calendar';
import NewAppointment from './components/app/Appointment/NewAppointment';
import AddTeamMemberForm from './components/app/Team/AddTeamMemberForm';
import TeamMembers from './components/app/Team/TeamMember';
import AddTeamMember from './components/app/Team/AddTeamMember';
import BusinessSettings from './components/app/Team/BusinessSettings';
import AddViaEmail from './components/app/Team/AddViaEmail';


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
      },
      {
        path:'',
        element:<Calendar/>
      },
      {
        path:'businessSettings',
        element:<BusinessSettings/>
      },
      {
        path:'teamMembers',
        element:<TeamMembers/>
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
  {
    path:'/newAppointment',
    element:<NewAppointment/>
  },
  {
    path:'/addTeamMemberForm',
    element:<AddTeamMemberForm/>
  },
  {
    path:'/addTeamMember',
    element:<AddTeamMember/>
  },
  {
    path:'/addViaEmail',
    element:<AddViaEmail/>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

reportWebVitals();
