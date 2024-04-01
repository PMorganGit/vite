import React from "react";


function NavBar( {handleClickNext, handleClickPrev, ButPrev, ButNext}) {


    return (
        <>
          <div>
            {ButPrev && <button onClick={handleClickPrev}>Précédent</button>}
            {ButNext && <button onClick={handleClickNext}>Suivant</button>}
          </div>
        </>
      );
    };
    export default NavBar;
    