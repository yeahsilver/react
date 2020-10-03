import React, { useState, useEffect } from 'react';
import AppRouter from "components/Router";
import {authService} from "fBase";

function App() {
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(()=>{
      authService.onAuthStateChanged((user) => {
      if(user){
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
      setInit(true);
    });
  }, [])
  setInterval(() => {
    
  },2000);
  
  return(
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn}/> : "Initializing..."}
    <footer>&copy; Nwittter {new Date().getFullYear()} </footer>
    </>
  )
}

export default App;