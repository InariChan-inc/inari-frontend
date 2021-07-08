import Link from 'next/link';
import { FunctionComponent } from "react";
import { 
  Button,
  ButtonTextColors,
} from '../../../typography';

interface MenuItemProps {
    to: string,
    icon: JSX.Element,
    text: string,
    color?: ButtonTextColors,
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
    to,
    icon,
    text,
    color = 'black',
}) => (
  <Link href={'/' + to}>
    <div className="flex flex-col items-center my-5 text-center whitespace-pre-line">
      {icon}
      <Button 
        type={2} 
        color={color}
      >
        {text}
      </Button>
    </div>
  </Link>
);


export default MenuItem;