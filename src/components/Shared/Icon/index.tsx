import { HTMLProps } from "react";
import Svg from "react-inlinesvg";

type propType = {
  name: string;
  className?: HTMLProps<HTMLElement>["className"];
};

export default function Icon(props: propType) {
  const { name, className = "" } = props;
  return (
    <Svg src={`/assets/svg/${name}.svg`} className={className} title="React" />
  );
}
