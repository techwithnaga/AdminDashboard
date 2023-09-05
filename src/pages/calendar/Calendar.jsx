import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { initialEvents } from "../../data";
import "./calendar.scss";
import { useEffect } from "react";
import EventModal from "./EventModal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] = useState(initialEvents);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({});

  const handleDateClick = (selected) => {
    setSelectedEvent({
      id: currentEvents.length + 1,
      title: "",
      start: selected.dateStr,
    });
    setShowCreateModal(true);
  };

  const handleCreate = (data) => {
    // const title = prompt("please enter a new title for your event");
    // const calendarApi = selected.view.calendar;
    // calendarApi.unselect();

    setCurrentEvents([...currentEvents, data]);
    setShowCreateModal(false);
  };

  const handleEventClick = (selected) => {
    setSelectedEvent(selected.event);
    setShowEditModal(true);
  };

  const handleUpdate = (data) => {
    //update
    setCurrentEvents(
      currentEvents.map((event) => {
        if (event.id == data.id) {
          return { ...event, title: data.title };
        } else {
          return event;
        }
      })
    );

    setShowEditModal(false);
  };

  const handleDelete = (id) => {
    setCurrentEvents(currentEvents.filter((event) => event.id !== id));
  };

  useEffect(() => {
    // console.log(currentEvents);
  }, [currentEvents]);

  return (
    <div className="calendar">
      <div className="calendarContainer">
        <div className="events">
          <h5>Events</h5>
          {currentEvents.map((event) => {
            return (
              <div className="event" key={event.id}>
                <label
                  className="eventTitle"
                  onClick={() => {
                    setSelectedEvent(event);
                    setShowEditModal(true);
                  }}
                >
                  {event.title}
                </label>
                <div className="eventFooter">
                  <label htmlFor="startDate">{event.start}</label>
                  <DeleteOutlineIcon
                    style={{
                      color: "red",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(event.id)}
                  ></DeleteOutlineIcon>
                </div>
              </div>
            );
          })}
        </div>
        <div className="calendar">
          <FullCalendar
            height="85vh"
            plugins={[dayGridPlugin, interactionPlugin]}
            dateClick={handleDateClick}
            initialView="dayGridMonth"
            events={currentEvents}
            editable={true}
            eventClick={handleEventClick}
          />
        </div>
      </div>

      {showEditModal && (
        <EventModal
          title="Edit"
          data={selectedEvent}
          setShowModal={setShowEditModal}
          handleUpdate={handleUpdate}
        ></EventModal>
      )}

      {showCreateModal && (
        <EventModal
          title="Create"
          setShowModal={setShowCreateModal}
          handleCreate={handleCreate}
          data={selectedEvent}
        ></EventModal>
      )}
    </div>
  );
};

export default Calendar;
