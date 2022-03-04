import { favoriteData } from "../../constants/favorites";
import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/actionTypes";

const addFavorite = (state, id) => state.concat(id);

const removeFavorite = (state, id) => state.filter((post) => post !== id);

const favoriteReducer = (state = favoriteData, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return addFavorite(state, action.id);
    case REMOVE_FAVORITE:
      return removeFavorite(state, action.id);
    default:
      return state;
  }
};
export default favoriteReducer;
