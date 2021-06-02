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
                    <NavLink className={classes.navLinks} to="./">CRUD APP</NavLink>
                    <NavLink className={classes.navLinks} to="/allusers">All Users</NavLink>
                    <NavLink className={classes.navLinks} to="/addusers">Add User</NavLink>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
