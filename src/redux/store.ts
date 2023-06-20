import {combineReducers, configureStore} from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';
import currentDataReducer from './reducers/currentDataReducer';

const rootReducer = combineReducers({
    data: dataReducer,
    currentData: currentDataReducer,
});

export const store = configureStore({
    reducer: rootReducer,
});
