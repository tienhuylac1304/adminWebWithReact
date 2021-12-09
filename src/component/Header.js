import React from "react";
import './css/Header.css'

export default function Header({logo}){
    return(
      <div className="header_content">
         <a href="#">
           <span className="header_icon">
            <img src={logo}></img>
           </span>
           <span className="header_title">
            E-Laptop
           </span>
         </a>
       </div>
    );
}