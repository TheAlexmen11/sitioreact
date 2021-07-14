import React from 'react'
import "./C03compCss.css"
import style from './C03compCssObj.js'
const C03componenteConCss = () => {
    return (
        <div className="marcoComponente">
            <h4>Componente 4. con formas de definir estilos</h4>
            <button style={{background:'green',color:'blue',adding:'3px'}}>
                Boton 1 con estilos en linea de atributos (definidos como objeto)
            </button>
            <hr/>
            <button>
                boton 2 con estilos en archivo css (normal)
            </button>
            <br/>
            <button style={style.estilos1}>
                boton 3 con estilos en archivo js (Definico como objeto )
            </button>
        </div>

    )
}

export default C03componenteConCss
