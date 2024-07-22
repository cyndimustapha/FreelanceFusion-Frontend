// src/redux/configureStore.js

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import jobsReducer from "./jobListings/jobListings";
import detailsReducer from "./jobListings/jobDetails";
import messagesReducer from "./messages/messages";

const rootReducer = combineReducers({
  jobs: jobsReducer,
  details: detailsReducer,
  messages: messagesReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(logger),
});

export default store;
