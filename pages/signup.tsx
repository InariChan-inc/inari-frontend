import { useRouter } from 'next/router';
import {  
  useEffect,
  useRef
} from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';
import { gql } from '@apollo/client';
import {
  Formik, 
  FormikErrors, 
  FormikValues
} from 'formik';
import { setUser } from 'redux/actions/user';
import {
  setToken,
  setRefreshToken
} from 'redux/actions/token';
import {
  Headline,
  Body,
  Link as LinkText,
} from '@typography';
import {
  Link,
  Helmet,
} from '@atoms';
import {
  Person,
  Email,
  Key,
} from '@icons';
import {
  Input,
  Button,
} from '@molecules';
import { AuthorizationLayout } from '@layouts';
import ApolloClient from '@common/graphql/client';
import { IRegistrationUser } from '@common/graphql/interfaces';
import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NICKNAME_REGEX,
} from '@common/regex';
import {
  EMPTY_ERROR,
  EXISTS_ERROR,
  NOT_MATCHED_ERROR,
} from '@common/errors';
import { sleep } from '@utils';



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

  const router = useRouter();

  const dispatch = useDispatch();

  const submitButtonRef = useRef<HTMLButtonElement>(null);

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
      <Helmet title="Реєстрація" />

      <Headline
        style={{
          marginBottom: 24,
        }}
        color="brown-2"
        type={2}
      >
        Раді тебе бачити!
      </Headline>
      <Headline
        color="brown-2"
        type={4}
      >
        Введіть дані для реєстрації :)
      </Headline>
      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        initialErrors={{
          name: '',
          email: '',
          password: ''
        }}
        validateOnChange={true}
        validate={async ({
          name,
          email,
          password
        }) => {
          const errors: FormikErrors<FormikValues> = {};

          if (!name) {
            errors.name = EMPTY_ERROR;
          } else if (!NICKNAME_REGEX.test(name)) {
            errors.name = NOT_MATCHED_ERROR;
          }

          if (!email) {
            errors.email = EMPTY_ERROR;
          } else if (!EMAIL_REGEX.test(email)) {
            errors.email = NOT_MATCHED_ERROR;
          }

          if (!PASSWORD_REGEX.test(password)) {
            errors.password = NOT_MATCHED_ERROR;
          }

          return sleep(() => errors, 1000);
        }}
        onSubmit={({name, email, password}, actions) => {

          ApolloClient.query({
              query: gql`
              {
                existUserName(name: "${name}"),
                existUserEmail(email: "${email}")
              }
            `}
          ).then(({ 
              data: {
                existUserEmail,
                existUserName
              } 
            }) => {
              if (existUserEmail || existUserName) {
                if (existUserEmail) {
                  actions.setFieldError('email', EXISTS_ERROR);
                }

                if (existUserName) {
                  actions.setFieldError('name', EXISTS_ERROR);
                }
              } else {
                ApolloClient.mutate({
                  mutation: gql`
                    mutation {
                      registrationUser (
                        data: { 
                          name: "${name}", 
                          email: "${email}", 
                          password: "${password}" 
                        }
                      ) {
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
                    registrationUser: {
                      userData,
                      tokenData
                    }
                  }
                }: IRegistrationUser) => {
                  dispatch(setUser(userData));
                  dispatch(setToken({
                    token: tokenData.token,
                    tokenExp: tokenData.tokenExp
                  }));
                  dispatch(setRefreshToken({
                    refreshToken: tokenData.refreshToken,
                    refreshTokenExp: tokenData.refreshTokenExp
                  }));
                  router.push('/');
                })
              }
              actions.setSubmitting(false);
              
          });

        }}
      >
        {({
          errors,
          touched,
          handleSubmit,
          isValidating,
          isSubmitting,
          isValid
        }) => {
          return (
            <FormContainer>
              <Input
                isValidating={isValidating}
                error={touched.name && !!errors.name}
                style={{
                  marginBottom: 16,
                }}
                label="Нікнейм/імейл"
                name="name"
                Icon={Person}
                helper={touched.name ? 
                  errors.name === EMPTY_ERROR ? 'Поле не може бути пустим :)' :
                  errors.name === NOT_MATCHED_ERROR ? 'Нік має мати бути латиницею, містити принаймні 5 символів та може включати цифри.' :
                  errors.name === EXISTS_ERROR ? 'Цей нікнейм вже існує':
                  undefined : undefined}
                focusedOnStart
              />
              <Input
                isValidating={isValidating}
                error={touched.email && !!errors.email}
                style={{
                  marginBottom: 16,
                }}
                label="Імейл"
                name="email"
                type="email"
                Icon={Email}
                helper={touched.email ? 
                  errors.email === EMPTY_ERROR ? "Поле не може бути пустим :)" : 
                  errors.email === NOT_MATCHED_ERROR ? "Це не схоже на імейл :)" : 
                  errors.email === EXISTS_ERROR ? (
                    <>
                      Ой. цей імейл уже зареєстровано. Ви можете{' '}
                      <LinkText 
                        color="black" 
                        type={2}
                      >
                        <Link href="/signin">увійти</Link>
                      </LinkText>
                      .
                    </>
                  ) : undefined : undefined}
              />
              <Input
                isValidating={isValidating}
                error={touched.password && !!errors.password}
                style={{
                  marginBottom: 48,
                }}
                label="Пароль"
                name="password"
                type="password"
                Icon={Key}
                helper="Пароль повинен містити мінімум 6 символів, одну велику літеру і цифру."
              />
              <Button
                ref={submitButtonRef}
                style={{
                  marginBottom: 24,
                  padding: '16px 32px',
                  borderRadius: 30,
                }}
                onClick={handleSubmit}
                disabled={isSubmitting || !isValid}
              >
                Зареєструватися
              </Button>
              <Body
                color="yellow-6"
                style={{
                  textAlign: 'center',
                  whiteSpace: 'pre-line',
                }}
                type={6}
              >
                Реєструючись, ви погоджуєтеся з{'\n'}
                <LinkText
                  color="black"
                  type={2}
                >
                  <Link href="/rules">правилами платформи</Link>
                </LinkText>
                .
              </Body>
            </FormContainer>
          )
        }}
      </Formik>
      <HelpSection>
        <Body 
          type={6}
          style={{
            marginRight: 4,
          }}
          color="yellow-6"
        >
          Вже маєш акаунт?
        </Body>

        <LinkText
          color="black"
          type={2}
        >
          <Link href="/signin">Увійди :)</Link>
        </LinkText>
      </HelpSection>
    </AuthorizationLayout>
  );
}