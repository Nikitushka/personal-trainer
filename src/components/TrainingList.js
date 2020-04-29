import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Moment from 'react-moment'
import DispCustomer from "./DispCustomer"

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

//   const deleteTraining = link => {
//     if (window.confirm("Are you sure?")) {
//       fetch(link, { method: "DELETE" })
//         .then(_ => getCars())
//         .then(_ => {
//             setMsg('Car deleted');
//             setOpen(true)
//         })
//         .catch(err => console.error(err));
//     }
//   };

  // const addTraining = car => {
  //   fetch("https://carstockrest.herokuapp.com/cars", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(car)
  //   })
  //   .then(_ => getCars())
  //   .then(_ => {
  //       setMsg('New car added')
  //       setOpen(true)
  //   } )
  //   .catch(err => console.error(err))
  // };

  // const updateTraining = (link, car) => {
  //   fetch(link, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(car)
  //   })
  //   .then(_ => getCars())
  //   .then(_ => {
  //       setMsg('Car updated')
  //       setOpen(true)
  //   } )
  //   .catch(err => console.error(err))
  // };

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
        <Moment format="DD.MM.YYYY">
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
    // {
    //     Cell: row => (<Edittraining updateTraining={updateTraining} trainings={row.original} />)
    // },
    // {
    //   accessor: "_links.self.href",
    //   filterable: false,
    //   sortable: false,
    //   minWidth: 60,
    //   Cell: row => (
    //     <Button
    //       color="secondary"
    //       size="small"
    //       onClick={() => deleteTraining(row.value)}
    //     >
    //       Delete
    //     </Button>
    //   )
    // }
  ];
  return (
    console.log(trainings),
    <div>
      {/* <Addcar addTraining={addTraining} /> */}
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
