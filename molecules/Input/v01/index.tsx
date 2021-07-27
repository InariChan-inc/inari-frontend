import {
  FunctionComponent,
  JSXElementConstructor,
  useState,
  useEffect,
  useRef,
} from "react";
import {
  useField,
} from 'formik';
import {
  ErrorIcon,
  Check,
} from "../../../atoms/icons";


export interface InputProps {
  className?: string,
  disabled?: boolean,
  Icon?: JSXElementConstructor<{ className: string }>
  label: string,
  name: string,
  type?: string,
  validating?: boolean,
  isValidating?: boolean,
}

const Input: FunctionComponent<InputProps> = ({
  className = '',
  disabled,
  Icon,
  label,
  name,
  type = "text",
  validating,
  isValidating,
}) => {
  const [focused, setFocused] = useState(false);

  const [field, meta, helpers] = useField<string>(name);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (field.value) {
      helpers.setTouched(true);
    }

    return () => helpers.setTouched(false);
  }, [field.value]);
  
  return (
    <div 
      className={`relative min-w-[200px] rounded-full ${focused ? 'shadow-form-light' : ''} ${className}`} 
      onClick={() => inputRef.current?.focus()}
    >
      {
        Icon ? (
          <Icon className={`z-10 absolute -translate-y-1/2 left-6 top-1/2 text-yellow-6 fill-current 
          ${disabled ? 'cursor-not-allowed' : 'cursor-text'}`} />
        ) : null
      }
      
      {
        validating && !isValidating && meta.touched ? meta.error ? (
          <ErrorIcon className="text-red-1 fill-current absolute -translate-y-1/2 right-6 top-1/2" />
        ) : (
          <Check className="text-green-1 fill-current absolute -translate-y-1/2 right-6 top-1/2" />
        ) : null
      }
      

      <label 
        className={`z-10 select-none pointer-events-none bg-current duration-300 absolute -translate-y-1/2 font-montserrat font-light italic text-14 tracking-3p leading-none 
                  ${focused || !!field.value ? 'top-0 left-8' : `top-1/2 ${Icon ? 'left-16' : 'left-6'}`} 
                  ${disabled ? 'text-yellow-5 cursor-not-allowed' : `cursor-text ${validating && !isValidating && meta.touched ? meta.error ? 'text-red-2' : 'text-green-2' : 'text-yellow-6'}`} `}
      >
        {label}
      </label>
      <div className="relative w-full h-full">
        <input 
          ref={inputRef}
          type={type}
          name={name}
          disabled={disabled}
          className={`px-6 py-4 outline-none font-montserrat font-medium italic text-16 rounded-full 
                    ${disabled ? 'bg-yellow-1 cursor-not-allowed' : 'bg-transparent'} ${Icon ? 'pl-16' : ''} 
                    ${validating && !isValidating && meta.touched && meta.error ? 'text-red-2' : ''} 
                    ${validating ? 'pr-16' : ''}`}
          onFocus={() => setFocused(true)}
          onBlur={(event) => {
            field.onBlur(event);
            setFocused(false);
          }}
          value={field.value}
          onChange={event => {
            field.onChange(event);
          }}
        />
        <fieldset 
          className={`select-none pointer-events-none absolute left-0 right-0 bottom-0 top-[-6px] px-7 border 
                    ${validating && !isValidating && meta.touched ? meta.error ? 'border-red-2' : 'border-green-2' : 'border-yellow-4'} rounded-full 
                    ${!disabled && !meta.error ? 'hover:border-yellow-6' : ''}`}
        >
          <legend 
            className={`transition-all duration-200 block select-none pointer-events-none font-montserrat font-light italic text-14 leading-none text-transparent 
                            ${focused || !!field.value || (disabled !== undefined && !disabled) ? 'px-1 max-w-full' : 'max-w-0'}`}
          >
            <span>
              {label}
            </span>
          </legend>
        </fieldset>
      </div>
    </div>
  );
};


export default Input;