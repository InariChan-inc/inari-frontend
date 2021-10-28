import { VoidFunctionComponent } from "react";
import { BaseIconProps } from '../../interfaces';
import { getStyles } from "../utils";

const Download: VoidFunctionComponent<BaseIconProps> = ({
  color,
  size = 24,
  style,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    style={{...style, ...getStyles(color)}}
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path fill="none" d="M0 0h24v24H0z" />
    <path d="M18 15v3H6v-3H4v3c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2v-3h-2zm-1-4l-1.41-1.41L13 12.17V4h-2v8.17L8.41 9.59 7 11l5 5 5-5z" />
  </svg>
);

export default Download;