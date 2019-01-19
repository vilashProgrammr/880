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

  sword = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = {...character} //how to successfully refactor these lines?
    this.availabilityOfWeapons(characters, index, 'Sword', 1);
  }

  bowArrow = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character }
    this.availabilityOfWeapons(characters, index, 'Bow & Arrow', 2);
  };

  dragon = (character) => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character }
    this.availabilityOfWeapons(characters, index, 'Dragon', 3);
  };


  takeWeapon = weaponID => {
    const weapons = this.state.weapons.filter(weapon => weapon.id !== weaponID);
    this.setState({weapons: weapons});
  };

  availabilityOfWeapons = (characters, index, message, weaponIndex) => {
    if (this.state.weapons.find(item => item.value === message) !== undefined ) {
      this.arm(characters, index, message, weaponIndex);
    } else {
      this.noAvailability(characters, index);
    }
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
