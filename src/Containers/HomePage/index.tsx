import { theme } from '@/styles/theme';
import {
  AboutMeContainer,
  AboutMeContent,
  HomePageContainer,
  MyProjectsContent,
  PhotoContainer,
  SeeMoreButton,
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
import me from '@/config/img/AboutMe/me.svg';
// import lines from '@/config/img/Projects/lines.svg';
import Header from '@/components/Header';
import Carousel from '@/components/Carousel';
import { EmblaOptionsType } from 'embla-carousel';

export default function HomePage() {
  const SLIDE_COUNT = 5;
  const SLIDES = Array.from(Array(SLIDE_COUNT).keys());
  const OPTIONS: EmblaOptionsType = {
    loop: true,
  };
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
          <Carousel slides={SLIDES} options={OPTIONS} />
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
      <AboutMeContainer>
        <AboutMeContent>
          <div>
            <h2>
              Sobre mim<span style={{ color: theme.colors.white }}>.</span>
            </h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Quibusdam rem tempore ex magnam laudantium enim. Voluptate
              consequuntur qui, minima odit veritatis earum aperiam cumque vero
              tempore, reiciendis iusto? Officiis, corrupti! Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Laudantium corporis,
              similique consequatur nihil iusto pariatur dolorum illum atque
              nesciunt nisi. Ullam molestias dignissimos quam excepturi ipsa
              molestiae sunt enim animi! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Blanditiis, quas quod nostrum quis laudantium
              atque autem praesentium architecto fugit placeat minus labore eum.
              Repellendus in nihil eveniet non voluptates tempore!
            </p>
          </div>
        </AboutMeContent>
        <AboutMeContent>
          <Image
            src={me}
            height={100}
            width={100}
            priority
            alt="teste"
            style={{
              width: '80%',
              height: `65vh`,
              zIndex: 0,
            }}
          />
        </AboutMeContent>
      </AboutMeContainer>

      <SkillsPageContainer
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          background: theme.colors.gray,
        }}
      >
        <MyProjectsContent>
          <h2>Sobre meu trabalho</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid
            dignissimos inventore quia, quas debitis eveniet? Sapiente aperiam
            doloremque quidem tempora quam quaerat officiis maxime repudiandae
            impedit voluptatibus. Totam, expedita facilis.
          </p>
          <SeeMoreButton>Ver mais</SeeMoreButton>
        </MyProjectsContent>
      </SkillsPageContainer>
    </>
  );
}
