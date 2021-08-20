import { FunctionComponent } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  title?: string,
  className?: string,
}

const Link: FunctionComponent<LinkProps> = ({
  children = '',
  title = '',
  className = '',
  ...props
}) => (
  <NextLink {...props}>
    <a className={className} title={title}>{children}</a>
  </NextLink>
);


export default Link;