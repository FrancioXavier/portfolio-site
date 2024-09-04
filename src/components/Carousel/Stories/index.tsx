/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';
import { CarouselContainer } from './styled';
import quotMarks from '@/config/img/elements/element3.svg';
import { useMediaQuery } from '@mui/material';
import { useEffect, useState } from 'react';

export default function Stories() {
  const mobile = useMediaQuery('(max-width: 768px)');
  const [containerResponsive, setContainerResponsive] = useState({});

  useEffect(() => {
    if (mobile) {
      setContainerResponsive({ flexDirection: 'column', alignItems: 'center' });
    } else {
      setContainerResponsive({});
    }
  }, [mobile]);

  return (
    <>
      <CarouselContainer>
        <div className="d-flex" style={containerResponsive}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <Image
              src={quotMarks.src}
              alt="teste"
              width={100}
              height={100}
              style={{ width: '5.5vw', height: '5.5vw' }}
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
      <CarouselContainer>
        <div className="d-flex" style={containerResponsive}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <div>
              <Image
                src={quotMarks.src}
                alt="teste"
                width={100}
                height={100}
                style={{ width: '5.5vw', height: '5.5vw' }}
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
      <CarouselContainer>
        <div className="d-flex" style={containerResponsive}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <Image
              src={quotMarks.src}
              alt="teste"
              width={100}
              height={100}
              style={{ width: '5.5vw', height: '5.5vw' }}
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
      <CarouselContainer>
        <div className="d-flex" style={containerResponsive}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <div>
              <Image
                src={quotMarks.src}
                alt="teste"
                width={100}
                height={100}
                style={{ width: '5.5vw', height: '5.5vw' }}
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
      <CarouselContainer>
        <div className="d-flex" style={containerResponsive}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <Image
              src={quotMarks.src}
              alt="teste"
              width={100}
              height={100}
              style={{ width: '5.5vw', height: '5.5vw' }}
            />
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
      <CarouselContainer>
        <div className="d-flex" style={containerResponsive}>
          <div className="photoContainer">
            <div className="photo"></div>
            <div className="personName">
              <p>Bruno presidente</p>
              <p className="sub">Presidente do Edifique</p>
            </div>
          </div>
          <div className="text">
            <div>
              <Image
                src={quotMarks.src}
                alt="teste"
                width={100}
                height={100}
                style={{ width: '5.5vw', height: '5.5vw' }}
              />
            </div>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo
              dolore labori Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Deleniti totam quod voluptatibus quam repellendus quos rerum
              perferendis, nostrum
            </p>
          </div>
        </div>
      </CarouselContainer>
    </>
  );
}
