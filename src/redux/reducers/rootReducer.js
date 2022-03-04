import { combineReducers } from "redux";
import favoriteReducer from "./favoriteReducer";
import postReducer from "./postReducers";

const rootReducer = combineReducers({
  posts: postReducer,
  favorites: favoriteReducer,
});

export default rootReducer;
