import React, { Component } from 'react';
import Character from './components/character';
import Arsenal from './components/arsenal';
import './App.css';


class App extends Component {
  state = {
    characters: [
      {id: 1, name: 'Arya Stark', weapon: 'Unarmed', errorMessage: '',
              description: 'A girl has no description.', selected: false},

      {id: 2, name: 'Sansa Stark', weapon: 'Unarmed', errorMessage: '',
              description: "Had an unfortunate crush on Jeoffry and" +
                            " made some bad life choices, but now she's awesome.", selected: false},

      {id: 3, name: 'Brienne of Tarth', weapon: 'Unarmed', errorMessage: '',
              description:"The legend. The master. Can she do no wrong? I love her so much.", selected: false},

      {id: 4, name: 'Jaime Lannister', weapon: 'Unarmed', errorMessage: '',
              description:"Formerly evil, currently adorable.", selected: false},

      {id: 5, name: 'Cersei Lannister', weapon: 'Unarmed', errorMessage: '',
              description:"Just the worst.", selected: false},

      {id: 6, name: 'Daenerys/Khaleesi/Mother of Dragons', weapon: 'Unarmed', errorMessage: '',
              description:"Super cool chick.", selected: false}
    ],

    weapons: [
      {id: 1, value: 'Sword'},
      {id: 2, value: 'Bow & Arrow'},
      {id: 3, value: 'Dragon'},
      {id: 4, value: 'Poison'},
      {id: 5, value: 'Dagger'},
      {id: 6, value: 'Wildfire'}
    ]
  }

  handleSelected = (character) => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = {...character}
    characters[index].selected = true
    this.setState({ characters });
  }

  handleWeaponClick = (character, weaponName, weaponIndex) => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = {...character}
    this.availabilityOfWeapons(characters, index, weaponName, weaponIndex);
  }

  availabilityOfWeapons = (characters, index, weaponName, weaponIndex) => {
    if (this.state.weapons.find(item => item.value === weaponName) !== undefined ) {
      this.arm(characters, index, weaponName, weaponIndex);
    } else {
      this.noAvailability(characters, index);
    }
  };

  arm = (characters, index, weaponName, weaponIndex) => {
    characters[index].weapon = weaponName
    this.setState({ characters });
    this.takeWeapon(weaponIndex);
  };

  takeWeapon = weaponID => {
    const weapons = this.state.weapons.filter(weapon => weapon.id !== weaponID);
    this.setState({weapons: weapons});
  };

  noAvailability = (characters, index) => {
    characters[index].errorMessage = 'You have already given this weapon'
    + ' to another character'
    this.setState({ characters });
  }

  render() {
    return (
      <React.Fragment>
        <div className='arsenal'>
          <h2> Arsenal </h2>
          {this.state.weapons.map(weapon => (
            <Arsenal
              key={weapon.id}
              weapon={weapon}
            />
          ))}
        </div>

        <div className = 'characters'>
        <div className = 'title'>   Characters </div>
          {this.state.characters.map(character => (
             <Character
                key={character.id}
                character={character}
                handleWeaponClick={this.handleWeaponClick}
                handleSelected={this.handleSelected}
              />
           ))}
        </div>


     </React.Fragment>
    );
  }
}

export default App;
