import React, { CSSProperties, ReactNode } from "react";
import {
  ButtonTypes,
  StyledButton,
  Text,
} from './styles';
interface ButtonProps {
    onClick?: () => void;
    type?: ButtonTypes;
    buttonType?: 'button' | 'submit' | 'reset';
    children?: ReactNode;
    Icon?: React.JSXElementConstructor<{}>;
    style?: CSSProperties;
    disabled?: boolean;
    padding?: string;
    margin?: string;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({
  onClick,
  children = '',
  Icon,
  disabled,
  type = 1,
  buttonType = 'button',
  style = {},
  padding = '10px 20px',
  margin = '0'
}, ref) => (
  <StyledButton
    styleType={type}
    ref={ref}
    type={buttonType}
    disabled={disabled}
    onClick={onClick}
    style={style}
    padding={padding}
    margin={margin}
  >
    {Icon ? <Icon /> : null}
    <Text
      isIcon={!!Icon}
      type={1}
    >
      {children}
    </Text>
  </StyledButton>
));


export default Button;