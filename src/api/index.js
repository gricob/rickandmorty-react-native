import axios from 'axios';
import {BASE_URL} from '../config/api';
import qs from 'qs';

const instance = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

export const getCharacters = (params) => {
  const url = `/character/?${qs.stringify(params, {skipNulls: true})}`;
  return instance.get(url);
}

export const getCharacter = (id) => {
  const url = `/character/${id}`;
  return instence.get(url);
}