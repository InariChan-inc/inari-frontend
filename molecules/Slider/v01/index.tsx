import { VoidFunctionComponent } from "react";
import { SliderProps as MuiSliderProps } from '@mui/material';
import {
  SliderContainer,
  StyledMuiSlider
} from './styles';

interface SliderProps extends MuiSliderProps {
  margin?: string;
}

const Slider: VoidFunctionComponent<SliderProps> = ({
  margin,
  ...props  
}) => {
  return (
    <SliderContainer margin={margin} isValueLabelAlwasOpen={props.valueLabelDisplay === 'on'}>
      <StyledMuiSlider
        {...props}
      />
    </SliderContainer>
  );
};


export default Slider;