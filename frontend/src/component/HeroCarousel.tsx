import React, { useEffect, useState } from "react";
import styled from "styled-components";

export type Slide = {   // ⬅️ export this
    id: string;
    title?: string;
    videoSrc: string;
  };
  

type CarouselProps = {
  items: Slide[];
  autoPlayInterval?: number;
};
  
const CarouselWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #ffffff;
  overflow: hidden;
  padding:  0 0 20px 0;

  /* 3D space */
  perspective: 1400px;
`;

const SlideContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const SlideCard = styled.div<{ $offset: number }>`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 260px;
  height: 420px;
  border-radius: 28px;
  overflow: hidden;
  background: #000;
  transform-style: preserve-3d; /* keep depth for children */
  transition: transform 0.6s ease, opacity 0.6s ease, box-shadow 0.6s ease;
  cursor: pointer;

  ${({ $offset }) => {
    const abs = Math.abs($offset);

    // how far each step is rotated in Y (more = more 3D fan)
    const baseAngle = 18; // degrees
    const rotateY = $offset * baseAngle;

    // bring center forward, push sides back
    const translateZ = $offset === 0 ? 260 : 180 - abs * 40;

    // horizontal and vertical offsets – tighter for more cluttered look
    const translateX = $offset * 120;
    const translateY = 40 + abs * 10;

    // small random-ish skew/rotateZ for clutter feel
    const rotateZ = $offset * 2;

    const scale = $offset === 0 ? 1.05 : 0.9 - abs * 0.03;

    const opacity = abs > 4 ? 0 : 1 - abs * 0.12;
    const zIndex = 20 - abs;

    const shadow =
      abs === 0
        ? "0 30px 80px rgba(0,0,0,0.45)"
        : "0 20px 50px rgba(0,0,0,0.35)";

    return `
      transform:
        translate3d(-50%, -50%, 0)
        translateX(${translateX}px)
        translateY(${translateY}px)
        translateZ(${translateZ}px)
        rotateY(${rotateY}deg)
        rotateZ(${rotateZ}deg)
        scale(${scale});
      opacity: ${opacity};
      z-index: ${zIndex};
      box-shadow: ${shadow};
    `;
  }}
`;



const Arrow = styled.button<{ $side: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === "left" ? "left: 48px;" : "right: 48px;")}
  transform: translateY(-50%);
  width: 44px;
  height: 44px;
  border-radius: 999px;
  border: none;
  background: rgba(0, 0, 0, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  backdrop-filter: blur(6px);
  transition: background 0.2s ease, transform 0.2s ease;
  z-index: 20;

  &:hover {
    background: rgba(0, 0, 0, 0.12);
    transform: translateY(-50%) scale(1.05);
  }
`;

const ArrowIcon = styled.span`
  display: inline-block;
  font-size: 20px;
  color: #555;
`;

const SlideVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const CircularHeroCarousel: React.FC<CarouselProps> = ({
  items,
  autoPlayInterval = 2800,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goNext = () =>
    setActiveIndex((prev) => (prev + 1) % items.length);

  const goPrev = () =>
    setActiveIndex((prev) =>
      (prev - 1 + items.length) % items.length
    );

  useEffect(() => {
    const id = setInterval(goNext, autoPlayInterval);
    return () => clearInterval(id);
  }, [autoPlayInterval, items.length]);

  const getOffset = (index: number) => {
    // circular distance from activeIndex
    const total = items.length;
    let offset = index - activeIndex;
    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;
    return offset;
  };

  return (
    <CarouselWrapper>
      <SlideContainer>
        {items.map((item, index) => {
          const offset = getOffset(index);
          return (
            <SlideCard key={item.id} $offset={offset} onClick={goNext}>
            <SlideVideo src={item.videoSrc} autoPlay muted loop playsInline />
          </SlideCard>
          );
        })}
      </SlideContainer>

      <Arrow $side="left" onClick={goPrev}>
        <ArrowIcon>❮</ArrowIcon>
      </Arrow>
      <Arrow $side="right" onClick={goNext}>
        <ArrowIcon>❯</ArrowIcon>
      </Arrow>
    </CarouselWrapper>
  );
};
