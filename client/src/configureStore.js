import {createStore, applyMiddleware} from "redux";
import recipeApp from "./reducers/recipeApp";
import thunk from "redux-thunk";

const configureStore = () => createStore(recipeApp, applyMiddleware(thunk));

export default configureStore;