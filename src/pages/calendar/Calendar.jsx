import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { initialEvents } from "../../data";
import "./calendar.scss";
// import {
//   Box,
//   List,
//   ListItem,
//   ListItemText,
//   Typography,
//   useTheme,
// } from "@mui/material ";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState(initialEvents);

  const handleClick = (selected) => {
    console.log(selected);
    const title = prompt("please enter a new title for your event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      setCurrentEvents([
        ...currentEvents,
        {
          id: currentEvents.length + 1,
          title: title,
          start: selected.dateStr,
          end: selected.endStr,
          allDay: selected.allDay,
        },
      ]);
    }
  };

  return (
    <div className="calendar">
      <div className="calendarContainer">
        <div className="events">
          <h5>Events</h5>
          {currentEvents.map((event) => {
            return (
              <div className="event" key={event.id}>
                <label className="eventTitle">{event.title}</label>
                <label htmlFor="startDate">{event.start}</label>
              </div>
            );
          })}
        </div>
        <div className="calendar">
          <FullCalendar
            height="85vh"
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleClick}
            initialView="dayGridMonth"
            events={currentEvents}
            // eventsSet={(events) => setCurrentEvents(events)}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
