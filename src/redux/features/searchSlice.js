import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    query: "",
    activeTab: "photos",
    results: [],
    error: null,
    loading: false,
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setActiveTab: (state, action) => {
      state.activeTab = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
      state.loading = false; // Stop loading when results are set
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loading = false; // Stop loading when an error occurs
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
      state.error = null; // Reset error when loading starts
    },
    clearResults: (state) => {
      state.results = [];
      state.error = null;
      state.loading = false;
    },
  },
});

export const { setQuery, setActiveTab, setResults, setError, setLoading } =
  searchSlice.actions;

export default searchSlice.reducer;
