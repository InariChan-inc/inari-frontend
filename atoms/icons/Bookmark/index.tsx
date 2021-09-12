import { FunctionComponent } from "react";
import { BaseIconProps } from '../../interfaces';

const Bookmark: FunctionComponent<BaseIconProps> = ({
  color = 'black',
  size = 24,
}) => (
  <svg
    style={{
      color,
      fill: 'currentcolor'
    }}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z" />
  </svg>
);

export default Bookmark;
