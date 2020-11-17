import React from 'react'
import './Character.css'; 

const Character = ({ name, status, species, gender, image , style}) => {

  return (
    <div style={style}>
      <div className='character'>
        <img src={image} className='character__image' alt={'Rick and Morty ' + name}/>
        <h2 className='character__name'> {name} </h2>
        <ul className='character-details'>
          <li className='character-details__items'> Estado: {status}</li>
          <li className='character-details__items'> Especie: {species}</li>
          <li className='character-details__items'> Genero: {gender}</li>
        </ul>
      </div>
    </div>
  )
}

export default Character
