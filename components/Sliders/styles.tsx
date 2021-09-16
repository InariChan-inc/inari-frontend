import styled from "styled-components";


export const SliderContainer = styled.div`
  position: relative;
  padding-top: 68px;
  overflow: hidden;

  .swiper-container {
    overflow: visible;
  }
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

  &&.swiper-button-disabled {
    cursor: default;

    > svg {
      color: ${props => props.theme.colors['yellow-2']};
    }
  }
`;

export const LeftControl = styled(SliderControl)`
  top: -68px;
  right: 68px;
`;

export const RightControl = styled(SliderControl)`
  top: -68px;
  right: 0;
`;