import {
  ChangeEventHandler,
  FunctionComponent,
  MouseEventHandler,
  useEffect,
  useState,
} from "react";
import {
  SwitchContainer,
  Input,
  Slider,
} from './styles';


export interface SwitchProps {
  id?: string;
  checked?: boolean;
  disabled?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FunctionComponent<SwitchProps> = ({
  id,
  checked,
  disabled,
  onChange,
}) => {
  const [selfChecked, setSelfChecked] = useState(false);

  useEffect(() => {
    setSelfChecked(checked);
  }, [checked]);

  return (
    <SwitchContainer disabled={disabled}>
      <Input
        disabled={disabled}
        id={id}
        type="checkbox"
        checked={selfChecked}
        onChange={(event) => {
          if (onChange) {
            onChange(event);
          } else if (checked === undefined) {
            setSelfChecked(prev => !prev);
          }
        }}
      />
      <Slider />
    </SwitchContainer>
  );
};


export default Switch;