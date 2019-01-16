import React, { Component } from 'react';
import Character from './components/character';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {id: 1, name: 'Arya Stark'},
      {id: 2, name: 'Sansa Stark'},
    ]
  }

  render() {
    return (
      <div>
       {this.state.characters.map(character => (
         <Character
           key={character.id}
           name={character.id}
          />
       ))}
     </div>
    );
  }
}

export default App;
