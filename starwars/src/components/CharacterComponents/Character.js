import React from 'react';

import CharacterAbout from './CharacterAbout';
import CharacterImg from './CharacterImg';

function Character(props) {
  return (
    <div className="character">
      <CharacterAbout 
        characterData = {props.characterData}
      />
      <CharacterImg 
        name = {props.characterData.name}
      />
    </div>
  );
}

export default Character;