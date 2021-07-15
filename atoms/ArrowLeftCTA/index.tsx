import { FunctionComponent } from "react";
import { BaseCTA } from "../interfaces";


const ArrowLeftCTA: FunctionComponent<BaseCTA> = ({
    className = '',
    size = 24,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M15.61 7.41L14.2 6l-6 6 6 6 1.41-1.41L11.03 12l4.58-4.59z" />
  </svg>
);


export default ArrowLeftCTA;