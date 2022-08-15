import { configureStore } from '@reduxjs/toolkit';
import { persistedReducer } from './Contacts/slice';
import { setupListeners } from '@reduxjs/toolkit/query';
import { contactApi } from './contactApi';

export const store = configureStore({
  reducer: {
    contacts: persistedReducer,
    [contactApi.reducerPath]: contactApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ],
});
setupListeners(store.dispatch);
