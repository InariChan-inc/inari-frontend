import { FunctionComponent } from "react";


const buttonStyles = {
  1: 'font-montserrat font-medium text-18 tracking-3p leading-none',
  2: 'font-montserrat font-bold text-13 tracking-3p leading-none',
  3: 'font-montserrat text-16 tracking-1p leading-none',
  4: 'font-montserrat font-semibold, text-18'
}

interface ButtonProps {
  type: keyof typeof buttonStyles,
  children: string,
  className?: string,
}

const Button: FunctionComponent<ButtonProps> = ({
  type, 
  children,
  className = ''
}) => (
  <span className={`${buttonStyles[type]} ${className}`}>{children}</span>
);


export default Button;