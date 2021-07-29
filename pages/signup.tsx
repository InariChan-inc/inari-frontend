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
          const errors = {
            name: '',
            email: '',
            password: '',
          }

          if (!name) {
            errors.name = EMPTY_ERROR;
          }

          if (!email) {
            errors.email = EMPTY_ERROR;
          } else if (email === 'manvi@ukr.net') {
            errors.email = EXISTS;
          }

          if (!/(?=.*[A-Z])(?=.[\d]).{6,}/.test(password)) {
            errors.password = NOT_MATCHED;
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
                error={touched.name && !!errors.name}
                className="mb-4"
                label="Нікнейм"
                name="name"
                Icon={Person}
                helper={touched.name && errors.name === EMPTY_ERROR ? "Ім'я не може бути нічим" : undefined}
              />
              <Input
                isValidating={isValidating}
                error={touched.email && !!errors.email}
                className="mb-4"
                label="Імейл"
                name="email"
                type="email"
                Icon={Email}
                helper={touched.email ? errors.email === EMPTY_ERROR ? "Імейл не можe бути нічим" : errors.email === EXISTS ? (
                  <>
                    {'Ой. цей імейл уже зареєстровано. Ви можете '} 
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
      <section className="flex">
        <Body 
          type={4}
          className="text-yellow-6 mr-1"
        >
          Вже маєш акаунт?
        </Body>

        <Body
          type={5}
          className="text-brown-2"
        >
          <LinkText
            className="text-black"
            type={2}>
          <Link href="/signin">Увійди :)</Link>
          </LinkText>
        </Body>
      </section>
    </AuthorizationLayout>
  );
}