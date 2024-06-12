import { configureStore } from "@reduxjs/toolkit";
import UserDetails from "./Reducers/UserDetails";

export const Store = configureStore({
  reducer: {
    User: UserDetails,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export default Store;
