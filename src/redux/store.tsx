import { configureStore } from "@reduxjs/toolkit";
import surveyReducer from "./reducers/surveyReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer, persistStore } from 'redux-persist';

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, surveyReducer);

export const store: any = configureStore({ reducer: persistedReducer });

export const persistor = persistStore(store)
