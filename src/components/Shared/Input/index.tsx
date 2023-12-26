import classNames from "classnames";
import React from "react";

type propsType = Omit<
  React.HTMLProps<HTMLInputElement>,
  "onChange" | "value"
> & {
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = (props: propsType) => {
  const { className, ...rest } = props;
  return (
    <input
      className={classNames(
        "w-full bg-white rounded-md placeholder-placeholder outline-none pl-3 sm:pl-4 md:pl-5 font-medium text-[16px] h-[32px] sm:h-[38px] md:h-[50px]",
        { [className!]: !!className }
      )}
      {...rest}
    />
  );
};

export default Input;
