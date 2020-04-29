import React, { useState, useEffect } from "react";
import ReactTable from "react-table-v6";
import "react-table-v6/react-table.css";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import DispTraining from './DispTraining'

export default function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [msg, setMsg] = React.useState('');

  useEffect(() => {
    getCustomers();
  }, []);

  const getCustomers = () => {
    fetch("https://customerrest.herokuapp.com/api/customers")
      .then(response => response.json())
      .then(data => setCustomers(data.content))
      .then(err => console.error(err));
  };


  // const deleteCustomer = link => {
  //   if (window.confirm("Are you sure?")) {
  //     fetch(link, { method: "DELETE" })
  //       .then(_ => getCustomers())
  //       .then(_ => {
  //           setMsg('Customer deleted');
  //           setOpen(true)
  //       })
  //       .catch(err => console.error(err));
  //   }
  // };

  // const addCustomer = Customer => {
  //   fetch("https://carstockrest.herokuapp.com/cars", {
  //     method: "POST",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(customer)
  //   })
  //   .then(_ => getCustomers())
  //   .then(_ => {
  //       setMsg('New customer added')
  //       setOpen(true)
  //   } )
  //   .catch(err => console.error(err))
  // };

  // const updateCustomer = (link, customers) => {
  //   fetch(link, {
  //     method: "PUT",
  //     headers: { "Content-Type": "application/json" },
  //     body: JSON.stringify(customers)
  //   })
  //   .then(_ => getCustomers())
  //   .then(_ => {
  //       setMsg('Customer updated')
  //       setOpen(true)
  //   } )
  //   .catch(err => console.error(err))
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      Header: "Firstname",
      accessor: "firstname"
    },
    {
      Header: "Lastname",
      accessor: "lastname"
    },
    {
      Header: "Street address",
      accessor: "streetaddress"
    },
    {
      Header: "City",
      accessor: "city"
    },
    {
      Header: "Postcode",
      accessor: "postcode"
    },
    {
      Header: "Email address",
      accessor: "email"
    },
    {
      Header: "Phone Number",
      accessor: "phone"
    },
    {
      Header: "Trainings",
      Cell: row => (
        <DispTraining trainings={row.original} />
      )
    },
    // {
    //     Cell: row => (<EditCustomer updateCustomer={updateCustomer} customers={row.original} />)
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
    //       onClick={() => deleteCustomer(row.value)}
    //     >
    //       Delete
    //     </Button>
    //   )
    // }
  ];

  return (
    <div>
      {/* <AddCustomer addCustomer={addCustomer} /> */}
      <ReactTable
        filterable={true}
        defaultPageSize={12}
        data={customers}
        columns={columns}
      />
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
        message= {msg}
      />
    </div>
  );
}
