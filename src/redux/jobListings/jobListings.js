// src/redux/jobListings/jobListings.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const JOBS_API = "http://127.0.0.1:5000/api/jobs";

const getJobsFromAPI = async () => {
    const response = await fetch(JOBS_API);
    if (!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};

const GET_JOBS = "jobs/fetchJobs";
const initialState = {
    loading: false,
    jobs: [], 
    error: null,
};

export const fetchJobs = createAsyncThunk(GET_JOBS, async () => {
    const response = await getJobsFromAPI();
    return response;
});

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchJobs.fulfilled, (state, action) => {
                state.loading = false;
                state.jobs = action.payload;
                state.error = null;
            })
            .addCase(fetchJobs.pending, (state) => {
                state.loading = true;
                state.jobs = [];
                state.error = null;
            })
            .addCase(fetchJobs.rejected, (state, action) => {
                state.loading = false;
                state.jobs = [];
                state.error = action.error.message;
            });
    },
});

export default jobsSlice.reducer;
