import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import logger from "redux-logger";
import jobsReducer from "./jobListings/jobListings";
import detailsReducer from "./jobListings/jobDetails";

const rootReducer = combineReducers({
    jobs: jobsReducer.reducer,
    details: detailsReducer.reducer,
});

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(logger),
});

export default store;