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

  handleWeaponClick = (character, weaponName, weaponIndex) => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = {...character}
    this.availabilityOfWeapons(characters, index, weaponName, weaponIndex);
  }

  
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
      <React.Fragment>
        <div className='arsenal'>
          <h3> Arsenal </h3>
          {this.state.weapons.map(weapon => (
            <Arsenal
              key={weapon.id}
              weapon={weapon}
            />
          ))}
        </div>

        <div className = 'characters'>
         <h2> Characters </h2>
          {this.state.characters.map(character => (
             <Character
                key={character.id}
                character={character}
                handleWeaponClick={this.handleWeaponClick}
              />
           ))}
        </div>
     </React.Fragment>
    );
  }
}

export default App;
