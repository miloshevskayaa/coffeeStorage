import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { coffeeApi } from './coffee';
import { favoritesApi } from './favorites';
import { pageAuthReducer, pageReducer } from './pages';
import { passwordApi } from './restore-password';
import { statisticsApi } from './statistics';
import { testApi } from './test';
import { authApi, userReducer } from './users';

const persistUserConfig = {
  key: 'user',
  storage,
};

const persistedUserReducer = persistReducer(persistUserConfig, userReducer);

export const store = configureStore({
  reducer: {
    [coffeeApi.reducerPath]: coffeeApi.reducer,
    [favoritesApi.reducerPath]: favoritesApi.reducer,
    [testApi.reducerPath]: testApi.reducer,
    [statisticsApi.reducerPath]: statisticsApi.reducer,
    [passwordApi.reducerPath]: passwordApi.reducer,
    [authApi.reducerPath]: authApi.reducer,
    user: persistedUserReducer,
    page: pageReducer,
    pageAuth: pageAuthReducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware({ serializableCheck: false }),
    coffeeApi.middleware,
    favoritesApi.middleware,
    testApi.middleware,
    statisticsApi.middleware,
    passwordApi.middleware,
    authApi.middleware,
  ],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
