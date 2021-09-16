import styled from "styled-components";


export const Image = styled.div<{ url: string }>`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-image: url('${({ url }) => process.env.INARIBEHOST + url}');
  border-radius: 5px;
`;

export const Pagination = styled.div`
  position: absolute;
  left: 0;
  top: -59px;
  height: 18px;
  z-index: 1000;

  .swiper-pagination-bullet {
    width: 15px;
    height: 15px;
    background-color: transparent;
    border: 3px solid ${props => props.theme.colors['yellow-1']};
    opacity: 1;
  }

  .swiper-pagination-bullet-active {
    background-color: ${props => props.theme.colors['yellow-1']};
  }

  .swiper-pagination-clickable > .swiper-pagination-bullet-active {
    cursor: default;
  }
`;