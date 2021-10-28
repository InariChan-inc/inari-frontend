import styled from "styled-components";
import { Body } from '@typography';
import { TStringOrNumber } from "@common/types";

export const AvatarContainer = styled.div<{ backgroundImage: string; backgroundColor: string; size: TStringOrNumber; }>`
  display: flex;
  justify-content: center;
  align-items: center;
	position: relative;
  border-radius: 9999px;
  background-image: url('${props => props.backgroundImage}');
	background-size: 100% 100%;
  background-color: ${props => props.backgroundColor};
  user-select: none;
  min-width: ${({size}) => typeof size === 'string' ? size : `${size}px`};
  min-height: ${({size}) => typeof size === 'string' ? size : `${size}px`};
`;

export const Abbreviation = styled(Body)`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
