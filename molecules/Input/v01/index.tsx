import { FunctionComponent } from "react";
import {
  useField,
} from 'formik';
import { JSXElementConstructor } from "react";
import {
  Body
} from '../../../typography';


export interface InputProps {
  disabled?: boolean,
  Icon?: JSXElementConstructor<{ className: string }>
  label: string,
  name: string,
  type?: string,
}

const Input: FunctionComponent<InputProps> = ({
  disabled = false,
  Icon,
  label,
  name,
  type = "text",
}) => {

  const [field, meta, helpers] = useField(name);

  return (
    <div className="relative min-w-[200px] px-6 py-4 rounded-full border">
      <label className="absolute">
        <Body type={7}>
          {label}
        </Body>
      </label>
      <input className="font-montserrat font-light italic text-14 tracking-3p leading-none" />
    </div>
  );
};


export default Input;