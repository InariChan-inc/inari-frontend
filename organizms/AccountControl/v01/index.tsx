import {
  FunctionComponent,
  useEffect,
  useRef
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { clearUser } from 'redux/actions/user';
import { deleteAll } from 'redux/actions/token';
import { truncateBySymbols } from '@utils';
import {
  getName,
  getRole,
  getAvatar
} from 'redux/selectors/user';
import {
  ArrowUp,
  ArrowDown,
  LogOut
} from '@icons';
import {
  Body,
  Button as ButtonText
} from '@typography';
import useDropMenuOutsideClick from '@hooks/useDropMenuOutsideClick';
import menuItems from './menuItems';
import {
  AccountControlContainer,
  AccountMenu,
  ControlsWrapper,
  NameWrapper,
  StyledAvatar,
  MenuLink,
} from './styles';

const getRandom: (min: number, max: number) => number = (min, max) => Math.floor(Math.random()*(max - min)) + min;

const getHSL = () => `hsl(${getRandom(25, 45)}, ${getRandom(50, 100)}%, ${getRandom(30,60)}%)`;


export interface AccountControlProps {

}

const defaultClassName = 'relative w-[300px] flex justify-end items-center h-full px-6 mr-8 cursor-pointer border-r border-l hover:bg-yellow-7 hover:border-yellow-1';

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
    <AccountControlContainer>
      <ControlsWrapper
        ref={rootRef}
        open={open}
      >
        <NameWrapper>
          <Body
            color="brown-2"
            type={5}
          >
            {truncateBySymbols(name, 16)}
          </Body>
          <Body
            color="brown-2"
            type={8}
          >
            {role ? role.name : ''}
          </Body>
        </NameWrapper>
        <StyledAvatar
          name={name}
          color={color.current}
        />
        {
          open ? (
            <ArrowUp color="brown-2" />
          ) : (
            <ArrowDown color="brown-2" />
          )
        }     
        <AccountMenu
          ref={menuRootRef}
          open={open}
        >
          {
            menuItems.map(({
              Icon,
              path,
              title
            }) => (
              <MenuLink href={path}>
                  <Icon style={{ marginRight: 24 }} />
                  <ButtonText type={4}>{title}</ButtonText>
              </MenuLink>
            ))
          }
        </AccountMenu>
      </ControlsWrapper>
      <LogOut
        color="brown-2"
        style={{ cursor: 'pointer' }}
        size={32}
        onClick={() => {
          dispatch(clearUser());
          dispatch(deleteAll());
        }}
      />
    </AccountControlContainer>
  );
};


export default AccountControl;