import React from 'react'
import {Dialog, DialogTitle, DialogContent, Typography,DialogActions,Button} from "@material-ui/core";
import ClearIcon from '@material-ui/icons/Clear';

const Popup = (props) => {
    const {openPopup, setOpenPopup, users, userId, handleCloseDialog} = props;
    // const {} = users;
    return (
        <>
            <Dialog open={openPopup} onClose={handleCloseDialog}>
                <DialogTitle >User Details</DialogTitle>
                    {
                        users.map(user=>(
                            user.id === userId 
                            && 
                            <>
                            <DialogContent dividers>
                            <Typography variant="h6" color="textPrimary"><strong>Id:</strong> {user.id}</Typography>
                            <Typography variant="h6"><strong>Name: </strong> {user.name}</Typography>
                            <Typography variant="h6"><strong>UserName: </strong> {user.username}</Typography>
                            <Typography variant="h6"><strong>Email:</strong> {user.email}</Typography>
                            <Typography variant="h6"><strong>Phone:</strong> {user.phone}</Typography>
                            </DialogContent>
                            <DialogActions>
                                <Button color="secondary" variant="contained" onClick={handleCloseDialog}><ClearIcon /></Button>
                            </DialogActions>
                            </>
                        ))
                    }
            </Dialog>  
        </>
    )
}

export default Popup
