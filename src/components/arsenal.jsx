import React, {Component} from 'react';

  class Arsenal extends Component {
    render () {
      return (
        <p>
        Weapon = {this.props.weapon.value}
        </p>
      );
    }
  }

export default Arsenal;
