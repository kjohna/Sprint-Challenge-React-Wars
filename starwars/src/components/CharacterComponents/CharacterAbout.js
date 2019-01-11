import React from 'react';

function CharacterAbout(props) {
  return (
    <div className="character-about">
      <h1>{props.characterData.name}</h1>
      <div className="character-stats">
        Born: {props.characterData.birth_year}
      </div>
    </div>
  );
}

export default CharacterAbout;