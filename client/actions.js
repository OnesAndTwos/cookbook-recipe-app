export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const OPEN_RECIPE = 'OPEN_RECIPE';

import history from './getHistory';

export function openRecipeFromSearch({ordinal}) {
  return (dispatch, getState) => {
    let recipe = getState().search.searchResults[ordinal - 1];
    dispatch(openRecipe(recipe));
  }
}

export function openRecipe(recipe) {
  return (dispatch) => {

    history.push(`/recipe/${recipe.id}`);

    dispatch({
      type: OPEN_RECIPE,
      recipe
    });

  };
}

export function showSearchResults({searchTerm, searchResults}) {
  return (dispatch) => {
    history.push(`/search/${encodeURI(searchTerm)}`);

    dispatch({
      type: SEARCH_RESULTS,
      searchTerm, searchResults
    });

  };
}