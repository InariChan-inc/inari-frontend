import { FunctionComponent } from "react";
import { BaseIconProps } from "../../interfaces";
import { getStyles } from "../utils";


const Cooperation: FunctionComponent<BaseIconProps> = ({
  color,
  size = 24,
}) => (
  <svg
    style={getStyles(color)}
    height={size}
    width={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-6 0h-4V4h4v2z" />
  </svg>
);


export default Cooperation;