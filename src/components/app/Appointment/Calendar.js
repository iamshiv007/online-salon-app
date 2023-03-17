import React from 'react'
import { useNavigate } from 'react-router-dom'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'

const TimeGraph = () => {
  //For select time area in graph (for appointments)
  // const [events, setEvents] = useState([])
  
  //For redirect
  const navigate = useNavigate()

  //Redirect to new appointment (click on graph empty field)
  const myFunOne = () => {
    navigate(`/newAppointment`)
  }


  return (
      <>
            <div style={{padding:"10px"}}>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="timeGridDay"
        headerToolbar={{
          center: 'today prev,next',
          end: 'dayGridMonth,timeGridWeek,timeGridDay'
        }}
        // events={events}
        eventColor='#A5DFF8'
        nowIndicator  
        dateClick = {myFunOne}
      />
    </div>
    <style>
      {/* for set costum style in timegraph */}
        {`
        .fc-timegrid-slots tbody tr {
          height: 40px;
        }
        @media (max-width: 767px) {
          .fc-header-toolbar {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
          }
          .fc-header-toolbar .fc-center {
            display: none;
          }
          .fc-header-toolbar .fc-left,
          .fc-header-toolbar .fc-right {
            width: 100%;
            text-align: center;
          }
          .fc-toolbar-chunk{
            padding-right:30px
          }
        }
          @media (max-width:650px){
            .fc-header-toolbar .fc-toolbar-chunk:first-child{
              margin-bottom:10px
            }
          }
          @media (max-width:415px){
            .fc-header-toolbar .fc-toolbar-chunk:last-child{
              margin-top:10px
            }
          }
        `}
      </style>
    </>
    )
}

export default TimeGraph

