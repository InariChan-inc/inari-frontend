import { useRouter } from 'next/router';
import {
  useState,
  useEffect,
} from 'react';
import styled from 'styled-components';
import {
  Container,
  Row,
  Col,
} from 'styled-bootstrap-grid';
import {
  Body,
  Helper,
  Headline,
  Subtitle,
} from '@typography';
import {
  Avatar,
  Helmet,
  Switch,
} from '@atoms';
import {
  Download,
  Delete,
} from '@icons';
import {
  Breadcrumb,
  Button,
  Textarea,
} from '@molecules';
import { useSelector } from 'react-redux';
import { isUserLoggedIn } from '@r/selectors/token';
import {
  getAboutMe,
  getAvatar,
  getColor,
  getEmail,
  getName,
  getTheme
} from '@r/selectors/user';
import { ThemeEnum } from '@common/graphql/interfaces';


const SettingsContainer = styled.div`
  padding: 32px 60px;
`;

const DataWrapper = styled(Col)`
  border: 1px solid ${props => props.theme.colors['yellow-2']};
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 40px;
  text-align: center;
  cursor: not-allowed;
`;

const SwitchLabel = styled.label`
  ${Subtitle.getStyles()}
  display: block;
  cursor: pointer;
`;

const SettingsWrapper = styled(Container)`
  background-color: ${props => props.theme.colors['yellow-7']};
  border-radius: 10px;
  margin: 0;
  padding: 50px 0 30px;

  > div[data-name*="row"] {
    margin: 0;
  }
`;

const StyledHelper = styled(Helper)`
  display: block;

  :last-of-type {
    margin-bottom: 15px;
  }
`;

const AvatarSetting = styled.div`
  display: flex;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

const ControlsWrapper = styled.div`
  display: flex;
  
  > button:first-of-type {
    margin-right: 30px;
  }
`;


function Settings() {
  const router = useRouter();

  const isLogged = useSelector(isUserLoggedIn);

  const name = useSelector(getName);
  const aboutMe = useSelector(getAboutMe);
  const email = useSelector(getEmail);
  const avatar = useSelector(getAvatar);
  const color = useSelector(getColor);
  const theme = useSelector(getTheme);

  const [isBlackTheme, setIsBlackTheme] = useState(theme === ThemeEnum.LIGHT_THEME);
  const [year, setYear] = useState(false);
  const [isNotChanged, setIsNotChanged] = useState(true);
  const [isAvatarNotChanged, setIsAvatarNotChanged] = useState(true);
  const [aboutSelf, setAboutSelf] = useState(aboutMe || '');


  const cancelAll = () => {
    setAboutSelf(aboutMe || '');
  };

  useEffect(() => {
    const itIs = aboutSelf === (aboutMe || '');
    setIsNotChanged(itIs);
  }, [aboutSelf]);

  if (process.browser && !isLogged) {
    router.push('/signin');
  }

  return isLogged ? (
    <SettingsContainer>
      <Helmet title="Налаштування"/>
      <Breadcrumb
        crumbs={[
          {
            name: 'Головна',
            to: '/'
          },
          {
            name: 'Профіль',
            to: '/profile'
          },
          {
            name: 'Налаштування',
            to: '/settings'
          }
        ]}
        style={{
          marginBottom: 30,
        }}
      />
      <Container fluid>
        <Row style={{ marginBottom: 30 }}>
          <Col
            offset={1}
            sm={5}
          >
            <Row alignItems="center" style={{ marginBottom: 10 }}>
              <Col sm={4}>
                <Subtitle>
                  Нікнейм:
                </Subtitle>
              </Col>
              <DataWrapper sm={8}>
                <Body type={1}>
                  {name}
                </Body>
              </DataWrapper>
            </Row>
            <Row alignItems="center">
              <Col sm={4}>
                <Subtitle as="label" htmlFor="settings_email">
                  Імейл:
                </Subtitle>
              </Col>
              <DataWrapper sm={8}>
                <Body type={1}>
                  {email}
                </Body>
              </DataWrapper>
            </Row>
          </Col>
          <Col
            offset={1}
            sm={4}
          >
            <Row style={{ padding: '14px 0' }}>
              <Col sm={9}>
                <SwitchLabel htmlFor="settings_theme_switch">
                  Темна тема
                </SwitchLabel>
              </Col>
              <Col sm={3}>
                <Switch
                  id="settings_theme_switch"
                  checked={isBlackTheme}
                  onChange={() => {
                    setIsBlackTheme(prev => !prev)
                  }}
                />
              </Col>
            </Row>
            <Row style={{ padding: '14px 0' }}>
              <Col sm={9}>
                <SwitchLabel htmlFor="settings_age_switch">
                  Підтверджую, що мені не менше 16 років
                </SwitchLabel>
              </Col>
              <Col sm={3}>
                <Switch
                  id="settings_age_switch"
                  checked={year}
                  onChange={() => { setYear(prev => !prev) }}
                />
              </Col>
            </Row>
          </Col>
        </Row>
        <SettingsWrapper fluid>
          <Row style={{ marginBottom: 120 }}>
            <Col
              offset={1}
              sm={3}
            >
              <Headline
                type={4}
                color="brown-2"
                style={{ marginBottom: 15 }}
              >
                Змінити аватар:
              </Headline>
              <StyledHelper color="yellow-6">
                Розмір файлу до 3мб.
              </StyledHelper>
              <StyledHelper color="yellow-6">
                Формат файлу - jpeg/png.
              </StyledHelper>
              <AvatarSetting>
                <Avatar
                  size={160}
                  fontSize={72}
                  color={color}
                  name={name}
                  imageUrl={avatar?.path}
                />
                <ButtonWrapper>
                  <Button
                    Icon={Download}
                    padding="15px 30px"
                    style={{ marginBottom: 15 }}
                  >
                    Загрузити
                  </Button>
                  <Button
                    disabled={isAvatarNotChanged}
                    type={2}
                    Icon={Delete}
                    padding="15px 30px"
                  >
                    Видалити
                  </Button>
                </ButtonWrapper>
              </AvatarSetting>
            </Col>
            <Col
              offset={1}
              sm={6}
            >
              <Textarea
                limit={1000}
                value={aboutSelf}
                onChange={setAboutSelf}
                placeholder={"Розкажи про себе!\n\nP.S.: Якщо не знаєш, що розказати, то напиши ТОП-5 своїх улюблених аніме! :)"}
              />
            </Col>
            </Row>
            <Row justifyContent="center">
              <ControlsWrapper>
                <Button
                  disabled={isNotChanged}
                  type={1}
                  padding="15px 30px"
                >
                  Зберегти
                </Button>
                <Button
                  disabled={isNotChanged}
                  type={2}
                  padding="15px 30px"
                  onClick={cancelAll}
                >
                  Скасувати
                </Button>
              </ControlsWrapper>
            </Row>
        </SettingsWrapper>
        
      </Container>
    </SettingsContainer>
  ) : null;
}


export default Settings;