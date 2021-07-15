import { FunctionComponent } from "react";
import { BaseCTA } from "../../interfaces";

const ArrowRight: FunctionComponent<BaseCTA> = ({
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
    <path d="M10.02 6L8.61 7.41 13.19 12l-4.58 4.59L10.02 18l6-6-6-6z" />
  </svg>
);

export default ArrowRight;
