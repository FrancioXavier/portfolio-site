import styled from 'styled-components';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 0 0 28%;
  width: fit-content;
  height: fit-content;
  max-height: fit-content;
  background-color: none;

  @media only screen and (max-width: 768px) {
    border: none;
    padding: 1rem;
  }
`;

export const LogoSponsor = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10vw;
  height: fit-content;
  transform: translate3d(0, 0, 0);
`;
