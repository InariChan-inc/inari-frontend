import Head from 'next/head';
import { Formik } from 'formik';
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


const EMPTY_ERROR = 'EMPTY';
const EXISTS = 'EXISTS';
const NOT_MATCHED = 'NOT MATCHED';


export default function SignIn() {

  return (
    <AuthorizationLayout>
      <Head>
        <title>Inari - Реєстрація</title>
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
        validate={async ({
          login,
          password
        }) => {
          const errors = {
            login: '',
            password: '',
          }

          if (!login) {
            errors.login = EMPTY_ERROR;
          }
          
          if (!password) {
            errors.password = EMPTY_ERROR;
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
                helper={touched.login && errors.login === EMPTY_ERROR ? "Логін не може бути нічим" : undefined}
              />
              <Input
                isValidating={isValidating}
                error={touched.password && !!errors.password}
                className="mb-12"
                label="Пароль"
                name="password"
                type="password"
                Icon={Key}
                helper={touched.password ? errors.password === EMPTY_ERROR ? "Пароль не може бути нічим" : undefined : undefined}
              />
              <Button
                className="mb-6"
                buttonType="submit"
                onClick={handleSubmit}
              >
                Зареєструватися
              </Button>
              <Body
                className="text-yellow-6 text-center"
                type={6}
              >
                Реєструючись, ви погоджуєтеся з{' '}
                <LinkText
                  className="text-black block"
                  type={2}>
                    <Link href="/rules">правилами платформи</Link>
                </LinkText>
              </Body>
            </div>
          )
        }}
      </Formik>
      <section className="flex mb-4">
        <Body 
          type={4}
          className="text-yellow-6 mr-1"
        >
          Не маєш акаунту?
        </Body>

        <Body
          type={5}
          className="text-brown-2"
        >
          <LinkText
            className="text-black"
            type={2}>
          <Link href="/signin">Увійти :)</Link>
          </LinkText>
        </Body>
      </section>
      <section className="flex">
        <Body 
          type={4}
          className="text-yellow-6 mr-1"
        >
          Не пам'ятаєш пароль?
        </Body>

        <Body
          type={5}
          className="text-brown-2"
        >
          <LinkText
            className="text-black"
            type={2}>
          <Link href="/signin">Скинути пароль</Link>
          </LinkText>
        </Body>
      </section>
    </AuthorizationLayout>
  );
}