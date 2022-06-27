import React, { useEffect, useState } from "react";
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




const LanguageProvider=({ children }) =>{

const [language,setLanguage]=useState("English")
const [words,setWord]=useState([])


useEffect(()=>{
  const newArray=translations.filter(item=>(item.language==language))
  const newArray1=newArray.map(item=>(item.words))
   setWord(newArray1)
  
},[language])

const changeLanguage=(lang)=>{
  
  if (lang=="فارسی"){
    setLanguage(()=>"Persian")
    
  }
  if (lang=="English"){
    setLanguage(()=>"English")
  }  
    
       
}


  return <LanguageContext.Provider value={{language,changeLanguage,words}}>{children}</LanguageContext.Provider>;
}

const LanguageContext=createContext()

const useLanguage=()=>{
  const value=useContext(LanguageContext) 
  return value
}
export { LanguageProvider ,LanguageContext,useLanguage};
