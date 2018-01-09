import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'


const mapStateToProps = (state, { match }) => {
  return { recipe: state.recipe.recipes.get(match.params.id)  }
};

const Recipe =  ({recipe}) => (
  <div key={recipe.id}>
    <h2>Hello Recipe</h2>
    <p>{recipe.title}</p>
  </div>
);

export default withRouter(connect(
  mapStateToProps
)(Recipe));