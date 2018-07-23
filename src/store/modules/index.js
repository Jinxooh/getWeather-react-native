import { combineReducers } from 'redux';
import { penderReducer } from 'redux-pender';
import base from './base';

const modules = {
  base,
}

modules.pender = penderReducer;

export default combineReducers(modules);
