export type LoginBodyType = {
  body: {
    username: string;
    password: string;
  };
};

export type LoginResponseType = {
  access_token: string;
  token_type: string;
};
