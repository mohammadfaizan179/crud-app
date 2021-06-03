import React,{useState} from 'react'
import {FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography} from "@material-ui/core";
import {addUsers} from "../Services/api";
import {useHistory} from "react-router-dom";
import "./AddUsers.css";
import AddIcon from '@material-ui/icons/Add';

const initailValues = {
    name: "",
    username: "",
    email: "",
    // id: "",
    phone: "",
}
const AddUser = () => {
    const [users, setUsers] = useState(initailValues)
    const {name, username, email, phone} = users;
    const history = useHistory();

    const handleChange = (e) =>{
        setUsers({...users, [e.target.name]: e.target.value});
    }
    const addUserDetails = async() =>{
        await addUsers(users);
        history.push("./all");
    }
    return (
        <>
            <div className="addUserWraper">
            <FormGroup className="addUser">
                <Typography variant="h4">Add User</Typography>
                
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
                <Button onClick={()=>addUserDetails()} variant="contained" color="primary"><AddIcon /></Button>
            </div>
        </>
    )
}

export default AddUser
