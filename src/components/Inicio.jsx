import React, { useEffect, useState } from 'react'
import {allCharacters} from '../api/api'

const Inicio = () => {
  //un array que tiene como primer elemento la variable que contiene el valor del estado y como segundo elemento contiene la función que se encarga de actualizar el estado
  //el valor del parametro en el que podemos inicializar dentro del useState() puede contener primitivos, objetos, funciones, componentes 
  const [ characters, setCharacters ] = useState(null)
  const [ search, setSearch ] = useState("") 

  const handleChange = (e) => {
    setSearch(e.target.value)
    filterCharacters(e.target.value)
  }

  const filterCharacters = (value) => {
    if(value.length === 0 ){
      return allCharacters(setCharacters)
    }

    let res = characters.filter((character) => character.name.toString().toLowerCase().includes(value.toLowerCase()))
    setCharacters(res)
  }

  //se ejecuta cuando el componente ya se montó como los ciclos de vida de Vue jajaja
  useEffect(() => {
    allCharacters(setCharacters)
  }, [])
  // el array es para pasar una variable para que el hook se vuelva a ejectuar
  return (
    <>
      <div>
        <label>BUSCA LOS PERSONAJES MÁS ÉPICOS DEL MUNDO</label>
        <input 
          type="text" 
          value={search}
          placeholder="buscar personaje"
          onChange={handleChange}
        />
      </div>
      <br />
      {characters != null ? (
        characters.map(character => (
          <div key={character.id}>
            <a href={`/characters/${character.id}`}>{character.name}</a>
          </div>
        ))
      ) : ('no hay personajes, sorry')}
    </>
  )
}
export default Inicio