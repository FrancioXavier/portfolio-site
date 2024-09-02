import { theme } from '@/styles/theme';
import {
  HomePageContainer,
  PhotoContainer,
  TextContainer,
  TitleH1,
  TitleH2,
} from './styled';
import Image from 'next/image';
import bgline from '@/config/img/home/bg-line.svg';
import bgwave from '@/config/img/home/bg-wave.svg';
import dots from '@/config/img/home/photo-dots.svg';
import Header from '@/components/Header';

export default function HomePage() {
  return (
    <>
      <Header />
      <Image
        src={bgline}
        height={100}
        width={100}
        priority
        alt="teste"
        style={{
          width: 'fit-content',
          height: `100vh`,
          position: 'absolute',
          zIndex: 1,
        }}
      />

      <Image
        src={bgwave}
        height={100}
        width={100}
        priority
        alt="teste"
        style={{
          width: 'fit-content',
          height: `100%`,
          position: 'absolute',
          right: 0,
          zIndex: 0,
        }}
      />
      <HomePageContainer>
        <TextContainer style={{ zIndex: 1 }}>
          <TitleH1>
            Olá, me chamo Francio Xavier
            <span style={{ color: theme.colors.white }}>!</span> <br /> Sou
            desenvolvedor de software
            <span style={{ color: theme.colors.white }}>:)</span>
          </TitleH1>
          <TitleH2>
            Futuro cientista de computação, codando para web e sempre em busca
            de novos desafios.
          </TitleH2>
        </TextContainer>
        <PhotoContainer>
          <Image
            src={dots}
            height={100}
            width={100}
            priority
            alt="teste"
            style={{
              width: 'fit-content',
              height: `15vh`,
            }}
          />
          <Image
            src={dots}
            height={100}
            width={100}
            priority
            alt="teste"
            style={{
              width: 'fit-content',
              height: `15vh`,
              marginLeft: '90%',
              marginTop: '20%',
            }}
          />
        </PhotoContainer>
      </HomePageContainer>
    </>
  );
}
