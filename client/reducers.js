import { combineReducers } from 'redux';

import * as actions from './actions';

const search = (state = { searchTerm: '', searchResults: [] }, action) => {

  switch(action.type) {

    case actions.SEARCH_RESULTS:
      return {
        searchTerm: action.searchTerm,
        searchResults: action.searchResults
      };
    default:
      return state;

  }

};

const recipe = (state = { currentRecipe: null }, action) => {

  switch(action.type) {

    case actions.OPEN_RECIPE:
      return {
        currentRecipe: action.recipe
      };
    default:
      return state;
  }

};

export default combineReducers({
  search, recipe
});