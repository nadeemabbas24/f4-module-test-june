import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

const initialState = {
  posts: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_POST":
      return {
        ...state,
        posts: action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));
// const store = createStore(reducer);

export default store;
