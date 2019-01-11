import React, { Component } from 'react';
import './App.css';

import CharacterList from './components/CharacterComponents/CharacterList';
import PrevNext from './components/PrevNextComponents/PrevNext';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [], 
      next: null,
      previous: null
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people');
  }

  getCharacters = URL => {
    // feel free to research what this code is doing.
    // At a high level we are calling an API to fetch some starwars data from the open web.
    // We then take that data and resolve it our state.
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ 
          starwarsChars: data.results,
          next: data.next,
          previous: data.previous
         });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  prevNextClickHandle = (e) => {
    e.preventDefault();
    // console.log(e.target.name);
    this.getCharacters(this.state[e.target.name]);
  }

  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1 className="Header">React Wars</h1>
        <PrevNext 
          next={this.state.next} 
          previous={this.state.previous} 
          clickHandle={this.prevNextClickHandle} />
        <CharacterList starwarsChars={this.state.starwarsChars} />
      </div>
    );
  }
}

export default App;
