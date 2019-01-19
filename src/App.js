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
      {id: 3, value:'Dragon'}
    ]
  }


  takeWeapon = weaponID => {
    const weapons = this.state.weapons.filter(weapon => weapon.id !== weaponID);
    this.setState({weapons: weapons});
  };

  noAvailability = (characters, index) => {
    characters[index].errorMessage = 'You have already given this weapon'
    + ' to another character'
    this.setState({ characters });
  }

  sword = character => {
    const characters = [...this.state.characters] //the ... is a spread operator.
    // It clones the characters array
    const index = characters.indexOf(character) //Just to make it a more
    //flexible function, going through the array to find the character which
    // matches the argument passed and then getting that index.
    characters[index] = {...character} // replacing the object in the index
    // that's there (in the cloned array)
    // with the now cloned character - why is this necessary? See comment below....
    characters[index].weapon = 'Sword'
    this.setState({ characters }); // I think this is like characters = characters,
    //replacing the state with the duplicate array
    /// but I don't understand why we have to clone the character itself,
    //shouldn't the characters cloned array come with it's
    // own cloned characters already inside?
    this.takeWeapon(1);
  }

  bowArrow = character => {
    const characters = [...this.state.characters]
    const index = characters.indexOf(character)
    characters[index] = { ...character }

    if (this.state.weapons.find(item => item.value === 'Bow & Arrow') !== undefined ) {
        characters[index].weapon = 'Bow & Arrow'
        this.setState({ characters });
        this.takeWeapon(2);
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
