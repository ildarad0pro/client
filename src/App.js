//import { useState } from "react"; 
import React, { useContext, useEffect, useState } from "react"; 
import { BrowserRouter } from "react-router-dom"; 
import AppRouter from "./components/AppRouter"; 
import { observer } from "mobx-react-lite"; 
import { Context } from "."; 
import { check } from "./http/userAPI"; 
import { Spinner } from "react-bootstrap"; 
import './styles/reset.css';
import './styles/variables.css';
import ElegantNavigation from "./components/ElegantNavigation";
import SmartHomeNavigation from "./components/SmartHomeNavigation";

 
 
const App = observer(() => { 
  const {user} = useContext(Context) 
  const [loading, setLoading] =  useState(true) 
 
  useEffect( () => { 
    setTimeout(() => {
    check().then(data =>{ 
      user.setUser(true) 
      user.setIsAuth(true) 
    }).finally(() => setLoading(false))
  },1000)
  }, []) 
  
  if(loading){ 
    return <Spinner animation={"grow"}/> 
  } 
 
  return ( 
    
   
 
  <BrowserRouter> 
  <>
      <ElegantNavigation />
      <AppRouter/> 
      <SmartHomeNavigation/>
    </>
  </BrowserRouter> 
  ); 
}); 
 
export default App;