const ComponenteMultiple = ({opcion,dias}) => {

    const calculoCosteHotel = () => {

        let coste = dias * 50;

        if(dias > 5) coste -= 35;
        else if(dias > 3) coste -=25;

        return <p>El coste de la estancia en el hotel es : {coste}</p>
    }

    const calculoCosteCoche = () => {

        let coste = dias * 45;

        if(dias > 7) coste -= 30;
        else if (dias > 5) coste -=15;

        return <p>El coste del alquiler del coche es : {coste}</p>

    }

    return <div> {opcion === 1?calculoCosteHotel() : opcion === 2 ? calculoCosteCoche() : ""}</div>
}
export default ComponenteMultiple;