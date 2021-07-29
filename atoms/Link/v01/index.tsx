import { FunctionComponent } from 'react';
import NextLink, { LinkProps as NextLinkProps } from 'next/link';

interface LinkProps extends NextLinkProps {

}

const Link: FunctionComponent<LinkProps> = ({
  children = '',
  ...props
}) => (
  <NextLink {...props}>
    <a>{children}</a>
  </NextLink>
);


export default Link;