import styled from "styled-components";
import { Body } from "@typography";
import values from "@common/values";

export const MenuContainer = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: ${values.menuWidth}px;
  height: 100vh;
  margin: 0;
`;

export const LogoWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  cursor: pointer;
`;

export const MenuItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyrightContainer = styled.small`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CopyrightText = styled(Body)`
  white-space: pre-line;
  text-align: center;
`;