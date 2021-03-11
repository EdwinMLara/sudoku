import React from 'react'

function Cuadro(props) {
    return (
        <button 
            className="cuadro" 
            id={props.id || undefined}
            value={props.value} 
            tablero={props.tablero}
            onClick={props.onClick}>{props.value}</button>
    )
}

export default Cuadro
