import React from "react";
import '../src/style.scss';


function NavBar( {handleClickNext, handleClickPrev, ButPrev, ButNext}) {


    return (
        <>
          <div className="Bouton">
            {ButPrev && <button className="ButPrev" onClick={handleClickPrev}>Précédent</button>}
            {ButNext && <button className="ButNext" onClick={handleClickNext}>Suivant</button>}
          </div>
        </>
      );
    };
    export default NavBar;
    