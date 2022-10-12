import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { oneCharacter } from '../api/api'
import Button from './Button'

const Character = () => {
  const [character, setCharacter] = useState(null)
  
  //el useParmas nos permite acceder desde un componente a los parámetros de la ruta 
  //y nos devuelve un objeto de claves/valores con los parámetros dinámicos del url
  const {id} = useParams()
  useEffect(() => {
    oneCharacter(id, setCharacter)
  }, [])

  return (
    <>
      {character != null ? (
        <div>
          <div>
            <Button></Button>
          </div>
          <h1>el personaje con el id {id}</h1>
          <p>su nombre es {character.name}</p>
          <img src={character.image} alt="img" />
        </div>
      ) : ('no hay personaje')}
    </>
  )
}
export default Character