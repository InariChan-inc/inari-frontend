import { ReactNode } from 'react';
import { FunctionComponent } from 'react';

const bodyStyles = {
  1: 'font-montserrat text-24 tracking-normal leading-none',
  2: 'font-montserrat text-18 tracking-normal leading-none',
  3: 'font-montserrat font-bold text-18 tracking-normal leading-none',
  4: 'font-montserrat font-medium text-16 tracking-normal leading-140p',
  5: 'font-montserrat font-bold text-16 tracking-normal leading-140p',
  6: 'font-montserrat font-semibold text-14 tracking-normal leading-none',
  7: 'font-montserrat font-light italic text-14 tracking-3p leading-none',
  8: 'font-montserrat font-medium text-14 tracking-normal leading-none',
  9: 'font-montserrat font-medium italic text-14 tracking-3p leading-none',
  10: 'font-montserrat font-medium italic text-16 tracking-3p leading-none',
  11: 'font-montserrat font-medium text-[12px] tracking-3p leading-140p',
}

interface BodyProps {
  type: keyof typeof bodyStyles,
  children: ReactNode,
  className?: string,
}


const Body: FunctionComponent<BodyProps> = ({
  type, 
  children,
  className = '',
}) => (
  <p className={`${bodyStyles[type]} ${className}`}>{children}</p>
)


export default Body;