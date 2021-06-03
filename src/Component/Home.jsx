import React from 'react'
import crud from "../images/crud.jpg";
import "./Home.css";

const Home = () => {
    return (
        <>
            <div className="homeWraper">
                <img className="homePic" src={crud} alt="Crud Application" />
            </div>
        </>
    )
}

export default Home
