import values from "@common/values";
import styled from "styled-components";


export const GlobalLayoutContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const RightSectionWrapper = styled.div`
  flex: 1 1 0%;
  position: relative;
  overflow-x: hidden;
  margin-left: ${values.menuWidth}px;
`;

export const Main = styled.main`
  margin-top: ${values.headerHeight}px;
  height: calc(100vh - ${values.headerHeight}px);
  overflow-y: auto;
  border-left-width: 1px;
  border-top-width: 1px;
  border-top-left-radius: 10px;
  border-color: ${props => props.theme.colors["yellow-1"]};
`;