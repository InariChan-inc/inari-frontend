import {
  FunctionComponent,
  JSXElementConstructor,
  useState,
  useEffect,
  useRef,
  ReactNode,
} from "react";
import {
  useField,
} from 'formik';
import { BaseIconProps } from "@atoms/interfaces";
import { Body } from "@typography";
import {
  InputContainer,
  FieldContainer,
  IconWrapper,
  StyledErrorIcon,
  StyledCheckIcon,
  StyledVisibilityIcon,
  Label,
  StyledInput,
  Fieldset,
  Legend,
  Helper,
} from './styles';

export interface InputProps {
  className?: string,
  disabled?: boolean,
  Icon?: JSXElementConstructor<BaseIconProps>
  label: string,
  name: string,
  type?: string,
  error?: boolean,
  helper?: ReactNode,
  isValidating?: boolean,
  focusedOnStart?: boolean,
}

const Input: FunctionComponent<InputProps> = ({
  className = '',
  disabled,
  Icon,
  label,
  name,
  type = "text",
  error,
  helper,
  isValidating,
  focusedOnStart
}) => {

  const rightIconPositionClassName = type === 'password' ? 'right-14' : 'right-6';

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
    <InputContainer>
      <FieldContainer
        focused={focused}
        onClick={() => {inputRef.current?.focus()}}
      >
      {
        Icon ? (
          <IconWrapper disabled={disabled}>
            <Icon />
          </IconWrapper>
        ) : null
      }
      
      {
        error !== undefined && meta.touched && !isThisInputBeingValidated ? error ? (
          <StyledErrorIcon inputType={type} />
        ) : (
          <StyledCheckIcon inputType={type} />
        ) : null
      }
      
      {
        type === 'password' ? (
          <StyledVisibilityIcon
            visible={passwordInputType === 'text'}
            onClick={event => {
              event.stopPropagation();
              setPasswordInputType(prev => prev === 'text' && 'password' || 'text')
            }} 
          />
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
          <Helper
            type={11}
            error={error}
            isTouched={meta.touched}
            isThisInputBeingValidated={isThisInputBeingValidated}

          >
            {helper}
          </Helper>
        ) : null
      }
    </InputContainer>
  );
};


export default Input;