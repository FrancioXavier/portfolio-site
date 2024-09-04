import styled from 'styled-components';

import bruno from '@/config/img/stories/bruno.svg';

export const CarouselContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex: 0 0 55%;
  min-width: 0;
  width: 95vw;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.darkPrimary};

  .photoContainer {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: fit-content;
    justify-content: center;
    .photo {
      height: 18.229vw;
      width: 18.229vw;
      border-radius: 50%;
      background-image: url(${bruno.src});
      background-position: top;
      background-size: cover;
      background-repeat: no-repeat;
      margin-bottom: 2rem;

      @media only screen and (max-width: 768px) {
        height: 60vw;
        width: 60vw;
      }
    }

    p {
      font-size: 1.563vw;
      color: ${({ theme }) => theme.colors.white};
      margin-bottom: 0;

      @media only screen and (max-width: 768px) {
        font-size: 6vw;
      }
    }

    .sub {
      text-align: center;
      font-size: 1.2vw;
      color: ${({ theme }) => theme.colors.white};

      @media only screen and (max-width: 768px) {
        font-size: 3vw;
      }
    }
  }

  .text {
    height: 100%;
    width: 40%;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: left;
    justify-content: center;
    text-align: left;
    margin-left: 2rem;

    p {
      font-size: 1.1vw;
      color: ${({ theme }) => theme.colors.white};
    }

    @media only screen and (max-width: 768px) {
      width: 70%;
      p {
        font-size: 4vw;
      }
    }
  }

  @media only screen and (max-width: 668px) {
    flex: 0 0 100%;
    overflow: hidden;
  }
`;

export const TitleContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 5rem;
`;
