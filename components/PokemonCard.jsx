
function PokemonCard({pokemon}) {
const {name, imgSrc}  = pokemon[0]

  return (
    <div>
      <figure>
        {imgSrc ? (
          <img src={imgSrc} alt={name}></img>
        ) : (
          "???"
        )}
        <figcaption>{name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
