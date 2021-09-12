import { FunctionComponent } from "react";
import { BaseIconProps } from '../../interfaces';

interface LogOutIconProps extends BaseIconProps {
  onClick?: () => void,
}

const LogOut: FunctionComponent<LogOutIconProps> = ({
  color = 'black',
  size = 24,
  onClick = () => {},
}) => (
  <svg
    style={{
      color,
      fill: 'currentcolor',
    }}
    onClick={onClick}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M17 8l-1.41 1.41L17.17 11H9v2h8.17l-1.58 1.58L17 16l4-4-4-4zM5 5h7V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h7v-2H5V5z" />
  </svg>
);

export default LogOut;
