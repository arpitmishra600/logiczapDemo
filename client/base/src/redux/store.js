import { configureStore } from "@reduxjs/toolkit";
import boardsSlice from "./boardsSlice";

const loggerMiddleware = (store) => (next) => (action) => {
  const result = next(action);
  console.log("Updated State:", store.getState().boards);
  return result;
};
const store = configureStore({
  reducer: {
    boards: boardsSlice.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(loggerMiddleware),
})

export default store
