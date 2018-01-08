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
    dispatch({
      type: OPEN_RECIPE,
      recipe
    });
    history.push(`/recipe/${recipe.id}`);
  };
}

export function showSearchResults({searchTerm, searchResults}) {
  history.push('/search');
  return {
    type: SEARCH_RESULTS,
    searchTerm, searchResults
  }
}