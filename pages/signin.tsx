import Head from 'next/head';
import Link from 'next/link';

import {
  Headline,
  Body,
} from '../typography';

import { Formik } from 'formik';

import sign_banner from '../public/sign_banner.jpeg';

import {
  Person,
  Email,
  Key,
} from '../atoms/icons';
import {
  Input,
  Button,
} from '../molecules';

export default function SignIn() {

  return (
    <div className="flex" style={{ minHeight: 'calc(100vh - 80px)' }}>
      <Head>
        <title>Inari - Реєстрація</title>
      </Head>

      <div className=" py-8 px-[60px] flex flex-col justify-center items-center flex-1">
        <Headline 
          type={2}
          className="mb-6"
        >
          Раді тебе бачити!
        </Headline>
        <Headline type={4}>
          Введіть дані для реєстрації :)
        </Headline>
        <Formik
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          onSubmit={(values) => {
            console.log('SUBMIT', values)
          }}
        >
          {({
            handleSubmit
          }) => {
            return (
              <div className="flex flex-col justify-center items-center mt-12 mb-[76px]">
                <Input
                  className="mb-4"
                  label="Нікнейм*"
                  name="name"
                  Icon={Person}
                />
                <Input
                  className="mb-4"
                  label="Імейл*"
                  name="email"
                  type="email"
                  Icon={Email}
                />
                <Input
                  className="mb-12"
                  label="Пароль*"
                  name="password"
                  type="password"
                  Icon={Key}
                />

                <Button
                  buttonType="submit"
                  onClick={handleSubmit}
                >
                  Зареєструватися
                </Button>
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
            <Link href="signup">
              Увійди :)
            </Link>
          </Body>
        </section>
      </div>
      <div
        className="w-1/3 min-h-full bg-center bg-cover rounded-l-2xl"
        style={{
          backgroundImage: `url('${sign_banner.src}')`
        }}
      />
    </div>
  );
}