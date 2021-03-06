import React from 'react';
import ConfirmationArticleAdd from './ConfirmationArticleAdd';
import ArticleAdd from './ArticleAdd';
import PropTypes from "prop-types";

class NewArticleControl extends React.Component {

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
      currentlyVisibleContent = <ArticleAdd onNewArticleCreation={this.props.onNewArticleCreation}/>;
    } else {
      currentlyVisibleContent = <ConfirmationArticleAdd onAddConfirmation={this.AddConfirmation}/>;
    }
    return (
      <div>
      {currentlyVisibleContent}
      </div>
    );
  }
}

NewArticleControl.propTypes = {
  onNewArticleCreation: PropTypes.func
};

export default NewArticleControl;
