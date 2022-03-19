import { FunctionComponent } from "react";
import { Body } from "@typography";
import {
  GenreChipContainer
} from './styles';

const GenreChip: FunctionComponent = ({ children }) => (
  <GenreChipContainer>
    <Body
      type={4}
      color="brown-2"
    >
      {children}
    </Body>
  </GenreChipContainer>
);


export default GenreChip;