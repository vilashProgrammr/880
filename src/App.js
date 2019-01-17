import React, { Component } from 'react';
import Character from './components/character';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {id: 0, name: 'Arya Stark', weapon: 'Unarmed'},
      {id: 1, name: 'Sansa Stark', weapon: 'Unarmed'},
    ],
  }

  arm = characterID => {
    const characters = [...this.state.characters]

    characters[characterID].weapon = 'armed'

    const index = characters.indexOf(characterID)
    characters[index] = {...characterID} 

    this.setState({ characters });
  }


  render() {
    return (
      <div>
       {this.state.characters.map(character => (
         <Character
            key={character.id}
            id={character.id}
            name={character.name}
            weapon={character.weapon}
            arm={this.arm}
          />
       ))}
     </div>
    );
  }
}

export default App;
