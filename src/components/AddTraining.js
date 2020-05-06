import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    DateTimePicker,
  } from '@material-ui/pickers';
  import Moment from 'react-moment';

export default function AddTraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
       date: new Date(),
       activity: "",
       duration: 0,
       customer: props.customer
    });

    // on date change set training date
    const handleDateChange = (date) => {
        console.log(date)
        date = date.toISOString()
        console.log(date)
        setTraining({
            ...training, date: date
        });
        }

    // displays the calendar elements
    const DisplayCalendar = () => 
    <MuiPickersUtilsProvider utils={DateFnsUtils}>
        <DateTimePicker
            onChange={(date) => handleDateChange(date)}
            format="dd.MM.yyyy HH:MM"
            margin="dense"
            inputProps={{ "data-testid" : "date"}}
            name="date"
            showTodayButton
            ampm="false"
            autoOk
        label="Date"
        value={training.date}
        KeyboardButtonProps={{
        'aria-label': 'change date',
        }}
        />
    </MuiPickersUtilsProvider>;

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setTraining({...training, customer: props.customer})
        props.addTraining(training);
        setTraining({
            date: "",
            duration: 0,
            activity: "",
            customer: ""
        })
        setOpen(false);
    }

    const handleCancel = () => {
        setOpen(false);
    }

    const inputChanged = event => {
        setTraining({...training, [event.target.name]: event.target.value});
    }
    return (
        <div>
        <Button
          style={{ margin: 10 }}
          variant="outlined"
          color="primary"
          onClick={handleClickOpen}
        >
          Add
        </Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle id="form-dialog-title">Add New Training</DialogTitle>
          <DialogContent>
          <DisplayCalendar />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Activity"
                        name="activity"
                        value={training.activity}
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Duration"
                        name="duration"
                        value={training.duration}
                        onChange={e => inputChanged(e)}
                        fullWidth
                    />

                    </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel} color="secondary">
                        Cancel
                    </Button>
                    <Button onClick={handleClose} color="primary">
                        Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}