import React from 'react';

import CharacterAbout from './CharacterAbout';

function Character(props) {
  return (
    <div className="character">
      <CharacterAbout 
        key = {props.characterData.name}
        characterData = {props.characterData}
      />
    </div>
  );
}

export default Character;