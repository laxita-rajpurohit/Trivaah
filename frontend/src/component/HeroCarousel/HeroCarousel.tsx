import React, { useEffect, useState } from "react";
import {
  CarouselWrapper,
  SlideContainer,
  SlideCard,
  Arrow,
  ArrowIcon,
  SlideVideo,
} from "./HeroCarousel.styled";

export type Slide = {
  id: string;
  title?: string;
  videoSrc: string;
};

type CarouselProps = {
  items: Slide[];
  autoPlayInterval?: number;
};

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
