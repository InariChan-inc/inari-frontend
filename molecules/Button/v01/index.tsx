import { CSSProperties } from "react";
import { FunctionComponent, JSXElementConstructor } from "react";
import { Button as Text } from '../../../typography';
import { ButtonTextColors } from "../../../typography";

/**
 * Object with classes for button background
 * Add new background here and specify its tailwind classes
 */
const backgrounds = {
  brown: 'bg-brown-2 hover:bg-black',
}

/**
 * Default classes
 */
const DEFAULT = 'flex items-center px-6 py-3 rounded-full text-white duration-700';

interface ButtonProps {
    onClick?: () => void,
    children?: any,
    icon?: JSX.Element,
    style?: CSSProperties,
    className?: string,
    bg: keyof typeof backgrounds,
    color?: ButtonTextColors,
}

const Button: FunctionComponent<ButtonProps> = ({
    onClick,
    children = '',
    icon,
    style,
    className = '',
    bg,
    color = 'black',
}) => {
  const resClassName = [DEFAULT, className, backgrounds[bg]].join(' ');

  return (
    <button 
      className={resClassName}
      style={style}
      onClick={onClick}
    >
      {icon}
      <div className="pl-2">
        <Text 
          type={1}
          color={color}
        >
          {children}
        </Text>
      </div>
    </button>
  );
};


export default Button;