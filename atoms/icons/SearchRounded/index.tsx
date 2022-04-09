import { FunctionComponent } from "react"
import { BaseIconProps } from "../../interfaces"
import { getStyles } from "../utils";


const  SearchRounded: FunctionComponent<BaseIconProps> = ({
  color,
  size = 24,
  style,
}) => (
  <svg
    id="prefix__\u0421\u043B\u043E\u0439_1"
    xmlns="http://www.w3.org/2000/svg"
    x={0}
    y={0}
    viewBox="0 0 36 36"
    xmlSpace="preserve"
    style={{...style, ...getStyles(color)}}
    width={size}
    height={size}
  >
    <path
      d="M24.1 26.2v-1.1l-.4-.4c-1.6 1.3-3.6 2.2-5.8 2.2-4.9 0-8.9-4-8.9-8.9 0-5 4-9 8.9-9s8.9 4 8.9 8.9c0 2.2-.8 4.2-2.2 5.8l.4.4h1.1l3.4 3.4c2.1-2.6 3.4-5.9 3.4-9.5 0-8.3-6.7-15-15-15C9.7 3 3 9.7 3 18s6.7 15 15 15c3.6 0 6.9-1.3 9.5-3.4l-3.4-3.4z"
    />
    <circle
      transform="rotate(-45.001 17.92 17.92)"
      cx={17.9}
      cy={17.9}
      r={6.2}
    />
  </svg>
);

export default SearchRounded;