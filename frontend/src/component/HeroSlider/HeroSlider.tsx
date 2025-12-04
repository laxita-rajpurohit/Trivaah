// src/component/HeroSlider/HeroSlider.tsx
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import {
  HeroSection,
  SlideWrapper,
  SlideImage,
  SlideOverlay,
  Badge,
  Title,
  Subtitle,
  CTAButton,
  SliderWrapper,
} from "./HeroSlider.styled";
import type { HeroSliderProps } from "./HeroSlider.types";

export const HeroSlider: React.FC<HeroSliderProps> = ({
  slides,
  autoplayMs = 5000,
}) => {
  return (
    <HeroSection>
      <SliderWrapper>
        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop
          pagination={{ clickable: true }}
          autoplay={{ delay: autoplayMs, disableOnInteraction: false }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <SlideWrapper>
                <picture>
                  <source
                    media="(max-width: 768px)"
                    srcSet={slide.mobileImage}
                  />
                  <SlideImage
                    src={slide.desktopImage}
                    alt={slide.title}
                    loading="lazy"
                  />
                </picture>

                <SlideOverlay>
                  {slide.badgeText && <Badge>{slide.badgeText}</Badge>}
                  <Title>{slide.title}</Title>
                  {slide.subtitle && <Subtitle>{slide.subtitle}</Subtitle>}
                  <CTAButton href={slide.ctaLink}>{slide.ctaLabel}</CTAButton>
                </SlideOverlay>
              </SlideWrapper>
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </HeroSection>
  );
};
