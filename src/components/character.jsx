import React, {Component} from 'react';

class Character extends Component {
  render() {
    console.log('props', this.props);
    return (
      <div>
        <span> I am a character component, and my id is {this.props.name}</span>
      </div>
    );
  }
}

export default Character;
