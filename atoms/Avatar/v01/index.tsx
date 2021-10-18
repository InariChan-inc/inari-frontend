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


const getRandom = (min: number, max: number) => Math.floor(Math.random()*(max - min)) + min;

const getHSL = () => `hsl(${getRandom(25, 45)}, ${getRandom(50, 100)}%, ${getRandom(30,60)}%)`;


const Avatar: FunctionComponent<AvatarProps> = ({
  imageUrl,
  name = '',
  color,
  size = 48,
  fontSize,
  style,
}) => {
  const defaultColor = useRef<string>(getHSL());

  return (
    <AvatarContainer
      backgroundImage={imageUrl}
      backgroundColor={color || defaultColor.current}
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
};


export default Avatar;
