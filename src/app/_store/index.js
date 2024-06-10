import { configureStore } from "@reduxjs/toolkit";
import SearchSlice from './slice/search';

const store = configureStore({
  reducer: {
    search: SearchSlice
  }
})

export default store;