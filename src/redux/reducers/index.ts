import { combineReducers } from "redux";
import contactsReducer from "redux/reducers/contactsReducer";

const Reducers = combineReducers({
  contact: contactsReducer,
});

export default Reducers;
