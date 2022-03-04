import data from "../../constants/data";
import {
  UP_POST,
  DOWN_POST,
  SAVE_POST,
  DELETE_POST,
  ADD_POST,
  UPDATE_POST,
} from "../actions/actionTypes";

const vote = (state, id, vote) => {
  return state.map((post) => {
    if (post.id === id) {
      return {
        ...post,
        votes: vote ? post.votes + 1 : post.votes - 1,
      };
    } else return post;
  });
};

const addPost = (state, data) => state.concat([data]);

const savePost = (state, id) =>
  state.map((post) =>
    post.id === id ? { ...post, saved: !post.saved } : post
  );

const deletePost = (state, id) => state.filter((post) => post.id !== id);

const updatePost = (state, id, data) => {
  return state.map((post) => {
    if (post.id === id) {
      return {
        ...post,
        title: data.title,
        body: data.body,
      };
    } else return post;
  });
};

const postReducer = (state = data, action) => {
  switch (action.type) {
    case ADD_POST:
      return addPost(state, action.data);
    case DELETE_POST:
      return deletePost(state, action.id);
    case SAVE_POST:
      return savePost(state, action.id);
    case UPDATE_POST:
      return updatePost(state, action.id, action.data);
    case UP_POST:
      return vote(state, action.id, true);
    case DOWN_POST:
      return vote(state, action.id, false);

    default:
      return state;
  }
};
export default postReducer;
