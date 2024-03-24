// store.js
import { configureStore } from '@reduxjs/toolkit';
import shopReducer from './shopslice';
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from "redux-persist";
  import storage from "redux-persist/lib/storage";
  const persistConfig = {
    key: "root",
    version: 1,
    storage,
  };
  const persistedReducer = persistReducer(persistConfig, shopReducer);

  export const store = configureStore({
    reducer: { shopify: persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });


// export default configureStore({
//   reducer: {
//     shopify: shopReducer
//   }
// });
export let persistor = persistStore(store);