/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import {useLanguage,LanguageContext} from "./context"
import { createContext,useContext } from "react";


import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";

export default function Navbar({children}) {

  const {language,changeLanguage,words}=useLanguage();

  const handleLang=(e)=>{
    changeLanguage(e.target.innerHTML)
    
  }

  return (
    <div>
      {words.map(item=>(
    <ul className="nav nav-tabs">
      
      <li className="nav-item">
        <a className="nav-link" href="#" >
          {item.home}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {item.events}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {item.aboutUs}
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          {item.contactUs}
        </a>
      </li>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          role="button"
          aria-expanded="false"
          data-bs-toggle="dropdown"
        >
          {item.language}
        </a>
        <ul className="dropdown-menu">
          <li className="nav-item">
            <a className="dropdown-item" onClick={handleLang}>
              فارسی
            </a>
          </li>
          <li className="nav-item">
            <a className="dropdown-item"  onClick={handleLang}>
              English
            </a>
          </li>
        </ul>
      </li>
    </ul>
     ))} 
    </div>
  );
}
