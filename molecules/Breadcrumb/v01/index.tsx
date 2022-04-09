import {
  CSSProperties,
  FunctionComponent,
  Fragment
} from "react";
import { Link } from '@atoms';
import {
  BreadcrumbContainer,
  Circle,
  Crumb,
} from './styles';

interface BreadcrumbProps {
  crumbs: Array<{
    name: string;
    to: string;
  }>;
  style?: CSSProperties;
}


export const Breadcrumb: FunctionComponent<BreadcrumbProps> = ({
 crumbs,
 style,
}) => (
  <BreadcrumbContainer style={style}>
    {
      crumbs.map(({ name, to }, index) => (
        <Fragment key={index}>
          {index !== crumbs.length - 1 ? (
            <>
              <Link href={to}>
                <Crumb
                  type={3}
                >
                  {name}
                </Crumb>
              </Link>
              <Circle />
            </>
          ) : (
            <Crumb
              type={3}
              active
            >
              {name}
            </Crumb>
          )}
        </Fragment>
      ))
    }
  </BreadcrumbContainer>
);

export default Breadcrumb;