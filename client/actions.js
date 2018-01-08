export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const OPEN_RECIPE = 'OPEN_RECIPE';

import history from './getHistory';

export function openRecipeFromSearch({ordinal}) {
  console.log("Opening recipe from search");

  return (dispatch, getState) => {
    let recipe = getState().search.searchResults[event.ordinal - 1];
    dispatch(openRecipe(recipe));
  }
}

export function openRecipe(recipe) {
  history.push(`/recipe/${recipe.id}`);
  return {
    type: OPEN_RECIPE,
    recipe
  }
}

export function showSearchResults({searchTerm, searchResults}) {
  history.push('/search');

  console.log(searchResults);

  return {
    type: SEARCH_RESULTS,
    searchTerm, searchResults
  }
}