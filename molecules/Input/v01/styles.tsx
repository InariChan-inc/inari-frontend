import styled, { css } from "styled-components";
import {
  Caption,
  Helper,
} from "@typography";


const customIconWrapperStyles = css`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
  z-index: 10;
`;

interface TrackProps {
  disabled: boolean,
  error?: boolean,
  metaError?: string,
  focused: boolean,
  isFieldNotEmpty: boolean,
  isIcon: boolean,
  isThisInputBeingValidated: boolean,
  isTouched: boolean,
}

const getIconRightPosition = (inputType: string) => css`right: ${inputType === 'password' ? 56 : 24}px;`;


export const InputContainer = styled.div`
  width: 100%;
`;

export const FieldContainer = styled.div<{ focused: boolean }>`
  position: relative;
  border-radius: 9999px;
  height: 56px;
  box-shadow: ${props => props.focused ? `0 4px 8px 0 ${props.theme.colors["yellow-1"]}` : ''};
`;

const IconWrapper = styled.div`
  position: absolute;
  transform: translateY(-50%);
  top: 50%;
`;

export const InputIconWrapper = styled(IconWrapper)<{ disabled: boolean }>`
  left: 24px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'text'};
`;

export const ValidationIconWrapper = styled(IconWrapper)<{ inputType: string }>`
  ${({ inputType }) => getIconRightPosition(inputType)}
`;

export const VisibilityIconWrapper = styled.div`
  ${customIconWrapperStyles}
  right: 24px;
  cursor: pointer;
`;

export const Label = styled(Caption)<Omit<TrackProps, 'metaError'>>`
    position: absolute;
    top: ${({ focused, isFieldNotEmpty }) => focused || isFieldNotEmpty ? 0 : '50%'};
    left: ${({ focused, isFieldNotEmpty, isIcon }) => focused || isFieldNotEmpty ? '32px' : isIcon ? '64px' : '24px'};
    transform: translateY(-50%);
    z-index: 10;

    user-select: none;
    pointer-events: none;
    transition-duration: 300ms;

    color: ${({
      disabled,
      error,
      isTouched,
      isThisInputBeingValidated,
      theme: { colors },
    }) => disabled ? colors["yellow-5"] :
          error !== undefined && isTouched && !isThisInputBeingValidated ? error ? colors["red-1"] :
            colors['green-2'] :
          colors['yellow-6']
    };
`;

export const StyledInput = styled.input<Omit<TrackProps, 'disabled' | 'focused' | 'metaError'>>`
  width: 100%;
  padding: 16px 24px;
  padding-left: ${({isIcon}) => isIcon ? '64px' : ''};
  padding-right: ${({ type, error }) => type === 'password' ? '96px' : error ? '64px' : ''};
  outline: none;
  font-family: ${props => props.theme.font.family.montserrat};
  font-weight: ${props => props.theme.font.weight.medium};
  font-style: italic;
  font-size: 16px;
  border-radius: 9999px;
  background-color: transparent;
  cursor: text;
  color: ${({
    error,
    isTouched,
    isThisInputBeingValidated,
    theme: { colors },
  }) => error && isTouched && !isThisInputBeingValidated ? colors["red-1"] : ''};

  :disabled {
    background-color: ${props => props.theme.colors["yellow-1"]};
    cursor: not-allowed;
  }
`;

export const Fieldset = styled.fieldset<Omit<TrackProps, 'disabled' | 'focused' | 'isFieldNotEmpty' | 'isIcon'>>`
  position: absolute;
  top: -6px;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 0 28px;
  border-radius: 9999px;
  border-width: 1px;
  border-color: ${({error, isThisInputBeingValidated, isTouched, metaError, theme: { colors }}) => error !== undefined && !isThisInputBeingValidated && isTouched ? metaError ? colors["red-2"] : colors["green-2"] : colors["yellow-4"]};
  
  user-select: none;
  pointer-events: none;

  :not(:disabled)::hover {
    border-color: ${({ metaError, theme: { colors } }) => metaError ? colors["yellow-6"] : ''};
  }
`;

export const Legend = styled(Caption)<Omit<TrackProps, 'error' | 'metaError' | 'isIcon' | 'isThisInputBeingValidated' | 'isTouched'>>`
  display: block;
  color: transparent;

  transition-property: all;
  transition-duration: 200ms;

  user-select: none;
  pointer-events: none;

  ${({ focused, isFieldNotEmpty, disabled }) => focused || isFieldNotEmpty || (disabled === false) ? css`
    padding-left: 4px;
    padding-right: 4px;
    max-width: 100%;
  ` : css`max-width: 0;`}
`;

export const InputHelper = styled(Helper)<Omit<TrackProps, 'disabled' | 'metaError' | 'focused' | 'isFieldNotEmpty' | 'isIcon'>>`
  user-select: none;
  padding: 8px 24px;

  color: ${({ error, isTouched, isThisInputBeingValidated, theme: { colors } }) => error !== undefined && isTouched && !isThisInputBeingValidated ? error ? colors["red-2"] : colors["green-2"] : colors["yellow-6"]};
`;