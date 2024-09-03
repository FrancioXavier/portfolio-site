import { theme } from '@/styles/theme';
import {
  HomePageContainer,
  PhotoContainer,
  SkillsContent,
  SkillsPageContainer,
  TextContainer,
  TitleH1,
  TitleH2,
} from './styled';
import Image from 'next/image';
import bgline from '@/config/img/home/bg-line.svg';
import bgwave from '@/config/img/home/bg-wave.svg';
import lineSkills from '@/config/img/SkillsPage/middle-line.svg';
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
      <SkillsPageContainer>
        <Image
          src={lineSkills}
          height={100}
          width={100}
          priority
          alt="teste"
          style={{
            width: 'fit-content',
            height: `100vh`,
            position: 'absolute',
            zIndex: 1,
            right: '50%',
            left: '45%',
          }}
        />

        <SkillsContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quam labore nobis nemo, asperiores magnam quod atque ad. Repudiandae
            aut hic autem quae et iure omnis facilis consequuntur eum illum.
          </p>
          <h2>Back-end</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quam labore nobis nemo, asperiores magnam quod atque ad. Repudiandae
            aut hic autem quae et iure omnis facilis consequuntur eum illum.
          </p>
        </SkillsContent>
        <SkillsContent>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quam labore nobis nemo, asperiores magnam quod atque ad. Repudiandae
            aut hic autem quae et iure omnis facilis consequuntur eum illum.
          </p>
          <h2>Back-end</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
            quam labore nobis nemo, asperiores magnam quod atque ad. Repudiandae
            aut hic autem quae et iure omnis facilis consequuntur eum illum.
          </p>
        </SkillsContent>
      </SkillsPageContainer>
    </>
  );
}
