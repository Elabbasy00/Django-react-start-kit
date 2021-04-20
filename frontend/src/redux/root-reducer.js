import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './dataSlice/dataSlice';

const rootReducer = combineReducers({
  data: dataReducer,
});

export default rootReducer;
