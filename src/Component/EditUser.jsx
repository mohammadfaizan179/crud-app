import React,{useState, useEffect} from 'react'
import {FormGroup, FormControl, InputLabel, Box, Input, Button, makeStyles, Typography} from "@material-ui/core";
import {editUsers, allUsers} from "../Services/api";
import {useHistory, useParams} from "react-router-dom";
import "./EditUser.css";
import AddIcon from '@material-ui/icons/Add';
import {useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
    name: yup.string().required(),
    username: yup.string().required(),
    email: yup.string().email().required(),
    phone: yup.number().required().positive().integer().typeError("Not a valid phone number"),
});

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
    
    const { register, handleSubmit, formState: { errors }} = useForm({
        resolver: yupResolver(schema),
    });

    const handleChange = (e) =>{
        setUsers({...users, [e.target.name]: e.target.value});
    }

    const loadAllUsers = async() =>{
        const response = await allUsers(id);
        setUsers(response.data)
    }
    useEffect(()=>{
        loadAllUsers();
    },[])

    const onSubmit = async() => {
        await editUsers(id, users);
        history.push("");
        history.push("./all");
    }

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="editUserWraper">
            <FormGroup className="editUser">
                <Typography variant="h4">Edit User</Typography>
                
                <FormControl>
                    <InputLabel>Name</InputLabel>
                    <Input 
                        value={name} 
                        name="name" 
                        {...register("name", {
                            required: "Required",
                        })}
                        onChange={(e)=>handleChange(e)}
                    /> 
                    <span>{errors.name?.message}</span>
               </FormControl>
                <FormControl>
                    <InputLabel>UserName</InputLabel>
                    <Input 
                        value={username} 
                        name="username" 
                        {...register("username", {
                            required: "Required",
                        })}
                        onChange={(e)=>handleChange(e)}
                    />
                    <span>{errors.username?.message}</span>
               </FormControl>
                <FormControl>
                    <InputLabel>Email</InputLabel>
                    <Input 
                        value={email} 
                        name="email" 
                        {...register("email", {
                            required: "Required",
                        })}
                        onChange={(e)=>handleChange(e)}
                    />
                    <span>{errors.email?.message}</span>
               </FormControl>
                <FormControl>
                    <InputLabel>Phone</InputLabel>
                    <Input 
                        value={phone} 
                        name="phone"
                        {...register("phone", {
                            required: "Required",
                        })} 
                        onChange={(e)=>handleChange(e)}
                    />
                    <span>{errors.phone?.message}</span>
               </FormControl>
                <br />
            </FormGroup>
            <Button type="submit" variant="contained" color="primary"><AddIcon /></Button>
            </div>
            </form>
        </>
    )
}

export default EditUser
