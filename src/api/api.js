import axios from 'axios'

const allCharacters = async (state) => {
  const { data } = await axios.get('https://rickandmortyapi.com/api/character')
  state( data.results )
}

const oneCharacter = async (id, state) => {
  const res = await axios.get(`https://rickandmortyapi.com/api/character/${id}`)
  state(res.data)
}

export {
  allCharacters,
  oneCharacter
} 