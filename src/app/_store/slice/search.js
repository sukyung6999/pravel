import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tab: 'food'
}

const reducers = {
  setCurrentTab: (state, {payload}) => {
    state.tab = payload.data;
  }
}

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers
})

export const {setCurrentTab} = searchSlice.actions;
export default searchSlice.reducer;