// import { useAppDispatch } from "@/provider/store";
// import { setAuthData, useAuthStore } from "@/provider/store/authentication";
// import {
//   useLazyGetUsersMeQuery,
//   useLoginUserMutation,
// } from "@/provider/store/authentication/api";
import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
// import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { axiosInstance } from "../../library/utils/axiosInstance";
import Button from "../Shared/Button";
import Forms from "../Shared/Forms";
import OutlineInput from "../Shared/Input/OutlineInput";
import { FormPropType } from "../Shared/Types/formPropType";
import styles from "./login.module.scss";
import "./styles.css";
import { toast } from "react-toastify";
import { useAuth, User } from "../../library/utils/AuthProvider";
import { useState } from "react";

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Please enter your password"),
  email: Yup.string()
    .email("Invalid Email")
    .required("Please enter your Email"),
});

const LoginUser = async (data: any) => {
  const response = await axiosInstance.post("user/login/", data);
  return response.data;
};

const LoginForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, errors, handleBlur } = props;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(errors).length > 0 ? (
        <Alert severity="error">{Object.values(errors)[0] as string}</Alert>
      ) : null}
      <OutlineInput
        type="text"
        icon="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
      />
      <div className="relative">
        <OutlineInput
          icon="password"
          type={showPassword ? "text" : "password"}
          name="password"
          placeholder="Password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
        <button
          type="button"
          className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
          onClick={togglePasswordVisibility}
        >
          {showPassword ? "Hide" : "Show"}
        </button>
      </div>
      <Button
        type="submit"
        className="bg-purpleNav hover:bg-purpleNav"
        disabled={isSubmitting}
        isSubmitting={isSubmitting}
      >
        Log In
      </Button>

      <p className="text-center text-red-400 font-bold">Forgot Password?</p>
      <div className="flex justify-center items-center">
        <hr className="border-t border-slate-300 w-1/3" />
        <p className="text-center text-slate-400 font-bold mx-4 mb-0">Or</p>
        <hr className="border-t border-slate-300 w-1/3" />
      </div>

      <div className="flex space-x-4">
        <button className="google-signup-btn w-1/2 py-2 px-4 bg-white border-2 border-gary1 rounded-md flex items-center justify-center">
          <img
            src="https://developers.google.com/identity/images/g-logo.png"
            alt="Google logo"
            className="w-6 h-6 mr-2"
          />
          Google
        </button>
        <button className="google-signup-btn w-1/2 py-2 px-4 bg-white border-2 border-gary1 rounded-md flex items-center justify-center">
          <img
            src="https://mailmeteor.com/logos/assets/PNG/Microsoft_Logo_256px.png"
            alt="Microsoft"
            className="w-6 h-6 mr-2"
          />
          Microsoft
        </button>
      </div>
    </div>
  );
};

const Login = () => {
  const { mutate } = useMutation({
    mutationKey: ["login"],
    mutationFn: (data) => LoginUser(data),
    onSuccess(data) {
      toast.success(data.message);
      setUser(data.user as User);
      sessionStorage.setItem("access", data.tokens.access);
      sessionStorage.setItem("refresh", data.tokens.refresh);
      login();
      navigate("/home", { replace: true });
    },
    onError(error: any) {
      toast.error(error.response.data.message);
    },
  });

  // const [loginUser, { data }] = useLoginUserMutation();
  // const [getMeDetail] = useLazyGetUsersMeQuery();
  // const { authenticated } = useAuthStore();
  // const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { login, setUser } = useAuth();
  // const handleSetToken = async (token: string) => {
  //   try {
  //     await axios.post(`/api/setToken?${Date.now()}`, {
  //       token,
  //     });
  //     dispatch(setAuthData({ token: token, authenticated: true }));
  //   } catch (err) {}
  // };

  // const handleGetMineDetail = async () => {
  //   const res = await getMeDetail({});
  //   if (res.data) {
  //     dispatch(setAuthData({ profile: res.data }));
  //     router.replace("/");
  //   }
  // };

  // useEffect(() => {
  //   if (authenticated) {
  //     handleGetMineDetail();
  //   }
  // }, [authenticated]);

  // useEffect(() => {
  //   if (data) {
  //     handleSetToken(data.access_token);
  //   }
  // }, [data]);
  const handleSubmit = (values: any) => {
    mutate(values);
  };

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
          onSubmit={handleSubmit}
        >
          <LoginForm {...({} as FormPropType)} />
        </Forms>
        <div className="text-center mt-6">
          Don't have an account?{" "}
          <Link to="/signup">
            <span className="text-blue-600">Sign Up</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;
