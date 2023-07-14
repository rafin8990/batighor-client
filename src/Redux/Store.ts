import { configureStore } from "@reduxjs/toolkit";
import logger from "./middleware/logger";
import bookReducer from "./Features/BookSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
