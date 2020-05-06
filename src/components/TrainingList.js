import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Moment from 'react-moment'
import DispCustomer from "./DispCustomer"
import Button from '@material-ui/core/Button';

export default function TrainingList() {
  const [trainings, setTrainings] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState('');

  useEffect(() => {
    getTrainings();
  }, []);

  const getTrainings = () => {
    fetch("https://customerrest.herokuapp.com/api/trainings")
      .then(response => response.json())
      .then(data => setTrainings(data.content))
      .then(err => console.error(err));
  };

  const deleteTraining = link => {
    if (window.confirm("Are you sure?")) {
      fetch(link, { method: "DELETE" })
        .then(_ => getTrainings())
        .then(_ => {
            setMsg('Training deleted');
            setOpen(true)
        })
        .catch(err => console.error(err));
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      Header: "Activity",
      accessor: "activity"
    },
    {
      Header: "Duration",
      accessor: "duration"
    },
    {
      Header: "Date",
      Cell: row => (
        <Moment format="DD.MM.YYYY HH:MM">
          {row.original.date}
        </Moment>
      )
    },
    {
      Header: "Customer",
      Cell: row => (
        <DispCustomer customer={row.original} />
      )
    },
    {
      accessor: "links[0].href",
      Cell: row => (
          <Button color="secondary"
          size="small" 
          onClick={() => deleteTraining(row.value)}>Delete</Button>
      )
  }
  ];
  return (
    console.log(trainings),
    <div>
      <ReactTable
        filterable={true}
        defaultPageSize={15}
        data={trainings}
        columns={columns}
      />
      {/* <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message= {msg}
      /> */}
    </div>
  );
}
