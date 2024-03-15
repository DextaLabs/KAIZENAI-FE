import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { combineReducers } from "redux";
import authentication from "./authentication";
import { authApi } from "./authentication/api";
import dashboard from "./dashboard";
import { dashboardApi } from "./dashboard/api";
import github from "./github";
import { githubApi } from "./github/api";

const reducers = combineReducers({
  dashboard,
  authentication,
  github,
  [authApi.reducerPath]: authApi.reducer,
  [dashboardApi.reducerPath]: dashboardApi.reducer,
  [githubApi.reducerPath]: githubApi.reducer,
});

const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }).concat(
      dashboardApi.middleware,
      authApi.middleware,
      githubApi.middleware
    ),
});

export type RootState = ReturnType<typeof reducers>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export default store;
