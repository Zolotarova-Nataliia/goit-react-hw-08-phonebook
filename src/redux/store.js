import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import logger from "redux-logger";
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
import contactsReducer from "./contacts/contactsReducer";
import { default as authReducer } from "./auth/authSlice";

const middleware = [
  ...getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
  logger,
];

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const contacstPersistConfig = {
  key: "contacts",
  storage,
  blacklist: ["filter"],
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authReducer),
    contacts: persistReducer(contacstPersistConfig, contactsReducer),
  },
  middleware,
});

export const persistor = persistStore(store);
