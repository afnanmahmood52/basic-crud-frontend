import React from 'react'
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
//import ClearIcon from "@material-ui/icons/Clear";

import DeleteIcon from '@material-ui/icons/Delete';
import Axios from 'axios';


export default function DeleteItem(props) {

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const deleteItem = (id) =>{
        console.log(id)
        Axios.delete(`http://localhost:4000/delete/${id}`)
        handleClose()
    }

    return (
        <div>
            <Button className="delete_button" variant="contained" color="secondary" startIcon={<DeleteIcon />} onClick={handleClickOpen}>DELETE</Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                Are your sure you want to delete this Item?
              </DialogTitle>

              <DialogActions>
                <Button
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                  startIcon={<CancelIcon />}
                >
                  NO
                </Button>
                <Button
                  onClick={()=>{
                    deleteItem(props.id);
                  }}
                  variant="contained"
                  color="secondary"
                  startIcon={<DeleteForeverIcon />}
                >
                  YES
                </Button>
              </DialogActions>
            </Dialog>
        </div>
    )
}
