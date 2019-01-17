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

  arm = character => {
    console.log(this.state.characters)
    const characters = [...this.state.characters] //the ... is a spread operator.
    // It clones the characters array
    const index = characters.indexOf(character)

    characters[index] = {...character}
    characters[index].weapon = 'armed'
    this.setState({ characters });
    console.log(this.state.characters)
  }


  render() {
    return (
      <div>
       {this.state.characters.map(character => (
         <Character
            key={character.id}
            name={character.name}
            weapon={character.weapon}
            character={character}
            arm={this.arm}
          />
       ))}
     </div>
    );
  }
}

export default App;
