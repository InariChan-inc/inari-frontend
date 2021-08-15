import { FunctionComponent } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {
  title?: string,
}

const Link: FunctionComponent<LinkProps> = ({
  children = '',
  title = '',
  ...props
}) => (
  <NextLink {...props}>
    <a title={title}>{children}</a>
  </NextLink>
);


export default Link;