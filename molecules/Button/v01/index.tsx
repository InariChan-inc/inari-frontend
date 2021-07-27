import { CSSProperties } from "react";
import { FunctionComponent, JSXElementConstructor } from "react";
import { Button as Text, ButtonTextColors } from '../../../typography';

const types = {
  1: 'text-white disabled:text-yellow-5 duration-300 disabled:cursor-not-allowed bg-brown-2 hover:bg-brown-1 disabled:bg-yellow-2',
}
interface ButtonProps {
    onClick?: () => void,
    type?: keyof typeof types,
    buttonType?: 'button' | 'submit' | 'reset',
    children?: string,
    icon?: JSX.Element,
    style?: CSSProperties,
    className?: string,
    disabled?: boolean
}

const Button: FunctionComponent<ButtonProps> = ({
    onClick,
    children = '',
    icon,
    style,
    className = '',
    disabled,
    type = 1,
    buttonType = 'button',
}) => {

  return (
    <button 
      type={buttonType}
      disabled={disabled}
      className={`flex items-center px-6 py-3 rounded-full ${types[type]} ${className}`}
      style={style}
      onClick={onClick}
    >
      {icon}
      <div className={`${icon ? 'pl-2' : ''}`}>
        <Text 
          type={1}
        >
          {children}
        </Text>
      </div>
    </button>
  );
};


export default Button;