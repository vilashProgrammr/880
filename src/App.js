import React, { Component } from 'react';
import Character from './components/character';
import Arsenal from './components/arsenal';
import './App.css';

class App extends Component {
  state = {
    characters: [
      {id: 1, name: 'Arya Stark', weapon: 'Unarmed', errorMessage: ''},
      {id: 2, name: 'Sansa Stark', weapon: 'Unarmed', errorMessage: ''},
      {id: 3, name: 'Brienne of Tarth', weapon: 'Unarmed', errorMessage: ''}
    ],

    weapons: [
      {id: 1, value: 'Sword'},
      {id: 2, value: 'Bow & Arrow'},
      {id: 3, value: 'Dragon'}
    ]
  }

  takeWeapon = weaponID => {
    const weapons = this.state.weapons.filter(weapon => weapon.id !== weaponID);
    this.setState({weapons: weapons});
  };

  arm = (characters, index, message, weaponIndex) => {
    characters[index].weapon = message
    this.setState({ characters });
    this.takeWeapon(weaponIndex);
  };


  noAvailability = (characters, index) => {
    characters[index].errorMessage = 'You have already given this weapon'
    + ' to another character'
    this.setState({ characters });
    console.log(this.state.characters)
  }


  sword = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = {...character}
    characters[index].weapon = 'Sword'
    this.setState({ characters });
    this.takeWeapon(1)
  }

  bowArrow = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character } // refactor?

    if (this.state.weapons.find(item => item.value === 'Bow & Arrow') !== undefined ) {
      this.arm(characters, index, 'Bow & Arrow', 2)
       }
    else {
      this.noAvailability(characters, index)
    }
  }

  dragon = (character) => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character }
    characters[index].weapon = 'Dragon'
    this.setState({ characters });
    this.takeWeapon(3);
  }


  render() {
    return (
      <div>

      {this.state.weapons.map(weapon => (
        <Arsenal
          key={weapon.id}
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
