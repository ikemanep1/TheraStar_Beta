import React from 'react';
import ConfirmationMhpAdd from './ConfirmationMhpAdd';
import MhpAdd from './MhpAdd';
import PropTypes from "prop-types";

class NewMhpControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false
    };
    this.AddConfirmation = this.AddConfirmation.bind(this);
  }

  AddConfirmation(){
    this.setState({formVisibleOnPage: true});
  }

  render(){
    let currentlyVisibleContent = null;
    if (this.state.formVisibleOnPage){
      currentlyVisibleContent = <MhpAdd onNewMhpCreation={this.props.onNewMhpCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationMhpAdd onAddConfirmation={this.AddConfirmation}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

NewMhpControl.propTypes = {
  onNewMhpCreation: PropTypes.func
};

export default NewMhpControl;
