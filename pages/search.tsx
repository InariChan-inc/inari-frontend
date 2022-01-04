import { useState } from 'react';
import {
  Grid,
} from '@mui/material';
import { Helmet } from '@atoms';
import {
  FilterButton,
  SearchContainer,
  SortSelect,
  UpControllerWrapper
} from '@components/pages/search';


export default function Search() {

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  return (
    <SearchContainer>
      <Helmet title="Пошук" />
      <UpControllerWrapper>
        <SortSelect
          onChange={(sortItem) => {
            console.log(sortItem);
          }}
        />
        <FilterButton
          open={isFilterOpen} 
          onToggle={() => {
            setIsFilterOpen((prev) => !prev);
          }}
        />
      </UpControllerWrapper>
    </SearchContainer>
  );
}