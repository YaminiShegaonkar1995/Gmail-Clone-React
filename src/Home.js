import React from "react";
import './Home.css';
import { Link } from "react-router-dom";
import AppsIcon from '@mui/icons-material/Apps';
import Avatar from '@mui/material/Avatar';
import Search from "./Search";

const Home=()=>{
    return(
        <>
    <div className="home">
        <div className="home_header">
            <div className="home_headerLeft">
                <Link to='/about'>about</Link>
                <Link to='/store'>Store</Link>
            </div>

            <div className="home_headerRight">
                <Link to='/gmail'>gmail</Link>
                   <Link to='/images'>images</Link>
                        <AppsIcon />
                        <Avatar />
            </div>
        </div>
        <div className="home_body">
        <img 
            src = "https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"  alt="" />   

            <div className="home_inputContainer">
                <Search  />
            </div>
          
            </div>


           
    </div>
        
        </>
    )
}
export default Home;