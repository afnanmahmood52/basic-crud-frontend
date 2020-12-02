import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

import UpdateIcon from '@material-ui/icons/Update';

import Axios from 'axios'

export default function UpdateItem(props) {
    const [open, setOpen] = React.useState(false);

    const [foodName, setfoodName] = React.useState(props.foodName)
    const [NoOfTimes, setNoOfTimes] = React.useState(props.noOfTimes)

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleUpdate = () =>{
        // Check if the transaction amount or the transaction value field
        // is empty We should return in that case
    
        if(!foodName || !NoOfTimes){
            if(!foodName && !NoOfTimes){
                alert("Food Name and No of Times can't be empty!!!")
                return
            }

            if(!foodName){
                alert("Food Name can't be empty!!!")
                return
            }
        
            if(!NoOfTimes){
                alert("No of Times can't be empty!!!")
                return
            }
        
        }

        console.log(foodName)
        console.log(NoOfTimes)
        console.log(props.id)

        Axios.put("http://localhost:4000/update",{
          id: props.id,
          foodName: foodName,
          NoOfTimes: NoOfTimes
        })

        handleClose()
    }

    const foodNameChange =(event)=>{
        event.preventDefault()
        setfoodName(event.target.value)
    }

    const NoOfTimesChange =(event)=>{
        event.preventDefault()
        setNoOfTimes(event.target.value)
    }

    return (
        <div>
      <Button className="delete_btn" variant="contained" color="primary" startIcon={<UpdateIcon />} onClick={handleClickOpen}>UPDATE</Button>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Update the value of Food</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the details which you need to update.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="foodName"
            label="Food Name"
            type="text"
            fullWidth
            defaultValue={foodName}
            onChange={foodNameChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="eatenTimes"
            label="How manys days Since Eat"
            type="number"
            fullWidth
            InputProps={{
                inputProps: { 
                    min: 0,
                }
            }}
            defaultValue={NoOfTimes}
            onChange={NoOfTimesChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary" variant="contained">
            Cancel
          </Button>
          <Button onClick={handleUpdate} color="primary" variant="contained">
            Update
          </Button>
        </DialogActions>
      </Dialog>
            
        </div>
    )
}
