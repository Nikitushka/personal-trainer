import React, { useState, useEffect } from "react";
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';
  import _ from 'lodash';

export default function Statistics(){
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

    const activities = 
    _(trainings)
        .groupBy('activity')
        .map((obj, key) => ({
            'activity': key,
            'duration': _.sumBy(obj, 'duration')
        }))
        .value();

    const data = activities.map(event => (
        {
            name: event.activity, Duration: event.duration     
    }));

    return (
        console.log(activities),
        <div>
            <BarChart width={1000} height={600} data={data}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis label={{ value: 'Duration (min)', angle: -90, position: 'insideLeft'}} />
                <Tooltip />
                <Bar dataKey="Duration" fill="#4d5eff"></Bar>
            </BarChart>
        </div>
    )
}