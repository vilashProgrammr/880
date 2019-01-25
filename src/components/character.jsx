import React, {Component} from 'react';
import Description from './description';

class Character extends Component {
  render() {

    return (
      <div className = 'character'>

          My name is {this.props.character.name}.
          <p>
          <Description

             handleSelected = {this.props.handleSelected}
             character= {this.props.character}
           />
          </p>
          <p> Weapon: {this.props.character.weapon} </p>

          <p>
          Arm me:

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Sword', 1)}>
            Sword
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Bow & Arrow', 2)}>
            Bow & Arrow
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Dragon', 3)}>
            Dragon
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Poison', 4)}>
            Poison
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Dagger', 5)}>
            Dagger
        </button>

        <button
          onClick={() => this.props.handleWeaponClick(this.props.character, 'Wildfire', 6)}>
            Wildfire
        </button>

        <p className= 'errorMessage' > {this.props.character.errorMessage} </p>

        </p>

      </div>
    );
  }
}

export default Character;

//id might be wrong
