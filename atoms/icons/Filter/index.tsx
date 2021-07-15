import { FunctionComponent } from 'react';
import { BaseCTA } from '../../interfaces';

const Filter: FunctionComponent<BaseCTA> = ({
  className = '',
  size = 24,
}) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    height={size}
    width={size}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0V0z" fill="none" />
    <path d="M10 18h4v-2h-4v2zM3 6v2h18V6H3zm3 7h12v-2H6v2z" />
  </svg>
);


export default Filter;