import { FunctionComponent } from "react";
import { BaseAtom } from "../interfaces";

import logo from '/public/logo.png';

interface LogoProps extends BaseAtom {
    width: number | string,
    height: number | string,
}

const Logo: FunctionComponent<LogoProps> = ({
    className = '',
    width,
    height,
}) => (
    <div 
        className={'bg-cover ' + className}
        style={{ 
            width,
            height,
            backgroundImage: `url(${logo.src})` 
        }}
    />
);

export default Logo;