function PokemonCard() {
  const pokemon = pokemonList[1];
  console.log(pokemon);
  const imgabs = typeof pokemon.imgSrc === "undefined";

  return (
    <div>
      <figure>
        {imgabs ? (
          <p>???</p>
        ) : (
          <img src={pokemon.imgSrc} alt={pokemon.name}></img>
        )}
        <figcaption>{pokemon.name}</figcaption>
      </figure>
    </div>
  );
}

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

export default PokemonCard;
