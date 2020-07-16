import * as types from './types';

export const initialState = {
  loading: false,
  list: [],
  pages: 0,
  page: 1,
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.SET_LOADING:
      return {...state, loading: action.payload.loading};

    case types.UPDATE_LIST:
      return {
        ...state,
        list: action.payload.list,
        pages: action.payload.pages,
      };

    case types.UPDATE_PAGE:
      const newState = {
        ...state,
        page: action.payload.page,
      };
      return newState;
    default:
      return state;
  }
};

export default reducer;
