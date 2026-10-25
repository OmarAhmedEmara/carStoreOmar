import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'
const apiValue = createContext();


function AllData({children}) {
    const [text , setText] = useState([]);
    useEffect(()=>{
     axios.get("https://lisp-reversion-undertone.ngrok-free.dev/api/cars")
     .then((element)=>{
        const cars = element.data && element.data.data;
        if (Array.isArray(cars)) {
          setText(cars)
        }
     })
     .catch((error)=>{
        console.error(error)
     })
    },[]);
  return (
   <apiValue.Provider value={text}>
      {children}
   </apiValue.Provider>
  )
}

export {AllData,apiValue};