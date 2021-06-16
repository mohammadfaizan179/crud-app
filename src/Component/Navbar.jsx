import React from 'react'
import {AppBar, Toolbar, Typography, makeStyles} from "@material-ui/core";
import {NavLink} from "react-router-dom";
import "./Navbar.css";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Button} from "@material-ui/core";

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
                <span><Button component="a" href="https://mohammadfaizan179.github.io/portfolio/" size="small" className="portfolio_link"><ArrowBackIcon /></Button></span>
                    <NavLink className={classes.navLinks} to="./" exact>CRUD APP</NavLink>
                    <NavLink className={classes.navLinks} to="/all" exact>All Users</NavLink>
                    <NavLink className={classes.navLinks} to="/add" exact>Add User</NavLink>
                </Toolbar>
            </AppBar>

        </>
    )
}

export default Navbar
