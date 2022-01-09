import styled from 'styled-components';
import values from '@common/values';


export const SearchContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 60px;
  position: relative;
  min-height: 100%;
`;

export const FilterToggleButton = styled.div`
`;

export const UpControllerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  top: 0;
  z-index: 1001;
  background-color: white;
  padding: 10px 0;
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  margin: 30px 0;
`;

export const GridWrapper = styled.div<{ isFilterOpen: boolean }>`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ isFilterOpen }) => isFilterOpen && 'margin-right: 82px;'}
`;

export const FiltersWrapper = styled.div<{ open: boolean }>`
  display: ${({ open }) => open ? 'block': 'none'};
  width: 305px;
  padding: 35px;
  height: fit-content;
  max-height: calc(100vh - ${values.headerHeight}px - 1px - 32px - 36px - 30px - 30px - 32px);
  border: 1px solid ${(props) => props.theme.colors['yellow-1']};
  border-radius: 5px;
  overflow: auto;
  box-shadow: 0 16px 24px 0 ${(props) => props.theme.colors['yellow-1']};
  position: sticky;
  top: 86px;
  overflow: hidden auto;

  > div:not(:last-of-type) {
    margin-bottom: 10px;
  }
`;

export const FilterSwitchesWrapper = styled.div`
  margin: 20px 0 30px;
`;

export const ButtonsWrapper = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
`;

export { default as SortSelect } from './SortSelect';
export { default as FilterButton } from './FilterButton';
export { default as FilterTitle } from './FilterTitle';
export { default as FilterSwitch } from './FilterSwitch';