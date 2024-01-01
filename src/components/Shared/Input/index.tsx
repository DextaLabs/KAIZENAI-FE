import { InputBase, InputBaseProps } from "@mui/material";
import classNames from "classnames";

type propsType = InputBaseProps;

const Input = (props: propsType) => {
  const { className, ...rest } = props;
  return (
    <InputBase
      className={classNames(
        "w-full bg-white rounded-md placeholder-placeholder outline-none pl-3 sm:pl-4 md:pl-5 font-medium text-[16px] h-[32px] sm:h-[38px] md:h-[50px]",
        { [className!]: !!className }
      )}
      {...rest}
    />
  );
};

export default Input;
