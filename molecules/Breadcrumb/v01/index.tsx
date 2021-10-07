import { CSSProperties, FunctionComponent } from "react";
import { Link } from '@atoms';
import { Button } from '@typography';
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
        <>
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
        </>
      ))
    }
  </BreadcrumbContainer>
);

export default Breadcrumb;