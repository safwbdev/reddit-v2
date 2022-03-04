import {
  SAVE_POST,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
  UP_POST,
  DOWN_POST,
} from "./actionTypes";

export const upVote = (id) => {
  return { type: UP_POST, id: id };
};
export const downVote = (id) => {
  return { type: DOWN_POST, id: id };
};
export const savePost = (id) => {
  return { type: SAVE_POST, id: id };
};
export const deletePost = (id) => {
  return { type: DELETE_POST, id: id };
};
export const addPost = (data) => {
  return { type: ADD_POST, data };
};
export const updatePost = (id, data) => {
  return { type: UPDATE_POST, id: id, data: data };
};
