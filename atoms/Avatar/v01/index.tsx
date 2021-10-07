import { CSSProperties, FunctionComponent } from "react";
import { getFirstLetters } from "@utils";
import { TStringOrNumber } from "@common/types";
import {
  AvatarContainer,
  Abbreviation,
} from './styles';

export interface AvatarProps {
  imageUrl?: string;
  name?: string;
  color?: string;
  size?: TStringOrNumber;
  style?: CSSProperties;
}

const Avatar: FunctionComponent<AvatarProps> = ({
  imageUrl,
  name = '',
  color,
  size = 48,
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
      >
        {getFirstLetters(name, 2).toUpperCase()}
      </Abbreviation>
    ) : null}
  </AvatarContainer>
);


export default Avatar;
