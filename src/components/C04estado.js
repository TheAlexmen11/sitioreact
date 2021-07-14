import React, {useState} from 'react'

const EjemploDeEstado = () => {
   
    const [numero , setNumero] = useState(0);

    const aumentar = () => {
        console.log("Mensaje de contador");
        setNumero(numero + 1);
    }
    return (
        <div style={{backgroundColor:'yellowgreen'}}>
            <h4>Componente 4 Ejemplo con estado</h4>
            <button onClick={aumentar}>Contador 2 con la llamada a funcion</button>
            <span>ingremento de contador 2 : {numero}</span>
        </div>
    )
}

export default EjemploDeEstado;