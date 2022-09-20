import React from 'react'
import './peliculas.css'

export default function RenderDato(props) {
  return (
    <div className='card'>
        <ul>
        <img src={props.img} width="100px" />
            <li>  { props.titulo} </li>
            <li>  { props.contendo} </li>
        </ul>
    </div>
  )
};
