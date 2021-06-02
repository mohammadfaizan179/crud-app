import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./Navbar.css";

const useStyles = makeStyles((theme)=>({
    navLinks:{
        textDecoration: "none",
        marginRight: 20,
        color: "#fff",
        FontSize: "3px",
        
    }
}))
const Navbar = () => {
    const classes = useStyles();

    return (
        <>
            <AppBar position="static">
                <Toolbar>
                    {/* <Typography>CRUD Application</Typography> */}
                    <NavLink className={classes.navLinks} to="./">CRUD Application</NavLink>
                    <NavLink className={classes.navLinks} to="/allusers">ALl Users</NavLink>
                    <NavLink className={classes.navLinks} to="/addusers">Add User</NavLink>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
