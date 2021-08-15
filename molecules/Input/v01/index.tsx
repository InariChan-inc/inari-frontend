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
import {
  ErrorIcon,
  Check,
  Visibility,
} from "../../../atoms/icons";
import { Body } from "../../../typography";


export interface InputProps {
  className?: string,
  disabled?: boolean,
  Icon?: JSXElementConstructor<{ className: string }>
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

  const commonIconClassNames = 'fill-current absolute -translate-y-1/2 top-1/2';
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
    <div className={`w-full ${className}`}>
      <div
        className={`relative rounded-full h-14 ${focused ? 'shadow-form-light' : ''}`}
        onClick={() => {inputRef.current?.focus()}}
      >
      {
        Icon ? (
          <Icon className={`z-10 text-yellow-6 left-6 ${commonIconClassNames} ${disabled ? 'cursor-not-allowed' : 'cursor-text'}`}
          />
        ) : null
      }
      
      {
        error !== undefined && meta.touched && !isThisInputBeingValidated ? error ? (
          <ErrorIcon className={`text-red-1 cursor-text ${rightIconPositionClassName} ${commonIconClassNames}`} />
        ) : (
          <Check className={`text-green-1 cursor-text ${rightIconPositionClassName} ${commonIconClassNames}`} />
        ) : null
      }
      
      {
        type === 'password' ? (
          <Visibility 
            className={`cursor-pointer ${commonIconClassNames} text-yellow-6 right-6`} 
            visible={passwordInputType === 'text'}
            onClick={event => {
              event.stopPropagation();
              setPasswordInputType(prev => prev === 'text' && 'password' || 'text')
            }} 
          />
        ) : null
      }

      <label 
        className={`z-10 select-none pointer-events-none bg-current duration-300 absolute -translate-y-1/2 font-montserrat font-light italic text-14 tracking-3p leading-none
                  ${focused || !!field.value ? 'top-0 left-8' : `top-1/2 ${Icon ? 'left-16' : 'left-6'}`} 
                  ${disabled ? 'text-yellow-5' : `${error !== undefined && meta.touched && !isThisInputBeingValidated ? error ? 'text-red-2' : 'text-green-2' : 'text-yellow-6'}`} `}
        >
        {label}
      </label>

        <input 
          ref={inputRef}
          type={type === 'password' ? passwordInputType : type}
          name={name}
          disabled={disabled}
          className={`w-full px-6 py-4 outline-none font-montserrat font-medium italic text-16 rounded-full bg-transparent disabled:bg-yellow-1 cursor-text disabled:cursor-not-allowed
                    ${Icon ? 'pl-16' : ''} 
                    ${error !== undefined && meta.touched && !isThisInputBeingValidated && error ? 'text-red-2' : ''} 
                    ${type === 'password' ? 'pr-24' : error !== undefined ? 'pr-16'  : ''}`}
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
        <fieldset 
          className={`rounded-full select-none pointer-events-none absolute left-0 right-0 bottom-0 top-[-6px] px-7 border 
                    ${error !== undefined && !isThisInputBeingValidated && meta.touched ? meta.error ? 'border-red-2' : 'border-green-2' : 'border-yellow-4'}
                    ${!disabled && !meta.error ? 'hover:border-yellow-6' : ''}`}
        >
          <legend 
            className={`border-separate transition-all duration-200 block select-none pointer-events-none font-montserrat font-light italic text-14 leading-none text-transparent 
                      ${focused || !!field.value || (disabled !== undefined && !disabled) ? 'px-1 max-w-full' : 'max-w-0'}`}
          >
            <span>
              {label}
            </span>
          </legend>
        </fieldset>
      </div>
      {
        helper ? (
          <div className={`select-none px-6 py-2 ${error !== undefined && meta.touched && !isThisInputBeingValidated ? error ? 'text-red-2' : 'text-green-2' : 'text-yellow-6'}`}>
            <Body type={11}>
              {helper}
            </Body>
          </div>
        ) : null
      }
    </div>
  );
};


export default Input;