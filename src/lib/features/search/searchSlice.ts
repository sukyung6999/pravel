import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../../store';

interface searchState {
  tab: string;
}

const initialState: searchState = {
  tab: '',
};

const reducers = {
  setCurrentTab: (state: searchState, { payload }: PayloadAction<string>) => {
    state.tab = payload;
  },
};

export const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers,
});

export const { setCurrentTab } = searchSlice.actions;

export const searchTab = (state: RootState) => state.search.tab;

export default searchSlice.reducer;
