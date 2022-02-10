import { applyMiddleware, compose, createStore } from "redux";
import thunkMiddleware from "redux-thunk";
import appReducers from "redux/reducers/index";

const configureStore = createStore(
  appReducers,
  compose(applyMiddleware(thunkMiddleware))
);

export default configureStore;
