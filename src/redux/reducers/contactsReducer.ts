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
} from "redux/actions/actionTypes";

const listContactState = {
  listLoading: false,
  listError: null,
  listData: [],
};

const addContactDefaultState = {
  addLoading: false,
  addError: null,
  addData: {},
};

const viewContactDefaultState = {
  viewLoading: false,
  viewError: null,
  viewIsEditMode: false,
  viewData: {},
};

const editContactDefaultState = {
  editLoading: false,
  editError: null,
  editData: {},
};

const deleteContactDefaultState = {
  deleteLoading: false,
  deleteError: null,
  deleteData: {},
};

const defaultState = {
  ...listContactState,
  ...addContactDefaultState,
  ...viewContactDefaultState,
  ...editContactDefaultState,
  ...deleteContactDefaultState,
};

const Reducer = (state = defaultState, { type, payload }: any = {}) => {
  switch (type) {
    case LOAD_CONTACTS_START:
      return {
        ...state,
        listLoading: true,
        listError: null,
      };
    case LOAD_CONTACTS_SUCCESS:
      return {
        ...state,
        listLoading: false,
        listError: null,
        listData: state.listData,
      };
    case LOAD_CONTACTS_ERROR:
      return {
        ...state,
        listLoading: false,
        listError: payload,
      };
    case ADD_CONTACT_START:
      return {
        ...state,
        addLoading: true,
        addError: null,
      };
    case ADD_CONTACT_SUCCESS:
      return {
        ...state,
        addLoading: false,
        addError: null,
        listData: [...state.listData, payload],
      };
    case ADD_CONTACT_ERROR:
      return {
        ...state,
        addLoading: false,
        addError: payload,
      };
    case VIEW_CONTACT_START:
      return {
        ...state,
        viewLoading: true,
        viewError: null,
      };
    case VIEW_CONTACT_SUCCESS:
      return {
        ...state,
        viewLoading: false,
        viewError: null,
        viewIsEditMode: payload.isEditMode ?? false,
        viewData: state.listData.find((i, index) => index === payload.data),
      };
    case VIEW_CONTACT_ERROR:
      return {
        ...state,
        viewLoading: false,
        viewError: payload,
      };
    case UPDATE_CONTACT_START:
      return {
        ...state,
        editLoading: true,
        editError: null,
      };
    case UPDATE_CONTACT_SUCCESS:
      return {
        ...state,
        editLoading: false,
        editError: null,
        listData: [
          ...state.listData.slice(0, payload.index),
          payload.data,
          ...state.listData.slice(payload.index + 1),
        ],
      };
    case UPDATE_CONTACT_ERROR:
      return {
        ...state,
        editLoading: false,
        editError: payload,
      };
    case DELETE_CONTACT_START:
      return {
        ...state,
        deleteLoading: true,
        deleteError: null,
      };
    case DELETE_CONTACT_SUCCESS:
      return {
        ...state,
        deleteLoading: false,
        deleteError: null,
        listData: [...state.listData.filter((i, index) => index !== payload)],
      };
    case DELETE_CONTACT_ERROR:
      return {
        ...state,
        deleteLoading: false,
        deleteError: payload,
      };

    default:
      return state;
  }
};
export default Reducer;
