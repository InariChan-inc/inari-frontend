import Head from 'next/head';
import {
  useEffect,
  useRef,
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
  NICKNAME_REGEX,
  PASSWORD_REGEX,
} from '../common/regex';

import {
  EMPTY_ERROR,
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
        <title>Inari - Вхід</title>
      </Head>

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
      <Formik
        initialValues={{
          login: '',
          password: '',
        }}
        initialErrors={{
          login: '',
          password: '',
        }}
       
        validateOnChange={true}
        validate={({
          login,
          password
        }) => {
          const errors: FormikErrors<FormikValues> = {};

          if (!login) {
            errors.login = EMPTY_ERROR;
          } else if (!EMAIL_REGEX.test(login) && !NICKNAME_REGEX.test(login)) {
            errors.login = NOT_MATCHED_ERROR;
          }
          
          if (!password) {
            errors.password = EMPTY_ERROR;
          } else if (!PASSWORD_REGEX.test(password)) {
            errors.password = NOT_MATCHED_ERROR;
          }

          return new Promise(res => setTimeout(res, 1000)).then(() => errors)
        }}
        onSubmit={(values) => {
          console.log('SUBMIT', values)
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
            <div className="flex flex-col justify-center items-center mt-12 mb-16 w-[350px]">
              <Input
                isValidating={isValidating}
                error={touched.login && !!errors.login}
                className="mb-4"
                label="Логін"
                name="login"
                Icon={Person}
                helper={touched.login ? 
                  errors.login === EMPTY_ERROR ? 'Логін не може бути нічим' : 
                  errors.login === NOT_MATCHED_ERROR ? 'Це не схоже ані на нік, ані на емейл.' : 
                  undefined : 'Подайте нік або емейл :)'}
              />
              <Input
                isValidating={isValidating}
                error={touched.password && !!errors.password}
                className="mb-12"
                label="Пароль"
                name="password"
                type="password"
                Icon={Key}
                helper={touched.password ? 
                  errors.password === EMPTY_ERROR ? "Пароль не може бути нічим" : 
                  errors.password === NOT_MATCHED_ERROR ? 'Це не схоже на пароль.' :
                  undefined : undefined}
              />
              <Button
                ref={submitButtonRef}
                className="mb-6"
                buttonType="submit"
                onClick={handleSubmit}
                disabled={isSubmitting || isValidating || !isValid}
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
          <Link href="/signin">Зареєструйся :)</Link>
        </LinkText>
      </section>
      <section className="flex items-center">
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
      </section>
    </AuthorizationLayout>
  );
}