import './App.css';
import React, {useState,useRef,useEffect} from "react";

function App() {

  return (
    <div>
      <Saludo destinatario = "Mundo"></Saludo>
    </div>
  );

}

function Saludo(props) {
  
  return (
    <div><h1>Hola {props.destinatario}</h1></div>
  )
}
export default App;
