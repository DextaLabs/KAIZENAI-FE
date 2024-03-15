import { RootState } from "@/provider/store";
import { BaseQueryApi } from "@reduxjs/toolkit/query";

export const prepareHeaders = async (
  headers: Headers,
  api: Pick<BaseQueryApi, "type" | "getState" | "extra" | "endpoint" | "forced">
) => {
  const store = api.getState() as RootState;
  const token = store.authentication.token;

  headers.set("Content-Type", "application/json");
  headers.set("Authorization", `Bearer ${token}`);
  return headers;
};
