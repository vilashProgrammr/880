import React, {Component} from 'react';

class Character extends Component {
  render() {
    //console.log('props', this.props);
    return (
      <div>
        <span>
          I am a character component, and my name is {this.props.character.name}.
          Weapon: {this.props.character.weapon}
        </span>

          <p>
          Arm me:
        <button
          onClick={() => this.props.sword(this.props.character)}>
            Sword
        </button>

        <button
          onClick={() => this.props.bowArrow(this.props.character)}>
            Bow & Arrow
        </button>

        <button
          onClick={() => this.props.dragon(this.props.character)}>
            Dragon
        </button>
        </p>
        
      </div>
    );
  }
}

export default Character;

//id might be wrong
