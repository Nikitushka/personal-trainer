import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

export default function Calendarino() {
    const [trainings, setTrainings] = React.useState([]);

    useEffect(() => {
        getTrainingsAndCustomer();
      }, []);

      const getTrainingsAndCustomer = () => {
        fetch("https://customerrest.herokuapp.com/gettrainings")
        .then(response => response.json())
        .then(data => setTrainings(data))
        .then(err => console.error(err));
    };

    const events = trainings.map(event => (
        {
            start: moment(event.date).toDate(),
            end: moment(event.date)
            .add(event.duration, "minutes")
            .toDate(),
            title: event.activity + " / " + event.customer.firstname + " " + event.customer.lastname
    }));

    return (
        <div>
            <Calendar
            localizer={localizer}
            events={events}
            defaultView="month"
            defaultDate={new Date()}
            style={{ height: "100vh" }}
            />
        </div>
    );

}