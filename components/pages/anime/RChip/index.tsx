import { VoidFunctionComponent } from "react";
import { Tooltip } from '@mui/material';
import { Body } from '@typography';
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
      <Body
        type={2}
        color="white"
      >
        R-{age}+
      </Body>
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