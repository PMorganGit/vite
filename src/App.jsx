import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PokemonCard from '../components/PokemonCard'
import PropTypes from "prop-types";




function App() {
  const [count, setCount] = useState(0)
  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
      alt: "bulbasaur",
    },
    {
      name: "mew",
    },
  ];
  
App.PropTypes = {
  pokemonList : PropTypes.shape({
  name: PropTypes.string.isRequired,
  })
  
}

  return (
    <>
      <div>
    <PokemonCard pokemon={pokemonList} />
      </div>
    </>
  );
}

export default App
