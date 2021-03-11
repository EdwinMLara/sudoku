import React from 'react'
import Cuadro from './Cuadro'

function Tablero(props) {
    let tablero = props.cuadros;
    return (
        <div className="tablero">
           {tablero.map( (tab, index) =>{
               return ( <Cuadro 
                            key={index+tab.tablero} 
                            id={tab.id} value={tab.id} 
                            tablero={tab.tablero} 
                            onClick={props.onClick}/> )
           })}
        </div>
    )
}

export default Tablero

