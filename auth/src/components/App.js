import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AppRouter from "./Router";
import Footer from "./footer";

function App() {
  return (
    <div className="App">
      <AppRouter/>
      <Footer/>
    </div>

    
  );
}

export default App;
