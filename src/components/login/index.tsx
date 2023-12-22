import styles from "./login.module.scss";
import Forms from "@/components/Shared/Forms";
import * as Yup from "yup";
import { FormPropType } from "../Shared/Types/formPropType";
import classNames from "classnames";
import { Inter, Josefin_Sans } from "next/font/google";
import Alert from "@mui/material/Alert";
import {
  useLazyGetUsersMeQuery,
  useLoginUserMutation,
} from "@/app/store/authentication/api";
import { LoginBodyType } from "../Shared/Types/login";
import axios from "axios";
import { useEffect } from "react";
import { setAuthData, useAuthStore } from "@/app/store/authentication";
import { useAppDispatch } from "@/app/store";
import { id } from "date-fns/locale";
import { useRouter } from "next/navigation";

const josefin = Josefin_Sans({ subsets: ["latin"] });
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

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
      <input
        type="text"
        name="username"
        placeholder="Username"
        className="outline-none rounded-md p-3"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.username}
      />
      <input
        type="password"
        name="password"
        placeholder="Password"
        className="outline-none rounded-md p-3"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.password}
      />
      <button
        type="submit"
        className="outline-none rounded-md p-3 bg-purple"
        disabled={isSubmitting}
      >
        Submit
      </button>
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
      await axios.post("/api/setToken", {
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
      <div className="w-[400px] max-w-[100%]  px-4">
        <div className="flex gap-2 justify-center mb-4">
          <h1
            className={classNames(
              josefin.className,
              inter.className,
              "font-light text-4xl"
            )}
          >
            DextaLabs
          </h1>
          <h1
            className={classNames(
              josefin.className,
              inter.className,
              "font-bold text-4xl text-purple"
            )}
          >
            A.I
          </h1>
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
