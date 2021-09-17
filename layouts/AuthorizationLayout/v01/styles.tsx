import values from "@common/values";
import styled from "styled-components";


export const AuthorizationLayoutContainer = styled.div`
  display: flex;
  min-height: calc(100vh - ${values.headerHeight}px - 1px);
`;

export const EntryPoint = styled.section`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 60px;
`;

export const AnimatedBaner = styled.div<{ url: string }>`
  width: 33.3333%;
  min-height: 100%;
  background-position: center;
  background-size: cover;
  background-image: url('${({ url }) => url}');
  border-top-left-radius: 16px;
  border-bottom-left-radius: 16px;

  @keyframes anibaner {
    0% {
      background-position: 0% center;
    }
    50% {
      background-position: 100% center;
    }
    100% {
      background-position: 0% center;
    }
  }

  animation: anibaner 60s infinite linear;
`;