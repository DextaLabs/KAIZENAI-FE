import styles from "./login.module.scss";
import Forms from "@/components/Shared/Forms";
import * as Yup from "yup";
import { FormPropType } from "../Shared/Types/formPropType";
import classNames from "classnames";
import { Inter, Josefin_Sans } from "next/font/google";
import { useRouter } from "next/navigation";

const josefin = Josefin_Sans({ subsets: ["latin"] });
const inter = Inter({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
});

const validationSchema = Yup.object().shape({
  password: Yup.string().required("Please enter your password"),
  email: Yup.string()
    .email("Please enter a valid email address")
    .required("Please enter your email"),
});

const LoginForm = (props: FormPropType) => {
  const { handleChange, values, isSubmitting, errors, handleBlur } = props;

  return (
    <div className="flex flex-col gap-4">
      <input
        type="email"
        name="email"
        placeholder="Email"
        className="outline-none rounded-md p-3"
        onChange={handleChange}
        onBlur={handleBlur}
        value={values.email}
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
          initialValue={{ email: "", password: "" }}
          validate={validationSchema}
          onSubmit={() => {
            router.replace("/");
          }}
        >
          <LoginForm {...({} as FormPropType)} />
        </Forms>
      </div>
    </main>
  );
};

export default Login;
