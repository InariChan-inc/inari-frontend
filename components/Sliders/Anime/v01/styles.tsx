import { Headline } from "@typography";
import styled from "styled-components";


export const AnimeContainer = styled.div`
  position: relative;
  padding-top: 68px;
  overflow: hidden;
`;

export const SliderControl = styled.div`
  position: absolute;
  width: 36px;
  height: 36px;
  cursor: pointer;
  z-index: 1001;

  > svg {
    color: ${props => props.theme.colors['brown-2']};
  }

  &&.swiper-button-disabled > svg {
    color: ${props => props.theme.colors['yellow-2']};
  }
`;

export const LeftControl = styled(SliderControl)`
  top: -68px;
  right: 0;
`;

export const RightControl = styled(SliderControl)`
  top: -68px;
  right: 68px;
`;

export const Title = styled(Headline)`
  position: absolute;
  top: 0;
`;