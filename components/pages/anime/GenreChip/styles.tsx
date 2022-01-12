import styled from 'styled-components';


export const GenreChipContainer = styled.div`
  user-select: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 20px;
  background-color: ${({ theme }) => theme.colors['yellow-1']};
  border-radius: 10px;

  :not(:last-of-type) {
    margin-right: 15px;
  }
`;