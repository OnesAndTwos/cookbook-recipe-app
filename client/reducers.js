import { combineReducers } from 'redux';

import * as actions from './actions';

const search = (state = { results: new Map(), currentSearch: null }, action) => {

  switch(action.type) {

    case actions.SEARCH_RESULTS:
      return {
        ...state,
        currentSearch: action.searchTerm,
        results: new Map(state.results).set(action.searchTerm, action.searchResults)
      };
    default:
      return state;

  }

};

const recipe = (state = { currentRecipe: null }, action) => {
  switch(action.type) {
    case actions.OPEN_RECIPE:
      return {
        ...state,
        currentRecipe: action.recipe
      };
    default:
      return state;
  }
};

export default combineReducers({
  search, recipe
});