import { VoidFunctionComponent } from "react";
import { Body } from "@typography";
import {
  FilterTitleContainer,
  InformationIcon,
  StyledTooltip
} from './styles';


export interface FilterTitleProps {
  id?: string;
  information?: string;
  title: string;
  noMargin?: boolean;
}

const FilterTitle: VoidFunctionComponent<FilterTitleProps> = ({
  id,
  title,
  information,
  noMargin,
}) => {
  return (
    <FilterTitleContainer noMargin={noMargin}>
      {information ? (
        <StyledTooltip
          title={information}
          placement="left"
        >
          <InformationIcon />
        </StyledTooltip>
      ) : null}
      <Body
        as="label"
        htmlFor={id}
        type={1}
        color="brown-2"
      >
        {title}
      </Body>
    </FilterTitleContainer>    
  );
}

export default FilterTitle;