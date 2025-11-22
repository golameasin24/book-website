/* eslint-disable @typescript-eslint/no-explicit-any */

import { bookData } from "@/components/HSCBOOk/HscData";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  results: any[];
}

const initialState: SearchState = {
  query: "",
  results: bookData, // default = all books
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;

      const text = action.payload.toLowerCase();

      // Filter books
      state.results = bookData.filter((book) =>
        book.name.toLowerCase().includes(text)
      );
    },

    clearSearch: (state) => {
      state.query = "";
      state.results = bookData;
    },
  },
});

export const { setQuery, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
