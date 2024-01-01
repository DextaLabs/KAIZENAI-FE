import { useAppDispatch } from "@/app/store";
import { setAuthData, useAuthStore } from "@/app/store/authentication";
import {
  useLazyGetUsersMeQuery,
  useLoginUserMutation,
} from "@/app/store/authentication/api";
import Forms from "@/components/Shared/Forms";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import axios from "axios";
import classNames from "classnames";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import * as Yup from "yup";
import Button from "../Shared/Button";
import OutlineInput from "../Shared/Input/OutlineInput";
import { FormPropType } from "../Shared/Types/formPropType";
import { LoginBodyType } from "../Shared/Types/login";
import styles from "./login.module.scss";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Please enter your password"),
  username: Yup.string().required("Please enter your username"),
});

const LoginForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, errors, handleBlur } = props;

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(errors).length > 0 ? (
        <Alert severity="error">{Object.values(errors)[0] as string}</Alert>
      ) : null}
      <OutlineInput
        type="text"
        icon="email"
        name="username"
        placeholder="Username"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
      <OutlineInput
        icon="password"
        type="password"
        name="password"
        placeholder="Password"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <Button
        type="submit"
        className="bg-purpleNav hover:bg-purpleNav"
        disabled={isSubmitting}
        isSubmitting={isSubmitting}
      >
        Log In
      </Button>
    </div>
  );
};

const Login = () => {
  const router = useRouter();
  const [loginUser, { data }] = useLoginUserMutation();
  const [getMeDetail] = useLazyGetUsersMeQuery();
  const { authenticated } = useAuthStore();
  const dispatch = useAppDispatch();

  const handleSetToken = async (token: string) => {
    try {
      await axios.post(`/api/setToken?${Date.now()}`, {
        token,
      });
      dispatch(setAuthData({ token: token, authenticated: true }));
    } catch (err) {}
  };

  const handleGetMineDetail = async () => {
    const res = await getMeDetail({});
    if (res.data) {
      dispatch(setAuthData({ profile: res.data }));
      router.replace("/");
    }
  };

  useEffect(() => {
    if (authenticated) {
      handleGetMineDetail();
    }
  }, [authenticated]);

  useEffect(() => {
    if (data) {
      handleSetToken(data.access_token);
    }
  }, [data]);

  return (
    <main
      className={classNames(
        styles.wrapper,
        "flex gap-4 justify-center items-center"
      )}
    >
      <div className="w-[580px] max-w-full bg-white  pt-9 pb-16  px-24 rounded-[16px] shadow-shadowUp">
        <div className="flex gap-2 justify-center mb-10">
          <Typography variant="h2">Log in</Typography>
        </div>
        <Forms
          initialValue={{ username: "", password: "" }}
          validate={validationSchema}
          onSubmit={async value => {
            await loginUser({ body: value } as LoginBodyType);
          }}
        >
          <LoginForm {...({} as FormPropType)} />
        </Forms>
      </div>
    </main>
  );
};

export default Login;
