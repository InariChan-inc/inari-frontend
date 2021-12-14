import styled, { css } from 'styled-components';
import {
  Container,
  Col
} from 'styled-bootstrap-grid';
import {
  Helper,
  Subtitle
} from '@typography';

export const SettingsContainer = styled.div`
  padding: 32px 60px;
`;

export const DataWrapper = styled(Col)`
  border: 1px solid ${props => props.theme.colors['yellow-2']};
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 40px;
  text-align: center;
  cursor: not-allowed;
`;

export const SwitchLabel = styled.label<{ disabled?: boolean }>`
  ${Subtitle.getStyles()}
  display: block;
  cursor: pointer;
  ${({disabled}) => disabled ? css`
    opacity: .5;
    cursor: not-allowed;
  ` : null}
`;

export const SettingsWrapper = styled(Container)`
  background-color: ${props => props.theme.colors['yellow-7']};
  border-radius: 10px;
  margin: 0;
  padding: 50px 0 30px;

  > div[data-name*="row"] {
    margin: 0;
  }
`;

export const StyledHelper = styled(Helper)`
  display: block;

  :last-of-type {
    margin-bottom: 15px;
  }
`;

export const AvatarSetting = styled.div`
  display: flex;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 30px;
`;

export const ControlsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsWrapper = styled.div`
  display: flex;

  > button:first-of-type {
    margin-right: 30px;
  }
`;