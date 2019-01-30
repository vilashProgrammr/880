import React, {Component} from 'react';

class Description extends Component {
  render(){
    return (
      <React.Fragment>

       <button className = 'descriptionButton'
        onClick={() => this.props.handleSelected(this.props.character)}>
           Show character description
       </button>

      <div className = 'descriptionWords'> {this.props.character.selected && this.props.character.description} </div>
      </React.Fragment>

    )
  }
}

export default Description;
