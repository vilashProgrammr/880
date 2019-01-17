import React, {Component} from 'react';

class Character extends Component {
  render() {
    //console.log('props', this.props);
    return (
      <div>
        <span>
          I am a character component, and my name is {this.props.name}. Weapon: {this.props.weapon}
        </span>
        <button
          onClick={() => this.props.arm(this.props.id)}>

            Arm me
        </button>
      </div>
    );
  }
}

export default Character;

//id might be wrong
