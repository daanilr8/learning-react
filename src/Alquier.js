import React, {useState,useRef,useEffect} from "react";
import ComponenteMultiple from "./components/componenteMultiple";


function Alquiler(){

    const [dias,setDias] = useState(0);
    const [opcion, setOpcion] = useState("Hotel");

    const selectorHotelCoche = (e) => {
        setOpcion(e.target.value);
    }

    
    return(
        <div>

        <select onChange = {selectorHotelCoche}>
            <option value="Hotel">Hotel</option>
            <option value="Coche">Coche</option>
        </select>

        <input type="text" onChange = {e=>setDias(e.target.value)} placeholder="Selecciona el numero de días"></input>

        {opcion === "Hotel" && <ComponenteMultiple opcion = {1} dias = {dias}></ComponenteMultiple>}
        {opcion === "Coche" && <ComponenteMultiple opcion = {2} dias = {dias}></ComponenteMultiple>}
        </div>
    )

}

export default Alquiler