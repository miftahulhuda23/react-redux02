import { combineReducers } from "redux";

const listPostReducers = (list = [], action) => {
  if (action.type === "AMBIL_POST") {
    return action.data;
  }

  return list;
};

const ambilUserReducers = (users = [], action) => {
  if (action.type === "AMBIL_USER") {
    return [...users, action.data];
  }

  return users;
};

const ambilDetailPostReducers = (post = null, action) => {
  if (action.type === "DETAIL_POST") {
    return action.data;
  }

  return post;
};

export default combineReducers({
  ListPost: listPostReducers,
  Users: ambilUserReducers,
  DetailPost: ambilDetailPostReducers,
});
