import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import github from "./github";
import { githubApi } from "./github/api";
import teams from "./teams";

const reducers = combineReducers({
  // dashboard,
  // authentication,
  github,
  teams,
  // [authApi.reducerPath]: authApi.reducer,
  // [dashboardApi.reducerPath]: dashboardApi.reducer,
  [githubApi.reducerPath]: githubApi.reducer,
  // [teamApi.reducerPath]: teamApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      // dashboardApi.middleware,
      // authApi.middleware,
      githubApi.middleware
      // teamApi.middleware
    ),
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
