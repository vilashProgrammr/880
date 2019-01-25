import React, {Component} from 'react';

  class Arsenal extends Component {
    render () {
      return (
        <p>
        {this.props.weapon.value}
        </p>
      );
    }
  }

export default Arsenal;
