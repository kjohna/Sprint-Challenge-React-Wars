import React from 'react';
import './Character.css';

import Character from './Character';

function CharacterList(props) {
  const characters = props.starwarsChars.map(characterData => {
    return (
      <Character
        key = {characterData.name}
        characterData = {characterData}
      />
    );
  });

  return (
    <div className="character-list">
      {characters}
    </div>
  );
}

export default CharacterList;