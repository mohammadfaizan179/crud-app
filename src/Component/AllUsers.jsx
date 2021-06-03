import React,{useEffect, useState} from 'react'
import {allUsers} from "../Services/api";
import {TableContainer , Table, TableHead,TableCell,Button, TableRow, TableBody, makeStyles, Paper, Hidden, Box, Dialog, DialogTitle} from "@material-ui/core";
import {Link} from "react-router-dom";
import {deleteUser} from "../Services/api";
import "./AllUsers.css";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import Popup from "./Popup";

const useStyles = makeStyles((theme)=>({
    allUsersWraper:{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
    },
    table:{
        // border: "2px solid red",
        width: "80%",
        marginTop: "60px",
    },
    tHead:{
        "& > *":{

            color: "#ffffff",
            backgroundColor: "#3f51b5",
            fontSize: "18px",
            // border: "2px solid black",
        }
    },
    tBody:{
        "& > *":{
            fontSize: "16px",
            // border: "2px solid black",
        }
    },
    tableButtons:{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
    }
}))

const titles = ["Id, Name, User Name, Email, Phone"];

const AllUsers = () => {
const [users, setUsers] = useState([]);
const classes = useStyles();
const [openPopup, setOpenPopup] = useState(false)
const [userId, setUserId] = useState(null);

const getAllUsers = async() =>{
    const allUsersResponse = await allUsers();
    setUsers(allUsersResponse.data);
}

useEffect(()=>{
    getAllUsers();
},[])

const deleteUserData = async(id) =>{
    await deleteUser(id);
    getAllUsers();
}

const handleOpenDialog = (id) =>{
    setOpenPopup(true);
    setUserId(id);
}
const handleCloseDialog = () => {
    setOpenPopup(false);
};

return (
    <>
        <Hidden smDown>
        <div className={classes.allUsersWraper}>
        <TableContainer className={classes.table} component={Paper} elevation={9}>
        <Table >
            <TableHead>
                <TableRow className={classes.tHead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>UserName</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Actions</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user =>(         
                        <TableRow className={classes.tBody}>
                            <TableCell>{user.id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>{user.username}</TableCell>
                            <TableCell>{user.email}</TableCell>
                            <TableCell>{user.phone}</TableCell>
                            <TableCell>
                            <Box className={classes.tableButtons}>
                                <Button variant="contained" color="primary" onClick={()=> handleOpenDialog(user.id)} ><VisibilityIcon/></Button>
                                <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{margin: "8px"}}><EditIcon/></Button>
                                <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user.id)}><DeleteIcon /></Button>
                                
                            </Box>
                                
                            </TableCell>
                        </TableRow>
                    ))  
                }
            </TableBody>
        </Table>
        </TableContainer>
        </div>
        </Hidden> 
        <Popup
            handleCloseDialog = {handleCloseDialog}
            users = {users}
            userId = {userId} 
            openPopup = {openPopup}
            setOpenPopup = {setOpenPopup}
        />   
        {/* -------------------------------------------------------- */}
        <Hidden mdUp>
        <TableContainer>
        <Table >
            <TableHead>
                {
                    users.map(user=>(
                        <>
                        <div className="allUsersWraperRes">
                            <Box component={Paper} className="tableRes" elevation={9}>
                            <TableRow className="tHeadRes">
                                <TableCell>Id</TableCell>
                                <TableCell>{user.id}</TableCell>
                            </TableRow>
                            <TableRow className="tHeadRes">
                                <TableCell>Name</TableCell>
                                <TableCell>{user.name}</TableCell>
                            </TableRow>
                            <TableRow className="tHeadRes">
                                <TableCell>UserName</TableCell>
                                <TableCell>{user.username}</TableCell>
                            </TableRow>
                            <TableRow className="tHeadRes">
                                <TableCell>Email</TableCell>
                                <TableCell>{user.email}</TableCell>
                            </TableRow>
                            <TableRow className="tHeadRes">
                                <TableCell>Phone</TableCell>
                                <TableCell>{user.phone}</TableCell>
                            </TableRow>
                            </Box>
                        </div>
                        <div className="tableButtonsResWraper">
                            <TableRow className="tableButtonsRes">
                                <Button variant="contained" color="primary" onClick={()=> handleOpenDialog(user.id)} ><VisibilityIcon/></Button>           
                                <Button variant="contained" color="primary" component={Link} to={`/edit/${user.id}`} style={{margin: "8px"}}><EditIcon/></Button>
                                <Button variant="contained" color="secondary" onClick={()=> deleteUserData(user.id)}><DeleteIcon/></Button>
                            </TableRow>
                        </div>
                    </>
                    ))
                }

            </TableHead> 
        </Table>
        </TableContainer>
        
        </Hidden>
        
    </>

    )
}

export default AllUsers
