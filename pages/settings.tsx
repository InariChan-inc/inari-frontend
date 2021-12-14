import { useRouter } from 'next/router';
import {
  useState,
  useEffect,
  ChangeEventHandler,
} from 'react';
import {
  useSelector,
  useDispatch,
} from 'react-redux';
import {
  Container,
  Row,
  Col,
} from 'styled-bootstrap-grid';
import gql from 'graphql-tag';
import {
  Body,
  Headline,
  Subtitle,
} from '@typography';
import {
  Download,
  Delete,
} from '@icons';
import {
  Avatar,
  Helmet,
  Switch,
} from '@atoms';
import {
  Breadcrumb,
  Button,
  Textarea,
  UploadFileButton,
  Feedback
} from '@molecules';
import { 
  CropAvatarModal,
  ChangePasswordModal
} from '@organizms';
import {
  SettingsContainer,
  AvatarSetting,
  ButtonWrapper,
  ButtonsWrapper,
  ControlsWrapper,
  DataWrapper,
  SettingsWrapper,
  StyledHelper,
  SwitchLabel,
} from '@components/pages/settings';
import { isUserLoggedIn } from '@r/selectors/token';
import {
  getAboutMe,
  getAvatar,
  getColor,
  getEmail,
  getName,
  getTheme,
  isUserSixteen
} from '@r/selectors/user';
import { ImageData, ThemeEnum } from '@common/graphql/interfaces';
import client from '@common/graphql/client';
import updateProfile from '@common/updateProfile';
import download from '@common/downloadClient';


function Settings() {
  const router = useRouter();

  const dispatch = useDispatch();

  const isLogged = useSelector(isUserLoggedIn);

  const name = useSelector(getName);
  const aboutMe = useSelector(getAboutMe);
  const email = useSelector(getEmail);
  const avatar = useSelector(getAvatar);
  const color = useSelector(getColor);
  const theme = useSelector(getTheme);
  const isSixteen = useSelector(isUserSixteen);

  const [isBlackTheme, setIsBlackTheme] = useState(theme !== ThemeEnum.LIGHT_THEME);
  const [year, setYear] = useState(isSixteen);
  const [isNotChanged, setIsNotChanged] = useState(true);
  const [aboutSelf, setAboutSelf] = useState(aboutMe);
 
  const [openAvatarModal, setOpenAvatarModal] = useState(false);
  const [avatarImage, setAvatarImage] = useState('');
  const [savedAvatar, setSavedAvatar] = useState('');
  const [savedAvatarFile, setSavedAvatarFile] = useState<Blob>();

  useEffect(() => {
    setOpenAvatarModal(!!avatarImage);
  }, [avatarImage]);

  useEffect(() => {
    setYear(isSixteen);
  }, [isSixteen]);

  const [feedbackText, setFeedbackText] = useState('');
  const [feedbackType, setFeedbackType] = useState<'pre-success' | 'success' | 'error'>('success');

  const [openPasswordModal, setOpenPasswordModal] = useState(false);
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const onSelectImage: ChangeEventHandler<HTMLInputElement> = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      if (e.target.files[0].size / 1024 / 1024 > 10) {
        setFeedbackText('Ой! Аватарка більше 10 мб або не в форматі jpeg/png. Вибери, будь ласка, інший файл! :)');
        setFeedbackType('error');
      } else {
        const reader = new FileReader();

        reader.addEventListener('load', () => {
          const img = new Image;

          img.addEventListener('load', () => {
            if (img.width < 100 || img.height < 100) {
              setFeedbackText('Роздільна здатність зображення має бути щонайменше 100х100.');
              setFeedbackType('error');
            } else { 
              setAvatarImage(reader.result as string);
            }
          });

          img.src = reader.result as string;
        });

        reader.readAsDataURL(e.target.files[0]);
      }
      e.target.value = '';
    }
  }

  useEffect(() => {
    setAboutSelf(aboutMe);
  }, [aboutMe]);

  const cancelAll = () => {
    setAboutSelf(aboutMe || '');
    setSavedAvatar('');
    setSavedAvatarFile(undefined);
    setOldPassword('');
    setNewPassword('');
    setYear(isSixteen);
  };

  const handleSave = () => {
    console.log('passwords', oldPassword, newPassword);
    Promise.all([savedAvatarFile ?
      download.mutate<{ addNewOrUpdateAvatar: ImageData }>({
        mutation: gql`
          mutation ($file: Upload!) {
            addNewOrUpdateAvatar(file: $file) {
              id
              name
              type
              path
              pathResized
              isTmp
            }
          }
        `,
        variables: {
          file: savedAvatarFile
        }
      }) : new Promise((res,rej) => res(true)),
      client.mutate({
        mutation: gql`
          mutation {
            updateProfile(data: {
              ${aboutMe !== aboutSelf ? `
                aboutMe: "${aboutSelf}"
              ` : ''} 
              ${oldPassword && newPassword ? `
                passwordOld: "${oldPassword}"
                passwordNew: "${newPassword}"
              ` : ''}
              ${year !== isSixteen ? `
                isSixteen: ${year}
              ` : ''}
            })
          }
        `
      })
    ]).then((res) => {
      console.log('hello');
      setSavedAvatarFile(undefined);
      setSavedAvatar('');
      setOldPassword('');
      setNewPassword('');
      updateProfile();

      setFeedbackType('success');
      setFeedbackText('Зміни збережено! Інарі лайк іт :)');
    }).catch((err) => {
      console.log(err);
      setFeedbackType('error');
      setFeedbackText('Помилка :( Спробуйте знову');
    });
  };

  useEffect(() => {
    const itIs = aboutSelf === (aboutMe || '') && !savedAvatarFile && !oldPassword && !newPassword && year === isSixteen;
    setIsNotChanged(itIs);
  }, [aboutSelf, aboutMe, savedAvatarFile, oldPassword, newPassword, year, isSixteen]);

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
            <Row
              alignItems="center"
              style={{ marginBottom: 10 }}
            >
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
                <Subtitle>
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
                <SwitchLabel
                  disabled
                  htmlFor="settings_theme_switch"
                >
                  Темна тема (скоро)
                </SwitchLabel>
              </Col>
              <Col sm={3}>
                <Switch
                  disabled
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
          <Row style={{ marginBottom: 48 }}>
            <Col
              noGutter
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
                  imageUrl={savedAvatar || avatar?.path}
                />
                <ButtonWrapper>
                  <UploadFileButton
                    accept="image/*"
                    label="Загрузити"
                    Icon={Download}
                    padding="15px 30px"
                    style={{ marginBottom: 15 }}
                    onChange={onSelectImage}
                  />
                  <Button
                    disabled={!savedAvatarFile}
                    type={2}
                    Icon={Delete}
                    padding="15px 30px"
                    onClick={() => {
                      setSavedAvatarFile(undefined);
                      setSavedAvatar(undefined);
                    }}
                  >
                    Видалити
                  </Button>
                </ButtonWrapper>
              </AvatarSetting>
            </Col>
            <Col
              noGutter
              offset={1}
              sm={6}
            >
              <Headline
                color="brown-2"
                type={4}
                style={{ marginBottom: 15 }}
              >
                Про себе:
              </Headline>
              <Textarea
                limit={1000}
                value={aboutSelf}
                onChange={setAboutSelf}
                placeholder={"Розкажи про себе!\n\nP.S.: Якщо не знаєш, що розказати, то напиши ТОП-5 своїх улюблених аніме! :)"}
              />
            </Col>
            </Row>
            <Row style={{ marginBottom: 120 }}>
              <Col
                noGutter
                offset={1}
              >
                <Button
                  type={1}
                  padding="15px 30px"
                  onClick={() => {
                    setOpenPasswordModal(true);
                  }}
                >
                  {!!oldPassword && !!newPassword ? 'Пароль змінено' : 'Змінити пароль'}
                </Button>
              </Col>
            </Row>
            <Row justifyContent="center">
              <ControlsWrapper>
                <Feedback
                  type={feedbackType}
                  text={feedbackText}
                />
                <ButtonsWrapper>
                  <Button
                    disabled={isNotChanged}
                    type={1}
                    padding="15px 30px"
                    onClick={handleSave}
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
                </ButtonsWrapper>
              </ControlsWrapper>
            </Row>
        </SettingsWrapper>
        
      </Container>
      <CropAvatarModal
        open={openAvatarModal}
        image={avatarImage}
        onConfirm={(croppedArea) => {
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');

          canvas.width = croppedArea.width;
          canvas.height = croppedArea.height;
        
          ctx.imageSmoothingQuality = 'high';

          const img = new Image;
          img.addEventListener('load', () => {
            ctx.drawImage(
              img,
              croppedArea.x,
              croppedArea.y,
              croppedArea.width,
              croppedArea.height,
              0,
              0,
              croppedArea.width,
              croppedArea.height,
            );

            canvas.toBlob((blob) => {
              setSavedAvatar(URL.createObjectURL(blob));
              
              (blob as any).name = 'avatar.jpg';

              setSavedAvatarFile(blob);
              setAvatarImage('');

              setFeedbackType('pre-success');
              setFeedbackText('Аватар загрузився.\nЗбережи, будь ласка, зміни!');
            });
          });
          img.src = avatarImage;
        }}
        onCancel={() => {
          setAvatarImage('');
        }}
      />
      <ChangePasswordModal
        open={openPasswordModal}
        onConfirm={(oldPassword, newPassword) => {
            setOldPassword(oldPassword);
            setNewPassword(newPassword);
            setOpenPasswordModal(false);
        }}
        onCancel={() => {
          setOpenPasswordModal(false);
        }}
      />
    </SettingsContainer>
  ) : null;
}


export default Settings;