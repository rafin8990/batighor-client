import { configureStore } from "@reduxjs/toolkit";
import bookReducer from "./Features/BookSlice";
import userReducer from "./Features/userSlice";
import { api } from "./Features/api/apiSlice";

const store = configureStore({
  reducer: {
    book: bookReducer,
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
