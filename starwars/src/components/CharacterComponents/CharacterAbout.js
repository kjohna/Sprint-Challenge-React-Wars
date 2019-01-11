import React from 'react';

function CharacterAbout(props) {
  const char = props.characterData;
  return (
    <div className="character-about">
      <h1>{char.name}</h1>
      <div className="character-stats">
        <p>
          Born: {char.birth_year} <br />
          Eyes: {char.eye_color}<br />
          Hair: {char.hair_color}<br />
          Height: {char.height} cm<br />
          Weight: {char.mass} kg<br />
        </p>
      </div>
    </div>
  );
}

export default CharacterAbout;