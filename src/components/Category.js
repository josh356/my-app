import React from "react";
import { Link } from "react-router-dom";

function Category(props){
    return(
        <div className = "menuItem">
            <Link to = {props.name}>
                <img src = {props.image} alt = {""}/>
                <p>{props.name}</p>
            </Link>
        </div>
    )
}

export default Category