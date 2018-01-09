export const SEARCH_RESULTS = 'SEARCH_RESULTS';
export const OPEN_RECIPE = 'OPEN_RECIPE';

import history from './getHistory';

export function openRecipeFromSearch({ordinal}) {
  return (dispatch, getState) => {
    let search = getState().search;
    let recipe = search.results.get(search.currentSearch)[ordinal - 1];

    dispatch(openRecipe(recipe));
  }
}

export function openRecipe(recipe) {
  return (dispatch) => {

    dispatch({
      type: OPEN_RECIPE,
      recipe
    });

    history.push(`/recipe/${encodeURI(recipe.id)}`);

  };
}

export function showSearchResults({searchTerm, searchResults}) {
  return (dispatch) => {

    dispatch({
      type: SEARCH_RESULTS,
      searchTerm, searchResults
    });

    history.push(`/search/${encodeURI(searchTerm)}`);

  };
}