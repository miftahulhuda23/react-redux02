import { combineReducers } from "redux";

const listPostReducers = (list = [], action) => {
  if (action.type === "AMBIL_POST") {
    return action.data;
  }

  return list;
};

export default combineReducers({
  ListPost: listPostReducers,
});
