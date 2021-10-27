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
  checked?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

const Switch: FunctionComponent<SwitchProps> = ({
  checked,
  onChange,
}) => {
  const [selfChecked, setSelfChecked] = useState(false);

  useEffect(() => {
    setSelfChecked(checked);
  }, [checked]);

  return (
    <SwitchContainer>
      <Input
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