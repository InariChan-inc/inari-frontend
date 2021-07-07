import { CSSProperties } from "react";
import { FunctionComponent, JSXElementConstructor } from "react";
import { Button as Text } from '../../../typography';

/**
 * Object with classes for button background
 * Add new background here and specify its tailwind classes
 */
const backgrounds = {
  brown: 'bg-brown hover:bg-black',
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
}

const Button: FunctionComponent<ButtonProps> = ({
    onClick,
    children = '',
    icon,
    style,
    className = '',
    bg,
}) => {
  const resClassName = [DEFAULT, backgrounds[bg], className].join(' ');

  return (
    <button 
      className={resClassName}
      style={style}
      onClick={onClick}
    >
      {icon}
      <div className="pl-2">
        <Text type={1}>
          {children}
        </Text>
      </div>
    </button>
  );
};


export default Button;