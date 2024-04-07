import React from "react";

function NavBar({ pokemonList, setPokemonIndex }) {
  const handlePokemonClick = (index) => {
    setPokemonIndex(index);
  };

  return (
    <>
      <div>
        {pokemonList.map((pokemon, index) => (
          <button key={index} onClick={() => handlePokemonClick(index)}>
            {pokemon.name}
          </button>
        ))}
      </div>
    </>
  );
}

export default NavBar;
