import './App.css';
import React, {useState,useRef,useEffect} from "react";
import PropTypes from "prop-types"

function App() {

  const usuario = {
    nombre:"Juan",
    apellido:"Diaz",
    edad:"18",
    genero:"masculino"
  }

  return (
    <div>
      <Saludo usuario = {usuario}></Saludo>
    </div>
  );

}

function Saludo(props) {
  
  return (
    <div>
      {props.usuario.nombre? (<div><h1>Hola {props.usuario.nombre} {props.usuario.apellido}</h1>
      <p>Tienes {props.usuario.edad} años</p>
      <p>Y tu genero es {props.usuario.genero}</p></div>):
      <h1>No se ha proporcionado el nombre</h1>}
      </div>

  );
}
  Saludo.propTypes = {

    usuario:PropTypes.shape(
      {
        nombre:PropTypes.string.isRequired //El nombre del usuario es requerido, si no dara un error en consola.
      }
    ).isRequired
  }
  
export default App;
