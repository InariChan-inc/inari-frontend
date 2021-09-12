import { FunctionComponent } from "react";
import { getFirstLetters } from "@utils";
import {
  AvatarContainer,
  Abbreviation,
} from './styles';

export interface AvatarProps {
  imageUrl?: string,
  name?: string,
  color?: string,
}

const Avatar: FunctionComponent<AvatarProps> = ({
  imageUrl,
  name = '',
  color,
}) => (
  <AvatarContainer
    backgroundImage={imageUrl}
    backgroundColor={color}
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
