import React, {Component} from 'react';

class Description extends Component {
  render(){
    return (
      <React.Fragment>
      <button
      onClick={() => this.props.handleDescription(this.props.character)}> 
          Show character description
      </button>


      </React.Fragment>

      ///character includes words and id
      //  onClick={() => this.props.onDescription(this.props.character)}>
    )
  }
}

export default Description;
