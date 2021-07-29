import Link from 'next/link';
import { FunctionComponent, JSXElementConstructor } from "react";
import { 
  Button,
  ButtonTextColors,
} from '../../../typography';

interface MenuItemProps {
    to: string,
    Icon: JSXElementConstructor<{ className: string, size: number }>,
    text: string,
    isActive?: boolean,
}

const MenuItem: FunctionComponent<MenuItemProps> = ({
    to,
    Icon,
    text,
    isActive = false
}) => {
  return (
    <Link href={to}>
      <div className={'group box-content cursor-pointer flex flex-col w-full items-center py-5 text-center whitespace-pre-line ' + (isActive ? 'bg-yellow-7 border-t border-b border-yellow-1' : 'hover:bg-yellow-7')}>
        <Icon className={'text-brown-2 fill-current ' + (isActive ? 'text-brown-1' : 'group-hover:text-brown-1')} size={36} />
        <Button 
          type={2}
          className={'text-brown-2 mt-2 ' + (isActive ? 'text-brown-1' : 'group-hover:text-brown-1')}
        >
          {text}
        </Button>
      </div>
    </Link>
  );
};


export default MenuItem;