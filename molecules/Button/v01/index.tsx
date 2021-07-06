import { CSSProperties } from "react";
import { FunctionComponent, JSXElementConstructor } from "react";
import { Button as Text } from '../../../typography';

interface ButtonProps {
    onClick?: () => void,
    children?: any,
    icon?: JSX.Element,
    style?: CSSProperties,
    className?: string,
}

const Button: FunctionComponent<ButtonProps> = ({
    onClick,
    children = '',
    icon,
    style,
    className = '',
}) => (
  <button 
    className={'flex items-center px-6 py-3 rounded-full text-white ' + className}
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


export default Button;