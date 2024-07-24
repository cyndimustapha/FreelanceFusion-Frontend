// src/redux/jobListings/jobDetails.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const GET_DETAILS = "jobs-hub/jobs/GET_DETAILS";

const initialState = {
  loading: false,
  details: null, // Changed from 'jobs' to 'details'
};

const fetchDetails = createAsyncThunk(GET_DETAILS, async (id) => {
  const DETAILS_API = "https://freelance-fusion-backend.vercel.app/api/jobs/";
  const token = localStorage.getItem("token");
  const response = await fetch(DETAILS_API + id, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await response.json();
  return data;
});

const detailsSlice = createSlice({
  name: "details",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDetails.fulfilled, (state, action) => ({
      loading: false,
      details: { ...action.payload },
    }));

    builder.addCase(fetchDetails.pending, (state, action) => ({
      loading: true,
      details: { ...action.payload },
    }));

    builder.addCase(fetchDetails.rejected, () => ({
      loading: false,
      details: null,
    }));
  },
});

export default detailsSlice.reducer;
export { fetchDetails };
