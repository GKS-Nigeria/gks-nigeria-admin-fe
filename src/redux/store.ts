import { configureStore } from "@reduxjs/toolkit";
import uiReducer from "./slices/ui";

export const store = configureStore({
  reducer: { ui: uiReducer },
  middleware: (defaultMiddlewares) =>
    defaultMiddlewares({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
