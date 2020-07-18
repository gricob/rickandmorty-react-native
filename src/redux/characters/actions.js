import * as types from './types';
import * as api from '../../api';
import { Alert } from 'react-native';
import _ from 'lodash';

const setLoading = (loading) => {
  const action = {
    type: types.SET_LOADING,
    payload: {loading: loading},
  };
  return action;
};

export const setItem = (item) => {
  const action = {
    type: types.SET_ITEM,
    payload: {item},
  };
  return action;
};

const updateList = (list, pages) => {
  const action = {
    type: types.UPDATE_LIST,
    payload: {list: list, pages: pages},
  };
  return action;
};

const updatePage = (page) => {
  const action = {
    type: types.UPDATE_PAGE,
    payload: {page},
  };
  return action;
};

export const initList = () => {
  return (dispatch) => {
    dispatch(updateList([]));
    dispatch(updatePage(1));
    dispatch(fetchList());
  };
};

export const fetchNextPage = () => {
  return (dispatch, getState) => {
    const {page, pages} = getState().characters;
    
    if (page < pages) {
      const newPage = page + 1;
      dispatch(updatePage(newPage));
      dispatch(fetchList());
    }
  };
};

export const fetchList = () => {
  return async (dispatch, getState) => {

    try {
      dispatch(setLoading(true));

      const { list, page } = getState().characters;
      const params = {
        page: page,
      };

      const getCharactersRes = await api.getCharacters(params);
      
      const total = _.toNumber(_.get(getCharactersRes, 'data.info.pages', 0));
      const resList = _.get(getCharactersRes, 'data.results', []);

      const newList = [...list, ...resList];

      dispatch(updateList(newList, total));
    } catch (e) {
      Alert.alert('Error', e.message || 'Something went wrong!');
    } finally {
      dispatch(setLoading(false));
    }
  };
};

export const postCharacter = (character) => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));

      const { list, pages } = getState().characters;

      list.push(character);
      
      dispatch(updateList(list, pages));

    } catch (e) {
      Alert.alert('Error', e.message || 'Something went wrong!');
    } finally {
      dispatch(setLoading(false));
    }
  }
}

