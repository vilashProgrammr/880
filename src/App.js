import React, { Component } from 'react';
import Character from './components/character';
import Arsenal from './components/arsenal';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {id: 1, name: 'Arya Stark', weapon: 'Unarmed'},
      {id: 2, name: 'Sansa Stark', weapon: 'Unarmed'},
      {id: 3, name: 'Brienne of Tarth', weapon: 'Unarmed'}
    ],

    weapons: [
      'Sword',
      'Bow & Arrow',
      'Dragon'
    ]
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

  dragon = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character }
    characters[index].weapon = 'Dragon'
    this.setState({ characters });
  }


  render() {
    return (
      <div>
      {this.state.weapons.map(weapon => (
        <Arsenal
          weapon={weapon}
        />
      ))}

       {this.state.characters.map(character => (
         <Character
            key={character.id}
            character={character}
            sword={this.sword}
            bowArrow={this.bowArrow}
            dragon={this.dragon}
          />
       ))}
     </div>
    );
  }
}

export default App;
