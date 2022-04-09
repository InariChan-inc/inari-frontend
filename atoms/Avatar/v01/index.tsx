import {
  CSSProperties,
  FunctionComponent,
  useRef,
} from "react";
import { getFirstLetters } from "@utils";
import { TStringOrNumber } from "@common/types";
import {
  AvatarContainer,
  Abbreviation,
} from './styles';
import { TFacePaintScalarValue } from '@typography/v01/types';

export interface AvatarProps {
  imageUrl?: string;
  name?: string;
  color?: string;
  size?: TStringOrNumber;
  fontSize?: TFacePaintScalarValue<TStringOrNumber>;
  style?: CSSProperties;
}


const Avatar: FunctionComponent<AvatarProps> = ({
  imageUrl,
  name = '',
  color,
  size = 48,
  fontSize,
  style,
}) => (
    <AvatarContainer
      backgroundImage={imageUrl}
      backgroundColor={color}
      size={size}
      style={style}
    >
      {!imageUrl ? (
        <Abbreviation
          color="white"
          type={2}
          fontSize={fontSize} 
        >
          {getFirstLetters(name, 2).toUpperCase()}
        </Abbreviation>
      ) : null}
    </AvatarContainer>
);


export default Avatar;
