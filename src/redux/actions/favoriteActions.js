import { ADD_FAVORITE, REMOVE_FAVORITE } from "./actionTypes";

export const removeFavorite = (id) => {
  return { type: REMOVE_FAVORITE, id: id };
};

export const addFavorite = (id) => {
  return { type: ADD_FAVORITE, id };
};
