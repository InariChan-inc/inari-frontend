import { FunctionComponent } from "react";
import { BaseCTA } from "../interfaces";

const PersonCTA: FunctionComponent<BaseCTA> = ({
    className = '',
    size = 24,
}) => (
  <svg 
    className={className}
    xmlns="http://www.w3.org/2000/svg" 
    height={size}
    width={size}
    viewBox="0 0 24 24"
    fill="#000000">
      <path 
        d="M0 0h24v24H0z"
        fill="none" />
      <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);

export default PersonCTA