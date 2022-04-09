import {
  FunctionComponent,
  CSSProperties,
} from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  title?: string,
  style?: CSSProperties,
}

const Link: FunctionComponent<LinkProps> = ({
  children = '',
  title = '',
  style,
  ...props
}) => (
  <NextLink {...props}>
    <a
      title={title}
      style={style}
    >
      {children}
    </a>
  </NextLink>
);


export default Link;