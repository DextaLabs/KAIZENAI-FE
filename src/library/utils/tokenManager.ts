export const prepareHeaders = async (headers: Headers) => {
  // const store = api.getState() as RootState;
  // const token = store.authentication.token;

  headers.set("Content-Type", "application/json");
  // headers.set("Authorization", `Bearer ${token}`);
  return headers;
};
