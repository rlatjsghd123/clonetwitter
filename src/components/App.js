import React, {useEffect, useState} from "react";
import AppRouter from './Routes';
import {authService} from "../myFirebase"


function App() {
  const [isLoggendIn, setIsLoggendIn] = useState(false);
  const [init, setInit] = useState(false);
  useEffect(()=>{
    authService.onAuthStateChanged((user)=>{
      if(user){
        setIsLoggendIn(true)
      } else{
        setIsLoggendIn(false)
      }
      setInit(true)
    });
  },[])
  return (
    <div className="App">
      {init ? <AppRouter login={isLoggendIn}/> : "대기중..."}
    </div>
  );
}

export default App;
