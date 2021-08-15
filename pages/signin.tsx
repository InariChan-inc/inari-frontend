import Head from 'next/head';
import Router from 'next/router';
import {
  useEffect,
  useRef,
  useState,
} from 'react';
import { useDispatch } from 'react-redux';
import { gql } from '@apollo/client';
import { Formik } from 'formik';
import { setUser } from '../redux/actions/user';
import {
  setToken,
  setRefreshToken
} from '../redux/actions/token';
import {
  Headline,
  Body,
  Link as LinkText,
} from '../typography';
import { Link } from '../atoms';
import {
  Email,
  Key,
  ErrorIcon
} from '../atoms/icons';
import {
  Input,
  Button,
} from '../molecules';
import { AuthorizationLayout } from '../layouts';

import ApolloClient from '../common/graphql/client';
import { ILoginUser } from '../common/graphql/interfaces';


export default function SignIn() {
  // const router = useRouter();

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  const [userError, setUserError] = useState(false);

  const dispatch = useDispatch();

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

  return (
    <AuthorizationLayout>
      <Head>
        <title>Inari - Вхід</title>
      </Head>

      {
        userError ? (
          <div className="flex justify-center items-start mt-12 mb-16 w-[350px]">
            <div className="mr-[24px]">
              <ErrorIcon
                className="text-red-2 fill-current"
                size={36}
              />
            </div>
            <div className="text-red-2">
              <Headline
                className="mb-5"
                type={2}
              >
                Йой! Помилка!
              </Headline>
              <Body type={11}>
                Некоректний логін або пароль. Будь ласка, перевірте коректність заповнених даних та спробуйте ще раз!
              </Body>
            </div>
          </div>
        ) : (
          <>
            <Headline 
              className="text-brown-2 mb-6"
              type={2}
            >
              З поверненням!
            </Headline>
            <Headline
              className="text-brown-2"
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
                    theme
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
        }) => {

          return (
            <div className="flex flex-col justify-center items-center mt-12 mb-16 w-[350px]">
              <Input
                className="mb-4"
                label="Імейл"
                type="email"
                name="login"
                Icon={Email}
                focusedOnStart
              />
              <Input
                className="mb-12"
                label="Пароль"
                name="password"
                type="password"
                Icon={Key}
              />
              <Button
                ref={submitButtonRef}
                className="mb-6"
                buttonType="submit"
                onClick={handleSubmit}
              >
                Увійти
              </Button>
            </div>
          )
        }}
      </Formik>
      <section className="flex items-center mb-4">
        <Body 
          type={6}
          className="text-yellow-6 mr-1"
        >
          Не маєш акаунту?
        </Body>

        <LinkText
          className="text-black"
          type={2}
        >
          <Link href="/signup">Зареєструйся :)</Link>
        </LinkText>
      </section>
      {/* <section className="flex items-center">
        <Body 
          type={6}
          className="text-yellow-6 mr-1"
        >
          Не пам'ятаєш пароль?
        </Body>

        <LinkText
          className="text-black"
          type={2}
        >
          <Link href="/signin">Скинути пароль</Link>
        </LinkText>
      </section> */}
    </AuthorizationLayout>
  );
}