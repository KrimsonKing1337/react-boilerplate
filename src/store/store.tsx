import { configureStore } from '@reduxjs/toolkit';

import createSagaMiddleware from 'redux-saga';

import { pokemonApi } from 'api';

import { counterReducer, watchCounterActions } from './counter';

const sagaMiddleware = createSagaMiddleware();

const reducer = {
  counter: counterReducer,
  [pokemonApi.reducerPath]: pokemonApi.reducer,
};

const middlewares = [
  sagaMiddleware,
  pokemonApi.middleware,
];

export const store = configureStore({
  reducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(middlewares),
});

sagaMiddleware.run(watchCounterActions);

export type RootState = ReturnType<typeof store.getState>;
