import {
  FunctionComponent,
  useEffect,
  useRef
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { clearUser } from '../../../redux/actions/user';
import { deleteAll } from '../../../redux/actions/token';
import { truncateBySymbols } from '../../../utils';
import {
  getName,
  getRole,
  getAvatar
} from '../../../redux/selectors/user';
import {
  ArrowUp,
  ArrowDown,
  LogOut
} from '../../../atoms/icons';
import {
  Avatar,
  Link
} from '../../../atoms';
import {
  Body,
  Button as ButtonText
} from '../../../typography';
import useDropMenuOutsideClick from '../../../hooks/useDropMenuOutsideClick';
import menuItems from './menuItems';

const getRandom: (min: number, max: number) => number = (min, max) => Math.floor(Math.random()*(max - min)) + min;

const getHSL = () => `hsl(${getRandom(25, 45)}, ${getRandom(50, 100)}%, ${getRandom(30,60)}%)`;


export interface AccountControlProps {

}

const defaultClassName = 'relative w-[300px] flex justify-end items-center h-full px-6 py-4 mr-8 cursor-pointer border hover:bg-yellow-7 hover:border-yellow-1';

const AccountControl: FunctionComponent<AccountControlProps> = ({

}) => {
  const dispatch = useDispatch();

  const name = useSelector(getName);

  const color = useRef<string>(getHSL());

  const role = useSelector(getRole);
  const avatar = useSelector(getAvatar);

  const rootRef = useRef<HTMLDivElement>(null);
  const menuRootRef = useRef<HTMLDivElement>(null);

  const [handleClick, open] = useDropMenuOutsideClick(rootRef, menuRootRef);

  useEffect(() => {
    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  })

  return (
    <div id="ACCOUNT_CONTROL" className="flex items-center" onBlur={() => console.log('BLUR')}>
      <div
        ref={rootRef}
        className={`${defaultClassName} ${open ? 'border-yellow-1 bg-yellow-7' : 'border-transparent'}`}
      >
        <div className="flex flex-col justify-center items-end">
          <Body
            className="text-brown-2"
            type={5}
          >
            {truncateBySymbols(name, 16)}
          </Body>
          <Body
            className="text-brown-2"
            type={8}
          >
            {role ? role.name : ''}
          </Body>
        </div>
        <Avatar
          className="w-12 h-12 ml-4 mr-2"
          name={name}
          color={color.current}
        />

        {
          open ? (
            <ArrowUp className="text-brown-2 fill-current" />
          ) : (
            <ArrowDown className="text-brown-2 fill-current" />
          )
        }
        

        <div
          ref={menuRootRef}
          className={`absolute min-w-[300px] border border-yellow-1 bg-white translate-y-full bottom-0 right-[-1px] py-4 ${open ? 'block' : 'hidden'}`}
        >
          {
            menuItems.map(({
              Icon,
              path,
              title
            }) => (
              <Link href={path}>
                <div className="w-full px-8 py-4 flex items-center border border-transparent hover:bg-yellow-7 hover:border-yellow-1">
                  <Icon className="mr-6" />
                  <ButtonText type={4}>{title}</ButtonText>
                </div>
              </Link>
            ))
          }
        </div>
      </div>
      <LogOut
        className="text-brown-2 fill-current cursor-pointer"
        size={32}
        onClick={() => {
          dispatch(clearUser());
          dispatch(deleteAll());
        }}
      />
    </div>
  );
};


export default AccountControl;