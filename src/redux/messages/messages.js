import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const GET_MESSAGES = "jobs-hub/jobs/GET_MESSAGES";

const initialState = {
  loading: false,
  messages: null,
};

const fetchMessages = createAsyncThunk(GET_MESSAGES, async () => {
  try {
    const MESSAGES_API = "https://freelance-fusion-backend.vercel.app/api/messages";
    const token = localStorage.getItem("token");
    const response = await fetch(MESSAGES_API, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch messages");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching messages:", error);
    throw error;
  }
});

const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchMessages.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMessages.fulfilled, (state, action) => {
        state.loading = false;
        state.messages = action.payload;
      })
      .addCase(fetchMessages.rejected, (state, action) => {
        state.loading = false;
        state.messages = null; // or handle error state as needed
      });
  },
});

export default messagesSlice.reducer;
export { fetchMessages };
