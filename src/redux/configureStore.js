// src/redux/configureStore.js

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import jobsReducer from "./jobListings/jobListings.js";
import detailsReducer from "./jobListings/jobDetails.js";
import messagesReducer from "./messages/messages.js";

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
    }),
});
export default store;
