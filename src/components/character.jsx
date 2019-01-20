import React, {Component} from 'react';

class Character extends Component {
  render() {

    return (
      <div className = 'character'>
        <span>
          My name is {this.props.character.name}.
          Weapon: {this.props.character.weapon}
        </span>

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

          {this.props.character.errorMessage}
        </p>

      </div>
    );
  }
}

export default Character;

//id might be wrong
