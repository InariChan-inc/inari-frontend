import { VoidFunctionComponent } from "react";
import { Tooltip } from '@mui/material';
import { Headline } from '@typography';
import {
  RChipContainer,
  StyledInfoIcon
} from './styles';

interface RChipProps {
  age: number;
  title?: string;
}

const RChip: VoidFunctionComponent<RChipProps> = ({
  age,
  title = 'Lorem ipsum dolor sit amet'
}) => {
  const isAdult = age >= 16;

  return (
    <RChipContainer isAdult={isAdult}>
      <Headline
        type={4}
        color="white"
      >
        R-{age}+
      </Headline>
      {isAdult ? 
        <Tooltip
          title={title}
          placement="top"
        >
          <StyledInfoIcon />
        </Tooltip> : null}
    </RChipContainer>
  );
};


export default RChip;