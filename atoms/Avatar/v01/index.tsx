import { FunctionComponent } from "react";
import { Body } from "../../../typography";
import { getFirstLetters } from "../../../utils";

export interface AvatarProps {
  imageUrl?: string,
  name?: string,
  color?: string,
  className?: string,
}

const Avatar: FunctionComponent<AvatarProps> = ({
  imageUrl,
  name = '',
  color,
  className = '',
}) => (
  <div 
    className={`rounded-full select-none ${className}`}
    style={{
      backgroundColor: color,
      backgroundImage: `url(${imageUrl})`,
      backgroundPosition: 'center',
      backgroundSize: 'cover'
    }}
  >
    {!imageUrl ? (
      <Body
        className="w-full h-full flex justify-center items-center"
        type={2}
      >
        {getFirstLetters(name, 2).toUpperCase()}
      </Body>
    ) : null}
  </div>
);


export default Avatar;
