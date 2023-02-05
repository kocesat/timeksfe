import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { issueApi } from '../apis/issueApi';

export const store = configureStore({
  reducer: {
    [issueApi.reducerPath]: issueApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware().concat(issueApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useGetAllIssuesQuery } from '../apis/issueApi';

