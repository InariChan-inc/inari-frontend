import Head from 'next/head';
import {
  useEffect,
  useRef
} from 'react';
import { Formik, FormikErrors, FormikValues } from 'formik';
import {
  Headline,
  Body,
  Link as LinkText,
} from '../typography';
import { Link } from '../atoms';
import {
  Person,
  Email,
  Key,
} from '../atoms/icons';
import {
  Input,
  Button,
} from '../molecules';
import { AuthorizationLayout } from '../layouts';

import {
  EMAIL_REGEX,
  PASSWORD_REGEX,
  NICKNAME_REGEX,
} from '../common/regex';

import {
  EMPTY_ERROR,
  EXISTS_ERROR,
  NOT_MATCHED_ERROR,
} from '../common/errors';

export default function SignIn() {

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
      <Head>
        <title>Inari - Реєстрація</title>
      </Head>

      <Headline 
        className="text-brown-2 mb-6"
        type={2}
      >
        Раді тебе бачити!
      </Headline>
      <Headline
        className="text-brown-2"
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
          password: '',
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

          return new Promise(res => setTimeout(res, 1000)).then(() => errors)
        }}
        onSubmit={(values, actions) => {
          console.log('SUBMIT', values)
        }}
      >
        {({
          errors,
          touched,
          submitForm,
          handleSubmit,
          isValidating,
          isSubmitting,
          isValid
        }) => {

          console.log(isSubmitting, isValidating, !!errors.email, !!errors.name, !!errors.password)

          return (
            <div className="flex flex-col justify-center items-center mt-12 mb-16 w-[350px]">
              <Input
                isValidating={isValidating}
                error={touched.name && !!errors.name}
                className="mb-4"
                label="Нікнейм"
                name="name"
                Icon={Person}
                helper={touched.name ? 
                  errors.name === EMPTY_ERROR ? "Нік не може бути нічим :)" :
                  errors.name === NOT_MATCHED_ERROR ? "Нік має мати принаймні 5 символів і може мати лише цифри та латинські літери." :
                  undefined : undefined}
              />
              <Input
                isValidating={isValidating}
                error={touched.email && !!errors.email}
                className="mb-4"
                label="Емейл"
                name="email"
                type="email"
                Icon={Email}
                helper={touched.email ? 
                  errors.email === EMPTY_ERROR ? "Імейл не можe бути нічим :)" : 
                  errors.email === NOT_MATCHED_ERROR ? "Це не схоже на емейл :)" : 
                  errors.email === EXISTS_ERROR ? (
                    <>
                      Ой. цей імейл уже зареєстровано. Ви можете{' '}
                      <LinkText 
                        className="text-black" 
                        type={2}
                      >
                        <Link href="/signin">увійти</Link>
                      </LinkText>
                      {' або '}
                      <LinkText
                        className="text-black"
                        type={2}
                      >
                        <Link href="/reset-password">скинути пароль</Link>
                      </LinkText>
                      .
                    </>
                  ) : undefined : undefined}
              />
              <Input
                isValidating={isValidating}
                error={touched.password && !!errors.password}
                className="mb-12"
                label="Пароль"
                name="password"
                type="password"
                Icon={Key}
                helper="Пароль повинен містити мінімум 6 символів, містити в собі одну велику літеру і цифру."
              />
              <Button
                ref={submitButtonRef}
                className="mb-6"
                onClick={handleSubmit}
                disabled={isSubmitting || isValidating || !isValid}
              >
                Зареєструватися
              </Button>
              <Body
                className="text-yellow-6 text-center whitespace-pre-line"
                type={6}
              >
                Реєструючись, ви погоджуєтеся з{'\n'}
                <LinkText
                  className="text-black"
                  type={2}
                >
                  <Link href="/rules">правилами платформи</Link>
                </LinkText>
                .
              </Body>
            </div>
          )
        }}
      </Formik>
      <section className="flex items-center">
        <Body 
          type={6}
          className="text-yellow-6 mr-1"
        >
          Вже маєш акаунт?
        </Body>

        <LinkText
          className="text-black"
          type={2}
        >
          <Link href="/signin">Увійди :)</Link>
        </LinkText>
      </section>
    </AuthorizationLayout>
  );
}