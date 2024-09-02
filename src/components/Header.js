import React from "react";
import "../components/header.css"

export default function Header(){
    return(
       
        <header className="header">
            <img className="header-image" src={require('../images/troll.jpg')} alt="Troll" />
            <h2 className="header-text">Meme Generator</h2>
         
       </header>
    )
}