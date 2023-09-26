import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import { initialEvents } from "../../data";
import "./calendar.scss";
import { useEffect } from "react";
import EventModal from "./EventModal";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import { EventClickArg } from "@fullcalendar/core/index.js";
import { DateClickArg } from "@fullcalendar/interaction";
import { EventInput } from "@fullcalendar/core/index.js";

const Calendar = () => {
  const [currentEvents, setCurrentEvents] =
    useState<EventInput[]>(initialEvents);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState({
    id: "",
    title: "",
    start: "",
  });

  type event = {
    id: string;
    title: string;
    start: string;
  };

  const handleDateClick = (selected: DateClickArg) => {
    console.log("event click arg " + selected);
    setSelectedEvent({
      id: (currentEvents.length + 1).toString(),
      title: "",
      start: selected.dateStr,
    });
    setShowCreateModal(true);
  };

  const handleCreate = (data: event) => {
    // const title = prompt("please enter a new title for your event");
    // const calendarApi = selected.view.calendar;
    // calendarApi.unselect();

    setCurrentEvents([...currentEvents, data]);
    setShowCreateModal(false);
  };

  const handleEventClick = (selected: EventClickArg) => {
    console.log(selected);
    setSelectedEvent(selected.event);
    setShowEditModal(true);
  };

  const handleUpdate = (data: event) => {
    //update
    setCurrentEvents(
      currentEvents.map((event: EventInput) => {
        if (event.id == data.id) {
          return { ...event, title: data.title };
        } else {
          return event;
        }
      })
    );

    setShowEditModal(false);
  };

  const handleDelete = (id: string) => {
    setCurrentEvents(
      currentEvents.filter((event: EventInput) => event.id !== id)
    );
  };

  useEffect(() => {
    // console.log(currentEvents);
  }, [currentEvents]);

  return (
    <div className="calendar">
      <div className="calendarContainer">
        <div className="events">
          <h5>Events</h5>
          {currentEvents.map((event: EventInput) => {
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
                  <label htmlFor="startDate">{event.start?.toString()}</label>
                  <DeleteOutlineIcon
                    style={{
                      color: "red",
                      fontSize: "20px",
                      cursor: "pointer",
                    }}
                    onClick={() => handleDelete(event.id!)}
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
