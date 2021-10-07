import {
  CSSProperties,
  FunctionComponent,
  JSXElementConstructor,
  ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  useField,
} from 'formik';
import { BaseIconProps } from "@atoms/interfaces";
import {
  Check,
  ErrorIcon,
  Visibility,
} from '@icons';
import {
  FieldContainer,
  Fieldset,
  InputHelper,
  InputContainer,
  InputIconWrapper,
  Label,
  Legend,
  StyledInput,
  ValidationIconWrapper,
  VisibilityIconWrapper,
} from './styles';

export interface InputProps {
  disabled?: boolean,
  Icon?: JSXElementConstructor<BaseIconProps>
  label: string,
  name: string,
  type?: string,
  error?: boolean,
  helper?: ReactNode,
  isValidating?: boolean,
  focusedOnStart?: boolean,
  style?: CSSProperties,
}

const Input: FunctionComponent<InputProps> = ({
  disabled,
  Icon,
  label,
  name,
  type = "text",
  error,
  helper,
  isValidating,
  focusedOnStart,
  style,
}) => {
  const [passwordInputType, setPasswordInputType] = useState('password');
  const [focused, setFocused] = useState(false);
  const [field, meta, helpers] = useField<string>(name);
  const inputRef = useRef<HTMLInputElement>(null);
  const [isThisInputBeingValidated, setIsThisInputBeingValidated] = useState(false);

  useEffect(() => {
    if (focusedOnStart) {
      inputRef.current.focus();
    }
  }, [])

  useEffect(() => {
    if (!isValidating) {
      setIsThisInputBeingValidated(false);
    }
  }, [isValidating])

  useEffect(() => {
    if (field.value) {
      helpers.setTouched(true);
    }

    return () => helpers.setTouched(false);
  }, [field.value]);
  
  return (
    <InputContainer style={style}>
      <FieldContainer
        focused={focused}
        onClick={() => {inputRef.current?.focus()}}
      >
      {
        Icon ? (
          <InputIconWrapper disabled={disabled}>
            <Icon color="yellow-6" />
          </InputIconWrapper>
        ) : null
      }
      
      {
        error !== undefined && meta.touched && !isThisInputBeingValidated ? (
          <ValidationIconWrapper inputType={type}>
            { error ? <ErrorIcon color="red-2" />: <Check color="green-2" /> }
          </ValidationIconWrapper>
        ) : null
      }
      
      {
        type === 'password' ? (
          <VisibilityIconWrapper>
            <Visibility
              color="yellow-6"
              visible={passwordInputType === 'text'}
              onClick={event => {
                event.stopPropagation();
                setPasswordInputType(prev => prev === 'text' && 'password' || 'text')
              }} 
            />
          </VisibilityIconWrapper>
        ) : null
      }

      <Label
        as="label"
        type={7}
        disabled={disabled}
        error={error}
        focused={focused}
        isFieldNotEmpty={!!field.value}
        isIcon={!!Icon}
        isThisInputBeingValidated={isThisInputBeingValidated}
        isTouched={meta.touched}
      >
        {label}
      </Label>

        <StyledInput 
          ref={inputRef}
          type={type === 'password' ? passwordInputType : type}
          name={name}
          disabled={disabled}
          error={error}
          isFieldNotEmpty={!!field.value}
          isIcon={!!Icon}
          isThisInputBeingValidated={isThisInputBeingValidated}
          isTouched={meta.touched}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            field.onBlur(event);
            setFocused(false);
          }}
          value={field.value}
          onChange={event => {
            field.onChange(event);

            if (isValidating) {
              setIsThisInputBeingValidated(true);
            }
          }}
        />
        <Fieldset
          disabled={disabled}
          error={error}
          metaError={meta.error}
          isTouched={meta.touched}
          isThisInputBeingValidated={isThisInputBeingValidated}
        >
          <Legend
            as="legend"
            type={7}
            disabled={disabled}
            focused={focused}
            isFieldNotEmpty={!!field.value}

          >
            <span>
              {label}
            </span>
          </Legend>
        </Fieldset>
      </FieldContainer>
      {
        helper ? (
          <InputHelper
            error={error}
            isTouched={meta.touched}
            isThisInputBeingValidated={isThisInputBeingValidated}
          >
            {helper}
          </InputHelper>
        ) : null
      }
    </InputContainer>
  );
};


export default Input;