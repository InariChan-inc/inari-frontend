import { ReactNode } from "react";
import { FunctionComponent } from "react";

const linkTypes = {
    1: 'font-montserrat font-bold text-18 tracking-normal leading-140p underline',
    2: 'font-montserrat font-bold text-14 tracking-normal leading-140p underline'
}

interface LinkProps {
  type: keyof typeof linkTypes,
  children: ReactNode,
  className?: string,
}

const Link: FunctionComponent<LinkProps> = ({
  type,
  children,
  className = '',
}) => (
  <span className={`${linkTypes[type]} ${className}`}>{children}</span>
)

export default Link;