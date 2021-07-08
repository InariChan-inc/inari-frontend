import { FunctionComponent } from "react";

const colors = {
    brown: 'text-brown',
    white: 'text-white',
    black: 'text-black',
}

export type ButtonTextColors = keyof typeof colors;

type ButtonType = 1 | 2 | 3;

interface ButtonProps {
    type: ButtonType,
    children: string,
    color?: ButtonTextColors,
}

const buttonStyles: {[type in ButtonType]: string} = {
    1: 'font-montserrat font-medium text-18 tracking-3p leading-none"',
    2: 'font-montserrat font-bold text-13 tracking-3p leading-none"',
    3: 'font-montserrat text-18 tracking-1p leading-none"',
}

const Button: FunctionComponent<ButtonProps> = ({
    type, 
    children,
    color = 'black'
}) => {
    const resClassName = [buttonStyles[type], colors[color]].join(' ');

    return (
        <span className={resClassName}>{children}</span>
    );
}


export default Button;