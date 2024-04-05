import '../src/style.scss';

function PokemonCard({pokemon}) {
const {name, imgSrc}  = pokemon

  return (
    <div className="CardPoke">
      <figure className="fig">
        {imgSrc ? (
          <img src={imgSrc} alt={name}></img>
        ) : (
          "???"
        )}
        <figcaption className="FigCap">{name}</figcaption>
      </figure>
    </div>
  );
};

export default PokemonCard;
