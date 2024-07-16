import React from 'react'
import './Button.css'

export const Button = ({texto, color, funcion}) => {

    return (
        <button style={{backgroundColor: color}} onClick={funcion} > {texto}</button>
    )
}

