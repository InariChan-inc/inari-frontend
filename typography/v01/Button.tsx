import { FunctionComponent } from "react";


const buttonStyles = {
  1: 'font-montserrat font-medium text-16 tracking-[0.5px]',
  2: 'font-montserrat font-bold text-13 tracking-[0.4px] leading-[130%]',
  3: 'font-montserrat text-16 tracking-[0.5px]',
  4: 'font-montserrat font-semibold text-18'
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