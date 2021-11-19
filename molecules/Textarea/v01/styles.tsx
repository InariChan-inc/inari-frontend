import styled from "styled-components";
import {
  Body,
  Caption,
} from "@typography";

export const TextareaContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const WordCount = styled.div`
  display: flex;
  width: fit-content;
  align-items: center;
  padding: 4px 8px;
  background-color: ${props => props.theme.colors['yellow-2']};
  border-radius: 5px 5px 5px 0;
  margin-bottom: 4px;
`;

export const StyledTextarea = styled.textarea`
  position: relative;
  resize: none;
  width: inherit;
  outline: none;
  border: 1px solid ${props => props.theme.colors['yellow-2']};
  border-radius: 0 0 5px 5px;
  z-index: 100;
  padding: 20px;
  min-height: 95px;

  ${Body.getStyles(3)}
  line-height: 1;

  ::placeholder {
    ${Caption.getStyles(1)}
  }
`;

export const Dragger = styled.div`
  position: relative;
  width: inherit;
  height: 11px;
  background-color: ${props => props.theme.colors['yellow-2']};
  margin-top: -7px;
  border-radius: 0 0 5px 5px;
  z-index: 99;
  cursor: ns-resize;

  ::before {
    content: '';
    position: absolute;
    border-radius: 2px;
    width: 30px;
    height: 3px;
    bottom: 2px;
    left: 50%;
    margin-left: -15px;
    top: 50%;
    margin-top: -1px;
    background-color: ${props => props.theme.colors['yellow-4']};
  }
`;
