import { FunctionComponent } from "react";


type ButtonType = 1 | 2 | 3;

interface ButtonProps {
    type: ButtonType,
    children: string,
}

const buttonStyles: {[type in ButtonType]: string} = {
    1: 'font-montserrat font-medium text-18 tracking-3p leading-none"',
    2: 'font-montserrat font-bold text-13 tracking-3p leading-none"',
    3: 'font-montserrat text-18 tracking-1p leading-none"',
}

const Button: FunctionComponent<ButtonProps> = ({type, children}) => (
    <span className={buttonStyles[type]}>{children}</span>
)


export default Button;