import React from 'react'
import error from "../images/error.PNG";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme)=>({
    pageNotFound:{
        width: "600px",
        height:"500px",
        margin: "30px 100px 0px 400px",
    }
}))
const NotFound = () => {
    const classes = useStyles();

    return (
        <>  
            <img className={classes.pageNotFound} src={error} alt="Page Not Found"/>
        </>
    )
}

export default NotFound
