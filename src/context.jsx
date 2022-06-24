import React, { useState } from "react";
import { createContext,useContext } from "react";

const translations = [
  {
    language: "English",
    words: {
      home: "Home",
      events: "Events",
      aboutUs: "About Us",
      contactUs: "Contact Us",
      language: "Language",
    },
  },
  {
    language: "Persian",
    words: {
      home: "خانه",
      events: "رویداد ها",
      aboutUs: "درباره ما",
      contactUs: "تماس با ما",
      language: "زبان",
    },
  },
];




function LanguageProvider({ children }) {

const [language,setLanguage]=useState("English")
const [word,setWord]=useState("English")

const changeLanguage=(lang)=>{
    setLanguage(lang)
    console.log(language)
    // const newArray=translations.filter(item=>(item.language==lang))
    // console.log(newArray);
       
}


  return <LanguageContext.Provider value={{language,changeLanguage,word}}>{children}</LanguageContext.Provider>;
}

const LanguageContext=createContext()
const useLanguage=()=>{
  const value=useContext(LanguageContext) 
  return value
}
export { LanguageProvider ,LanguageContext,useLanguage};
