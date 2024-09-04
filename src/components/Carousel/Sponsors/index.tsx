import Image from 'next/image';
import { CarouselContainer, LogoSponsor } from './styled';
import me from '@/config/img/AboutMe/me.svg';

export default function Sponsors() {
  return (
    <>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={me.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="Imagem com logo da empresa fisk"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={me.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="Imagem com logo da empresa Me Salva!"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={me.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="Imagem com logo da organização Brasil Cursinhos"
          />
        </LogoSponsor>
      </CarouselContainer>
      <CarouselContainer>
        <LogoSponsor>
          <Image
            src={me.src}
            priority
            height={100}
            width={100}
            style={{
              width: '100%',
              height: '100%',
            }}
            alt="Imagem com logo da empresa Arco"
          />
        </LogoSponsor>
      </CarouselContainer>
    </>
  );
}
