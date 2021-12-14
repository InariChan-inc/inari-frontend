import { VoidFunctionComponent, useState } from "react";
import { Formik, FormikErrors, FormikValues } from "formik";
import GlobalModal, { GlobalModalProps } from "@organizms/Modals/Global";
import { Key } from "@atoms/icons";
import { Input } from "@molecules";
import { sleep } from "@utils";
import { CANNOT_BE_EQUAL_ERROR, EMPTY_ERROR, NOT_MATCHED_ERROR } from "@common/errors";
import { PASSWORD_REGEX } from "@common/regex";
import {
  FormContainer,
  FormTitle
} from "./styles";

export interface ChangePasswordModalProps extends Pick<GlobalModalProps, 'open'> {
  onConfirm: (oldPassword: string, newPassword: string) => void;
  onCancel: () => void;
}

const ChangePasswordModal: VoidFunctionComponent<ChangePasswordModalProps> = ({
  open,
  onConfirm,
  onCancel
}) => {

  return (
    <Formik
      initialValues={{
        oldPassword: '',
        newPassword: ''
      }}
      validateOnChange={true}
      validate={async ({
        oldPassword,
        newPassword
      }) => {
        const errors: FormikErrors<FormikValues> = {};

        if (!oldPassword) {
          errors.oldPassword = EMPTY_ERROR;
        }

        if (!newPassword) {
          errors.newPassword = EMPTY_ERROR;
        } else if (!PASSWORD_REGEX.test(newPassword)) {
          errors.newPassword = NOT_MATCHED_ERROR;
        } else if (newPassword === oldPassword) {
          errors.newPassword = CANNOT_BE_EQUAL_ERROR;
        }
        return sleep(() => errors, 1000);
      }}
      onSubmit={() => {}}
    >
      {({
        values: { oldPassword, newPassword },
        errors,
        touched,
        isValidating,
        isValid,
        resetForm
      }) => (
        <GlobalModal
          id="ChangePasswordModal"
          isConfirmButtonDisabled={!isValid || !oldPassword || !newPassword}
          open={open}
          onConfirm={() => {
            onConfirm(oldPassword, newPassword);
            resetForm();
          }}
          onCancel={() => {
            onCancel();
            resetForm();
          }}
        >
          <FormContainer>
            <FormTitle type={3} color="black">Змінити пароль:</FormTitle>
            <Input
              isValidating={isValidating}
              error={touched.oldPassword && !!errors.oldPassword}
              style={{ marginBottom: 15 }}
              label="Старий пароль"
              name="oldPassword"
              type="password"
              Icon={Key}
              helper={touched.oldPassword && errors.oldPassword === EMPTY_ERROR ? 'Поле не може бути пустим :)' : null}
              focusedOnStart
            />
            <Input
              isValidating={isValidating}
              error={touched.newPassword && !!errors.newPassword}
              label="Новий пароль"
              name="newPassword"
              type="password"
              Icon={Key}
              helper={touched.newPassword ? 
                errors.newPassword === EMPTY_ERROR ? 'Поле не може бути пустим :)' :
                errors.newPassword ===  CANNOT_BE_EQUAL_ERROR ? 'Новий пароль не може бути такий самий, як старий :)' :
                'Пароль повинен містити мінімум 6 символів, одну велику літеру і цифру.' :
                'Пароль повинен містити мінімум 6 символів, одну велику літеру і цифру.'
              }
            />
          </FormContainer>
        </GlobalModal>
      )}
    </Formik>
    
  );
};

export default ChangePasswordModal;