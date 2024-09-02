import styled from 'styled-components';
import avatar from '@/config/img/home/3d_avatar_10.svg';

export const HomePageContainer = styled.div`
  width: 100%;
  height: 100vh;
  background: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
`;
export const TextContainer = styled.div`
  width: 40vw;
  margin-left: 8vw;
`;
export const TitleH1 = styled.h1`
  font-size: 2.5vw;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const TitleH2 = styled.h2`
  font-size: 1.25vw;
  font-weight: bold;
  margin-top: 2vw;
  color: ${({ theme }) => theme.colors.white};
`;

export const PhotoContainer = styled.div`
  width: 20vw;
  height: 20vw;
  border-radius: 50%;
  margin-left: 17vw;
  z-index: 1;
  background-image: url(${avatar.src});
  background-position: top;
  background-size: cover;
  background-repeat: no-repeat;
  border: none;
`;
