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
import anakinskywalker from '../../img/Anakin-Skywalker.jpeg';
import wilhufftarkin from '../../img/tarkin.jpeg';
import chewbacca from '../../img/chewbacca.jpeg';
import hansolo from '../../img/han-solo.jpeg';
import greedo from '../../img/greedo.jpeg';
import jabbadesilijictiure from '../../img/Jabba-The-Hutt.jpeg';
import wedgeantilles from '../../img/wedgeantilles.jpeg';
import jektonoporkins from '../../img/jek-porkins.jpeg';
import yoda from '../../img/Yoda-Retina.jpeg';
import palpatine from '../../img/Emperor-Palpatine.jpeg';


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
  "Obi-Wan Kenobi": obiwan,
  "Anakin Skywalker": anakinskywalker,
  "Wilhuff Tarkin": wilhufftarkin,
  "Chewbacca": chewbacca,
  "Han Solo": hansolo,
  "Greedo": greedo,
  "Jabba Desilijic Tiure": jabbadesilijictiure,
  "Wedge Antilles": wedgeantilles,
  "Jek Tono Porkins": jektonoporkins,
  "Yoda": yoda,
  "Palpatine": palpatine
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