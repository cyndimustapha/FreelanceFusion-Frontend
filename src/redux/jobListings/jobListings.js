import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const JOBS_API = "http://127.0.0.1:8000/jobs/";

const getJobsFromAPI = async () => {
    const response = await fetch(JOBS_API);
    const data = await response.json();
    return data;
};

const GET_JOBS = "jobs-hub/jobs/GET_JOBS";
const initialState = {
    loading: false,
    jobs: [], 
};

const fetchJobs = createAsyncThunk(GET_JOBS, async () => {
    const response = await getJobsFromAPI();
    return response;
});

const jobsSlice = createSlice({
    name: "jobs",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fullfilled, (state, action) => ({
            loading: false,
            jobs: action.payload,
        }));

        builder.addCase(fetchRecipes.pending, (state, action) => ({
            loading: true,
            jobs: action.payload,
        }));

        builder.addCase(fetchRecipes.failed, (state, action) => ({
            loading: false,
            jobs: null,
        }));
    },
});

export default jobsSlice;
export { fetchJobs };