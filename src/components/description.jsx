import React, {Component} from 'react';

class Description extends Component {
  render(){
    return (
      <React.Fragment>

       <button
        onClick={() => this.props.handleSelected(this.props.character)}>
           Show character description
       </button>

      <div> {this.props.character.selected && this.props.character.description} </div>
      </React.Fragment>

      ///character includes words and id
      //  onClick={() => this.props.onDescription(this.props.character)}>
    )
  }
}

export default Description;

// <button
// onClick={() => this.props.handleDescription(this.props.character)}>
//     Show character description
// </button>
