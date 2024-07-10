import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const GET_DETAILS = "jobs-hub/jobs/GET_DETAILS";

const initialState = {
    loading: false,
    jobs: [], 
};

const fetchDetails = createAsyncThunk(GET_DETAILS, async (id) => {
    const DETAILS_API = "http://127.0.0.1:8000/job/";
    const response = await fetch(DETAILS_API + id);
    const data = await response.json();
    return data
});

const detailsSlice = createSlice({
    name: "details",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(fetchRecipes.fullfilled, (state, action) => ({
            loading: false,
            details: { ...action.payload },
        }));

        builder.addCase(fetchRecipes.pending, (state, action) => ({
            loading: true,
            details: { ...action.payload },
        }));

        builder.addCase(fetchRecipes.failed, (state, action) => ({
            loading: false,
            details: null,
        }));
    },
});

export default detailsSlice;
export { fetchDetails };