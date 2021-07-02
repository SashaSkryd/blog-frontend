import {
  combineReducers,
  configureStore,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  persistStore,
  persistReducer,
} from "redux-persist";
import auth from "./reducers/userReducer";

  const authPersistConfig = {key: "auth", storage, whitelist: ['token']};

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, auth), 
});

const store = configureStore({
  reducer: rootReducer,
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store)

const exportedStore = {
  store, persistor
}

export default exportedStore;
