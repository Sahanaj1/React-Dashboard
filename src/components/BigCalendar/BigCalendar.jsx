import React, { useState } from 'react';
import moment from 'moment';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import "./bigCalendar.scss"
const localizer = momentLocalizer(moment);

const eventsList = [
  {
    id: 1,
    title: 'Event 1',
    start: new Date('2023-04-01T08:00:00.000Z'),
    end: new Date('2023-04-01T10:00:00.000Z'),
  },
  {
    id: 2,
    title: 'Event 2',
    start: new Date('2023-04-02T08:00:00.000Z'),
    end: new Date('2023-04-02T10:00:00.000Z'),
  },
  {
    id: 3,
    title: 'Event 3',
    start: new Date('2023-04-03T08:00:00.000Z'),
    end: new Date('2023-04-03T10:00:00.000Z'),
  },
];

const CalendarComponent = () => {
  const [events, setEvents] = useState(eventsList);

  const handleSelect = ({ start, end }) => {
    const title = window.prompt('Enter the event title:');
    if (title) {
      const newEvent = {
        id: events.length + 1,
        title,
        start,
        end,
      };
      setEvents([...events, newEvent]);
    }
  };

  return (
    <div className='CalendarComp'>
    <div className='assistedText'>AI assissted PM Scheduler</div>
      <Calendar
      style={{height:'90%'}}
        selectable
        localizer={localizer}
        events={events}
        defaultView="month"
        views={['month', 'week', 'day']}
        onSelectSlot={handleSelect}
        onSelectEvent={(event) => alert(event.title)}
      />
    </div>
  );
};

export default CalendarComponent;
