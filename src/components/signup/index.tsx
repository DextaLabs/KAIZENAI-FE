import { Typography } from "@mui/material";
import Alert from "@mui/material/Alert";
import classNames from "classnames";
import { Link, useNavigate } from "react-router-dom";
import * as Yup from "yup";
import Button from "../Shared/Button";
import Forms from "../Shared/Forms";
import OutlineInput from "../Shared/Input/OutlineInput";
import { FormPropType } from "../Shared/Types/formPropType";
import styles from "./signup.module.scss";
import { axiosInstance } from "../../library/utils/axiosInstance";
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { useAuth, User } from "../../library/utils/AuthProvider";

const validationSchema = Yup.object().shape({
  password: Yup.string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
      "Password must contain at least one lowercase letter, one uppercase letter, one number, and one special character"
    ),
  first_name: Yup.string().required("Please enter your username"),
  last_name: Yup.string().required("Please enter your username"),
  // organization: Yup.string().required("Please enter your organization"),
  email: Yup.string()
    .email("Invalid email")
    .required("Please enter your email"),
});

const SignUpUser = async (data: unknown) => {
  const response = await axiosInstance.post("user/signup/", data);
  return response.data;
};

const SignupForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, errors, handleBlur } = props;

  return (
    <div className="flex flex-col gap-4">
      {Object.keys(errors).length > 0 ? (
        <Alert severity="error">{Object.values(errors)[0] as string}</Alert>
      ) : null}
      <OutlineInput
        type="text"
        icon="user"
        name="first_name"
        placeholder="First Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.firstname}
      />
      <OutlineInput
        type="text"
        icon="user"
        name="last_name"
        placeholder="Last Name"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.lastname}
      />
      <OutlineInput
        type="email"
        icon="email"
        name="email"
        placeholder="Email"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
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
      {/* <OutlineInput
        icon="user"
        type="organization"
        name="organization"
        placeholder="Organization"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.organization}
      /> */}
      <Button
        type="submit"
        className="bg-purpleNav hover:bg-purpleNav"
        disabled={isSubmitting}
        isSubmitting={isSubmitting}
      >
        Sign Up
      </Button>

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

const Signup = () => {
  const navigate = useNavigate();
  const { login, setUser } = useAuth();

  const { mutate } = useMutation({
    mutationFn: (data) => SignUpUser(data),
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = (values: any) => {
    mutate(values, {
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
  };

  return (
    <main
      className={classNames(
        styles.wrapper,
        "flex gap-4 justify-center items-center"
      )}
    >
      <div className="w-[580px] max-w-full bg-white pt-9 pb-16 px-24 rounded-[16px] shadow-shadowUp">
        <div className="flex gap-2 justify-center mb-10">
          <Typography variant="h2">Sign Up</Typography>
        </div>
        <Forms
          initialValue={{
            first_name: "",
            last_name: "",
            email: "",
            password: "",
          }}
          validate={validationSchema}
          onSubmit={handleSubmit}
        >
          <SignupForm {...({} as FormPropType)} />
        </Forms>
        <div className="text-center mt-6">
          Already have an account?{" "}
          <Link to="/">
            <span className="text-blue-600">Log In</span>
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Signup;
