import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom'

const mapStateToProps = (state, { match }) => {
  return {
    searchResults: state.search.searchResults,
    searchTerm: state.search.searchTerm
  }

};

const Recipe =  ({searchResults}) => (
  <div>
    <h2>Hello Search</h2>

    {
      searchResults.map((recipe, index) => (
        <div key={recipe.id}>
          <h3>{recipe.title}</h3>
        </div>
      ))
    }

  </div>
);

export default withRouter(connect(
  mapStateToProps
)(Recipe));