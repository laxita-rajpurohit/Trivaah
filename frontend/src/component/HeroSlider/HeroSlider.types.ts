// src/component/HeroSlider/HeroSlider.types.ts
export type HeroSlide = {
    id: string;
    desktopImage: string;
    mobileImage: string;
    title: string;
    subtitle?: string;
    badgeText?: string;
    ctaLabel: string;
    ctaLink: string;
  };
  
  export type HeroSliderProps = {
    slides: HeroSlide[];
    autoplayMs?: number;
  };
  