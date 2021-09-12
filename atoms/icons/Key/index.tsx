import { FunctionComponent } from "react"
import { BaseIconProps } from '../../interfaces';

const Key: FunctionComponent<BaseIconProps> = ({
  color = 'black',
  size = 24,
}) => (
  <svg
    style={{
      color,
      fill: 'currentcolor',
    }}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none" />
    <path d="M12.65 10A5.99 5.99 0 007 6c-3.31 0-6 2.69-6 6s2.69 6 6 6a5.99 5.99 0 005.65-4H17v4h4v-4h2v-4H12.65zM7 14c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" />
  </svg>
);

export default Key;
