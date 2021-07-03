import { FunctionComponent } from "react";

interface LinkProps {
    children: string,
}

const Link: FunctionComponent<LinkProps> = ({children}) => (
    <span className="font-montserrat font-bold text-18 tracking-normal leading-140p underline">{children}</span>
)

export default Link;