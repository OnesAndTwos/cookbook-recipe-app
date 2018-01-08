import io from "socket.io-client";
import {showSearchResults, openRecipeFromSearch} from "./actions";

const socket = io();

const events = (store) => ({

  "SEARCH_RESULTS": (event) => showSearchResults(event),
  "OPEN_RECIPE_FROM_SEARCH": (event) => openRecipeFromSearch(event)

});

export default function (store) {

  console.log(`Wiring up the events`);

  const eventStore = events(store);

  console.log(eventStore);
  for (let eventName in eventStore) {

    console.log(`Wiring up to ${eventName}`);

    socket.on(eventName, event => {
      console.log(`Received event ${eventName}`);
      console.log(`Received event ${eventStore[eventName]}`);

      store.dispatch(eventStore[eventName](event));
    });
  }

};
