import React, {useState, useEffect } from 'react';
import AppRouter from "./Router";

function App(){
  const [init, setInit] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return(
    <>
    {init ? <AppRouter isLoggedIn={isLoggedIn} /> : "Initializing..."}
    </>
  )
}
export default App;