import React, { Component } from 'react';
import Character from './components/character';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {id: 1, name: 'Arya Stark', weapon: 'Unarmed'},
      {id: 2, name: 'Sansa Stark', weapon: 'Unarmed'},
      {id: 3, name: 'Brienne of Tarth', weapon: 'Unarmed'}
    ],
  }

  sword = character => {

    const characters = [...this.state.characters] //the ... is a spread operator.
    // It clones the characters array
    const index = characters.indexOf(character)
    characters[index] = {...character}
    characters[index].weapon = 'Sword'
    this.setState({ characters });
  }

  bowArrow = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character }
    characters[index].weapon = 'Bow & Arrow'
    this.setState({ characters });
  }


  render() {
    return (
      <div>
       {this.state.characters.map(character => (
         <Character
            key={character.id}
            character={character}
            sword={this.sword}
            bowArrow={this.bowArrow}
          />
       ))}
     </div>
    );
  }
}

export default App;
