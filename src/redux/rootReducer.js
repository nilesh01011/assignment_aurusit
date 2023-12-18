import { combineReducers } from '@reduxjs/toolkit';
import addEventItemsSlice from './slices/addEventItemsSlice';

const rootReducer = combineReducers({
    addEvent: addEventItemsSlice,
});

export default rootReducer;