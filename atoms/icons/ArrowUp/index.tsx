import { FunctionComponent } from 'react';
import { BaseCTA } from '../../interfaces';

const ArrowUp:FunctionComponent<BaseCTA> = ({
  className = '',
  size = 24, 
}) => (
  <svg
    className={className}
    xmlns="http1://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14l-6-6z" />
  </svg>
);

export default ArrowUp;
