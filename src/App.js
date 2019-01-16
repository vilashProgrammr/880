import React, { Component } from 'react';
import Character from './components/character';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {id: 1, name: 'Arya Stark', weapon: 'Unarmed'},
      {id: 2, name: 'Sansa Stark', weapon: 'Unarmed'},
    ],
  }

  render() {
    return (
      <div>
       {this.state.characters.map(character => (
         <Character
           key={character.id}
           name={character.name}
           weapon={character.weapon}
          />
       ))}
     </div>
    );
  }
}

export default App;
