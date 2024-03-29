import Router from 'next/router';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { gql } from '@apollo/client';
import { Formik } from 'formik';
import { setUser } from '@r/actions/user';
import {
  setToken,
  setRefreshToken
} from '@r/actions/token';
import {
  Headline,
  Body,
  Helper,
  Link as LinkText,
} from '@typography';
import {
  Link,
  Helmet,
} from '@atoms';
import {
  Email,
  Key,
  ErrorIcon
} from '@icons';
import {
  Input,
  Button,
} from '@molecules';
import { AuthorizationLayout } from '@layouts';
import ApolloClient from '@common/graphql/client';
import { ILoginUser } from '@common/graphql/interfaces';
import { isUserLoggedIn } from '@r/selectors/token';



const ErrorMessageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  margin-top: 48px;
  margin-bottom: 64px;
  width: 350px;
`;

const ErrorIconWrapper = styled.div`
  margin-right: 24px;
`;

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
  margin-bottom: 64px;
  width: 350px;
`;

const HelpSection = styled.section`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
`;


export default function SignIn() {
  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [userError, setUserError] = useState(false);

  const dispatch = useDispatch();

  const isLogged = useSelector(isUserLoggedIn);

  useEffect(() => {
    if (isLogged) {
      Router.push('/');
    }
  }, [isLogged]);

  useEffect(() => {
    const enterClick: (this: Document, event: KeyboardEvent) => void = event => {
      if (event.key == 'Enter') {
        submitButtonRef.current.click();
      }
    }

    document.addEventListener('keydown', enterClick)
    return () => {
      document.removeEventListener('keydown', enterClick);
    };
  }, []);

  return !isLogged ? (
    <AuthorizationLayout>
      <Helmet title="Вхід" />

      {
        userError ? (
          <ErrorMessageContainer>
              <ErrorIconWrapper>
              <ErrorIcon
                color="red-2"
                size={36}
              />
              </ErrorIconWrapper>
              <div>
                <Headline
                  color="red-2"
                  style={{
                    marginRight: 20,
                  }}
                  type={2}
                >
                  Йой! Помилка!
                </Headline>
                <Helper color="red-2">
                  Некоректний логін або пароль. Будь ласка, перевірте коректність заповнених даних та спробуйте ще раз!
                </Helper>
              </div>
          </ErrorMessageContainer>
        ) : (
          <>
            <Headline
              color="brown-2"
              style={{
                marginBottom: 24,
              }}
              type={2}
            >
              З поверненням!
            </Headline>
            <Headline
              color="brown-2"
              type={4}
            >
              Введіть дані, щоб увійти :)
            </Headline>
          </>
        )
      }

      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        onSubmit={({login, password}) => {
          ApolloClient.mutate({
            mutation: gql`
              mutation {
                loginUser(data: {
                  email: "${login}",
                  password: "${password}"
                }) {
                  userData {
                    name
                    email
                    aboutMe
                    isSixteen
                    theme
                    hashColor
					          avatar {
                      name
                      type
                      path
                      pathResized
                      isTmp
                    }
                    roleData {
                      name
                      key
                      permissions
                    }
                  }
                  tokenData {
                    token
                    tokenExp
                    refreshToken
                    refreshTokenExp
                  }
                }
              }
            `
          }).then(({
            data: {
              loginUser: {
                userData,
                tokenData
              }
            }
          }: ILoginUser) => {
            dispatch(setUser(userData));
            dispatch(setToken({
              token: tokenData.token,
              tokenExp: tokenData.tokenExp
            }));
            dispatch(setRefreshToken({
              refreshToken: tokenData.refreshToken,
              refreshTokenExp: tokenData.refreshTokenExp
            }));

            Router.push('/');
          }).catch((error: Error) => {
            console.log(error);
            if (error.message) {
              setUserError(true);
            }
          })
        }}
      >
        {({
          handleSubmit,
          values: {
            login,
            password
          }
        }) => {

          return (
            <FormContainer>
              <Input
                style={{
                  marginBottom: 16,
                }}
                label="Імейл"
                type="email"
                name="login"
                Icon={Email}
                focusedOnStart
              />
              <Input
                style={{
                  marginBottom: 48,
                }}
                label="Пароль"
                name="password"
                type="password"
                Icon={Key}
              />
              <Button
                ref={submitButtonRef}
                style={{
                  marginBottom: 24,
                  padding: '16px 32px',
                  borderRadius: 30,
                }}
                buttonType="submit"
                onClick={handleSubmit}
                disabled={!login || !password}
              >
                Увійти
              </Button>
            </FormContainer>
          )
        }}
      </Formik>
      <HelpSection>
        <Body 
          type={4}
          color="yellow-6"
          style={{
            marginRight: 4,
          }}
        >
          Не маєш акаунту?
        </Body>

        <LinkText
          color="black"
          type={2}
        >
          <Link href="/signup">Зареєструйся :)</Link>
        </LinkText>
      </HelpSection>
    </AuthorizationLayout>
  ) : null;
}