import styled from "styled-components";

export const SwitchContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 40px;
  height: 20px;
  border-radius: 20px;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors['yellow-6']};
  transition: .4s;
  border-radius: 20px;

  ::before {
    position: absolute;
    content: '';
    width: 12px;
    height: 12px;
    border-radius: 50%;
    left: 4px;
    bottom: 4px;
    background-color: ${props => props.theme.colors.white};
    transition: .4s;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  :checked {
    width: 100px;
  }

  :checked + span {
    background-color: ${props => props.theme.colors['brown-2']};
  }

  :checked + ${Slider}::before {
    transform: translateX(20px);
  }
`;