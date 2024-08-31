import classNames from "classnames";
import Icon from "../../Icon";

type propsType = Omit<
  React.HTMLProps<HTMLInputElement>,
  "onChange" | "value"
> & {
  icon?: string;
  value?: any;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const OutlineInput = (props: propsType) => {
  const { className, icon = "", ...rest } = props;

  return (
    <div className="pl-4 border-2 border-gary1 rounded-md  flex items-center">
      {!!icon && <Icon name={icon} />}

      <input
        className={classNames(
          "w-full bg-white rounded-md placeholder-placeholder outline-none font-medium text-[16px] h-[32px] sm:h-[38px] md:h-[50px]",
          {
            [className!]: !!className,
            "pl-1 sm:pl-2 md:pl-3": !!icon,
            " pl-3 sm:pl-4 md:pl-5": !icon,
          }
        )}
        {...rest}
      />
    </div>
  );
};

export default OutlineInput;
