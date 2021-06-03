import React,{useState, useEffect} from 'react'
import {FormGroup, FormControl, InputLabel, Box, Input, Button, makeStyles, Typography} from "@material-ui/core";
import {editUsers, allUsers} from "../Services/api";
import {useHistory, useParams} from "react-router-dom";
import "./EditUser.css";
import AddIcon from '@material-ui/icons/Add';

const initailValues = {
    name: "",
    username: "",
    email: "",
    phone: "",
}
const EditUser = () => {
    const [users, setUsers] = useState(initailValues)
    const {name, username, email, phone} = users;
    const {id} = useParams();
    const history = useHistory();
    
    const handleChange = (e) =>{
        setUsers({...users, [e.target.name]: e.target.value});
    }
    const editUserDetails = async() =>{
        await editUsers(id, users);
        history.push("");
        history.push("./all");
    }

    const loadAllUsers = async() =>{
        const response = await allUsers(id);
        setUsers(response.data)
    }
    useEffect(()=>{
        loadAllUsers();
    },[])
    return (
        <>
            <div className="editUserWraper">
            <FormGroup className="editUser">
                <Typography variant="h4">Edit User</Typography>
                
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input value={name} name="name" onChange={(e)=>handleChange(e)}/> 
               </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input value={username} name="username" onChange={(e)=>handleChange(e)}/>
               </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input value={email} name="email" onChange={(e)=>handleChange(e)}/>
               </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input value={phone} name="phone" onChange={(e)=>handleChange(e)}/>
               </FormControl>
                <br />
            </FormGroup>
                <Button onClick={()=>editUserDetails()} variant="contained" color="primary"><AddIcon /></Button>
            </div>
        </>
    )
}

export default EditUser
