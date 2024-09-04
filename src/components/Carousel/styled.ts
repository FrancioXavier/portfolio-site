import styled from 'styled-components';

export const CarouselSlider = styled.div`
  overflow: hidden;

  .sponsorsCarousel {
    display: flex;
    width: 60vw;
    align-items: center;
    justify-content: center;
    touch-action: pan-y pinch-zoom;
    overflow: hidden;
    margin-left: 5vw;
  }

  .storiesCarousel {
    display: flex;
    width: 80vw;
    align-items: center;

    @media only screen and (max-width: 768px) {
      width: 99vw;
    }
  }

  .embla__slide__number {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20vh;
    user-select: none;
  }

  .embla__slide__number {
    backface-visibility: hidden;
  }

  .xiloHistoryCarousel {
    display: flex;
    width: 80vw;
    align-items: center;
  }
`;
