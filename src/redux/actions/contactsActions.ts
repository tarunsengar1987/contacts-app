import {
  LOAD_CONTACTS_START,
  LOAD_CONTACTS_SUCCESS,
  LOAD_CONTACTS_ERROR,
  ADD_CONTACT_START,
  ADD_CONTACT_SUCCESS,
  ADD_CONTACT_ERROR,
  UPDATE_CONTACT_START,
  UPDATE_CONTACT_SUCCESS,
  UPDATE_CONTACT_ERROR,
  DELETE_CONTACT_START,
  DELETE_CONTACT_SUCCESS,
  DELETE_CONTACT_ERROR,
  VIEW_CONTACT_START,
  VIEW_CONTACT_SUCCESS,
  VIEW_CONTACT_ERROR,
} from "./actionTypes";

export const loadContactsStart = () => {
  return {
    type: LOAD_CONTACTS_START,
  };
};

export const loadContactsSuccess = () => {
  return {
    type: LOAD_CONTACTS_SUCCESS,
  };
};
export const loadContactsError = () => {
  return {
    type: LOAD_CONTACTS_ERROR,
  };
};

export const loadContacts = () => {
  return (dispatch: any) => {
    try {
      dispatch(loadContactsStart());
      return dispatch(loadContactsSuccess());
    } catch (err) {
      return dispatch(loadContactsError());
    }
  };
};

export const addContactStart = () => {
  return {
    type: ADD_CONTACT_START,
  };
};

export const addContactSuccess = (payload: any) => {
  return {
    type: ADD_CONTACT_SUCCESS,
    payload,
  };
};
export const addContactError = () => {
  return {
    type: ADD_CONTACT_ERROR,
  };
};

export const addContact = (data: any) => {
  return (dispatch: any) => {
    try {
      dispatch(addContactStart());
      return dispatch(addContactSuccess(data));
    } catch (err) {
      return dispatch(addContactError());
    }
  };
};

export const viewContactStart = () => {
  return {
    type: VIEW_CONTACT_START,
  };
};

export const viewContactSuccess = (payload: any) => {
  return {
    type: VIEW_CONTACT_SUCCESS,
    payload,
  };
};
export const viewContactError = () => {
  return {
    type: VIEW_CONTACT_ERROR,
  };
};

export const viewContact = (data: any) => {
  return (dispatch: any) => {
    try {
      dispatch(viewContactStart());
      return dispatch(viewContactSuccess(data));
    } catch (err) {
      return dispatch(viewContactError());
    }
  };
};

export const updateContactStart = () => {
  return {
    type: UPDATE_CONTACT_START,
  };
};

export const updateContactSuccess = (payload: any) => {
  return {
    type: UPDATE_CONTACT_SUCCESS,
    payload,
  };
};
export const updateContactError = () => {
  return {
    type: UPDATE_CONTACT_ERROR,
  };
};

export const updateContact = (data: any, index: any) => {
  return (dispatch: any) => {
    try {
      dispatch(updateContactStart());
      return dispatch(updateContactSuccess({ data, index }));
    } catch (err) {
      return dispatch(updateContactError());
    }
  };
};

export const deleteContactStart = () => {
  return {
    type: DELETE_CONTACT_START,
  };
};

export const deleteContactSuccess = (payload: any) => {
  return {
    type: DELETE_CONTACT_SUCCESS,
    payload,
  };
};
export const deleteContactError = () => {
  return {
    type: DELETE_CONTACT_ERROR,
  };
};

export const deleteContact = (data: any) => {
  return (dispatch: any) => {
    try {
      dispatch(deleteContactStart());
      return dispatch(deleteContactSuccess(data));
    } catch (err) {
      return dispatch(deleteContactError());
    }
  };
};
