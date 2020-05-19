import React from "react";
import CoronaArticle from "./CoronaArticle";
import PropTypes from 'prop-types';

function CoronaArticleList(props){

  const itemGrid = {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr'
  }
  return (
    <div>
    <div className="intro" style={itemGrid}>
    {props.coronaArticleTotal.map((coronaArticle, index) =>
      <CoronaArticle name={coronaArticle.name}
      description={coronaArticle.description}
      link={coronaArticle.link}
      key={index}/>
    )}
    </div>
    </div>
  );
}

CoronaArticleList.propTypes = {
  coronaArticleTotal: PropTypes.array
};

export default CoronaArticleList;
