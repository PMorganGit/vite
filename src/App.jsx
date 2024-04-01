import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PokemonCard from "../components/PokemonCard";
import PropTypes from "prop-types";

function App() {
  const [pokemonIndex, setPokemonIndex] = useState(0);

  const handleClickPrev = () => {
    setPokemonIndex((pokemonIndex) => pokemonIndex - 1);
  };

  const handleClickNext = () => {
    setPokemonIndex((pokemonIndex) => pokemonIndex + 1);
  };

  const pokemonList = [
    {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];

  App.PropTypes = {
    pokemonList: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }),
  };

  return (
    <>
      <div>
        <PokemonCard pokemon={pokemonList[pokemonIndex]} />
        {pokemonIndex > 0 && <button onClick={handleClickPrev}>Précédent</button>}
        {pokemonIndex < pokemonList.length - 1 && <button onClick={handleClickNext}>Suivant</button>}
      </div>
    </>
  );
}

export default App;
