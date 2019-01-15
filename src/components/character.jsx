import React, {Component} from 'react';

class Character extends Component {
  render() {
    return (
      <div>
        <span> I am a character component {this.props.key}</span>
      </div>
    );
  }
}

export default Character;
