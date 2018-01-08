import io from "socket.io-client";
import {showSearchResults, openRecipeFromSearch} from "./actions";

const socket = io();

const events = (store) => ({

  "SEARCH_RESULTS": (event) => showSearchResults(event),
  "OPEN_RECIPE_FROM_SEARCH": (event) => openRecipeFromSearch(event)

});

export default function (store) {
  const eventStore = events(store);

  for (let eventName in eventStore) {
    socket.on(eventName, event => {
      store.dispatch(eventStore[eventName](event));
    });
  }

};
