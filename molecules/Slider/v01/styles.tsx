import styled from "styled-components";
import { Slider, sliderClasses } from "@mui/material";
import { alpha } from '@mui/material/styles';

export const SliderContainer = styled.div<{ margin?: string; isValueLabelAlwasOpen: boolean }>`
  margin: ${({ margin }) => margin || '0'};
  padding-top: ${({ isValueLabelAlwasOpen }) => isValueLabelAlwasOpen && '28px'};
`;

export const StyledMuiSlider = styled(Slider)`
  &.${sliderClasses.root} {

    .${sliderClasses.rail} {
      background-color: ${({ theme }) => theme.colors["yellow-1"]};
      opacity: 1;
    }

    .${sliderClasses.track} {
      background-color: ${({ theme }) => theme.colors['yellow-4']};
      border-color: ${({ theme }) => theme.colors['yellow-4']};
    }

    .${sliderClasses.thumb} {
      width: 24px;
      height: 24px;
      background-color: ${({ theme }) => theme.colors['yellow-4']};
      border: 4px solid ${({ theme }) => theme.colors['yellow-2']};
      
      box-shadow: 0 4px 8px 0 ${({ theme }) => theme.colors['yellow-1']};

      ::before {
        box-shadow: none;
      }
    }

    .${sliderClasses.valueLabel} {
      background-color: transparent;
      color: ${({ theme }) => theme.colors["brown-2"]};
      padding: 4px 8px;
      border: 1px solid ${({ theme }) => theme.colors["yellow-1"]};
    }

  }
`;