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

function toggleLang(){
  
}
useEffect(()=>{
  const newArray=translations.filter(item=>(item.language==language))
  const newArray1=newArray.map(item=>(item.words))
 // console.log(newArray1);
   setWord(newArray1)
  // console.log(words)
  // newArray1.map(item=>console.log(item.home))
},[language])
useEffect(()=>{
//   const newArray=translations.filter(item=>(item.language==language))
//   const newArray1=newArray.map(item=>(item.words))
//  // console.log(newArray1);
//    setWord(newArray1)
   console.log(words)
   words.map(item=>console.log(item.home))
},[words])
const changeLanguage=(lang)=>{
  
  if (lang=="فارسی"){
    // setLanguage((language)=>(language="Persian"))
    setLanguage(()=>"Persian")
    
  }
  if (lang=="English"){
    setLanguage(()=>"English")
  }  
   // console.log(lang)
    
       
}


  return <LanguageContext.Provider value={{language,changeLanguage,words}}>{children}</LanguageContext.Provider>;
}

const LanguageContext=createContext()

const useLanguage=()=>{
  const value=useContext(LanguageContext) 
  return value
}
export { LanguageProvider ,LanguageContext,useLanguage};
