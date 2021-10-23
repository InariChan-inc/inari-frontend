import {
  FunctionComponent,
  useEffect,
  useRef
} from 'react';
import {
  useSelector,
  useDispatch
} from 'react-redux';
import { clearUser } from '@r/actions/user';
import { deleteAll } from '@r/actions/token';
import { truncateBySymbols } from '@utils';
import {
  getName,
  getRole,
  getAvatar,
  getColor,
} from '@r/selectors/user';
import { Link } from '@atoms';
import {
  ArrowUp,
  ArrowDown,
  LogOut,
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


export interface AccountControlProps {

}

const AccountControl: FunctionComponent<AccountControlProps> = ({

}) => {
  const dispatch = useDispatch();

  const name = useSelector(getName);

  const role = useSelector(getRole);
  const avatar = useSelector(getAvatar);
  const color = useSelector(getColor);

  const rootRef = useRef<HTMLDivElement>(null);
  const menuRootRef = useRef<HTMLDivElement>(null);

  const [handleClick, open, setOpen] = useDropMenuOutsideClick(rootRef, menuRootRef);

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
            type={2}
          >
            {truncateBySymbols(name, 16)}
          </Body>
          <Body
            color="brown-2"
            type={5}
          >
            {role ? role.name : ''}
          </Body>
        </NameWrapper>
        <StyledAvatar
          name={name}
          color={color}
          imageUrl={avatar?.path}
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
              <MenuLink onClick={() => setOpen(false)}>
                  <Link
                    href={path} 
                    style={{
                      width: '100%',
                      height: '100%',
                      padding: '16px 32px',
                    }}
                  >
                    <Icon style={{ marginRight: 24 }} />
                    <ButtonText type={4}>{title}</ButtonText>
                  </Link>
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