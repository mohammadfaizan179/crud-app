import React from 'react'
import crud from "../images/crud.jpg";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    homePic:{
        width: "700px",
        height:"400px",
        margin: "70px 100px 0px 350px",
    }
}))

const Home = () => {
    const classes = useStyles();
    return (
        <>
            <img className={classes.homePic} src={crud} alt="Crud Application" />
        </>
    )
}

export default Home
