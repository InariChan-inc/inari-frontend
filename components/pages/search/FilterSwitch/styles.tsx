import styled from "styled-components";
import { Body } from "@typography";

export const FilterSwitchContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 0;

  ${Body} {
    user-select: none;
    cursor: pointer;
  }
`;