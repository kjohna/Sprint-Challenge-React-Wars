import React from 'react';

import lukeskywalker from '../../img/LukeSkywalker.jpg';
import c3po from '../../img/C-3PO.jpg';
import r2d2 from '../../img/r2-d2.jpeg';
import darthvader from '../../img/Darth-Vader.jpeg';
import leiaoranga from '../../img/leia-organa.jpeg';
import owenlars from '../../img/owenlars.jpeg';
import berulars from '../../img/berulars.jpeg';
import r5d4 from '../../img/r5-d4.jpeg';
import biggsdarklighter from '../../img/biggs-darklighter.jpeg';
import obiwan from '../../img/Obi-Wan-Kenobi.jpeg';

const charImgs = {
  "Luke Skywalker": lukeskywalker,
  "C-3PO": c3po,
  "R2-D2": r2d2,
  "Darth Vader": darthvader,
  "Leia Organa": leiaoranga,
  "Owen Lars": owenlars,
  "Beru Whitesun lars": berulars,
  "R5-D4": r5d4,
  "Biggs Darklighter": biggsdarklighter,
  "Obi-Wan Kenobi": obiwan
}

function CharacterImg(props) {
  // console.log(props.name);
  return (
    <div className="character-img">
      <img src={charImgs[props.name]} alt=""/>
    </div>
  );
}

export default CharacterImg;