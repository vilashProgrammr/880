import React, {Component} from 'react';

class Description extends Component {
  render(){
    return (
      <React.Fragment>
      <button > Show character description </button>

      <div> {this.props.description} </div>
      </React.Fragment>
    )
  }
}

export default Description;
