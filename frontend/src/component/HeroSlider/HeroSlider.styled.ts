// HeroSlider.styled.ts
import styled from "styled-components";

export const HeroSection = styled.section`
  position: relative;
  width: 100%;
  max-width: 100vw;
  overflow: hidden;
`;

export const SliderWrapper = styled.div`
  width: 100%;
  max-width: 100vw;
  overflow: hidden;

  .swiper,
  .swiper-wrapper,
  .swiper-slide {
    width: 100%;
    max-width: 100vw;
  }

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const SlideWrapper = styled.article`
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    /* fixed hero height for mobile */
    height: 360px;
  }
`;

export const SlideImage = styled.img`
  display: block;
  width: 100%;
  max-width: 100vw;
  height: auto;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const SlideOverlay = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;   /* vertical center */
  align-items: flex-end;
  padding-right: 7%;
  padding-left: 7%;
  color: #ffffff;
  pointer-events: none;

  @media (max-width: 768px) {
    align-items: flex-start;   /* left-align text */
    text-align: left;
    justify-content: center;   /* center inside image */
    padding: 0 20px;           /* no bottom push */
  }
`;

export const Badge = styled.p`
  display: none;
`;

export const Title = styled.h2`
  max-width: 520px;
  font-family: "Georgia", "Times New Roman", serif;
  font-weight: 400;
  font-size: clamp(2.2rem, 4.2vw, 3.2rem);
  line-height: 1.2;
  letter-spacing: 0.03em;
  text-align: right;
  margin: 0 0 1.6rem;

  @media (max-width: 768px) {
    max-width: 80%;
    text-align: left;
    font-size: 1.5rem;
    line-height: 1.25;
    margin-bottom: 0.5rem;
  }
`;

export const Subtitle = styled.p`
  text-align: right;
  text-transform: uppercase;
  letter-spacing: 0.22em;
  font-size: 0.95rem;
  margin: 0 0 0.75rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    text-align: left;
    font-size: 0.7rem;
    letter-spacing: 0.18em;
    margin-bottom: 0.5rem;
  }
`;

export const CTAButton = styled.a`
  pointer-events: auto;
  margin-top: 1.2rem;

  display: inline-flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 3.4rem;
  border-radius: 999px;
  border: none;

  background-color: #ffffff;
  color: #222222;

  font-size: 1rem;
  font-weight: 500;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  text-decoration: none;

  box-shadow: 0 16px 40px rgba(0, 0, 0, 0.3);
  transition: transform 0.18s ease, box-shadow 0.18s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 22px 45px rgba(0, 0, 0, 0.35);
  }

  @media (max-width: 768px) {
    margin-top: 0.7rem;
    padding: 0.6rem 2.1rem;
    font-size: 0.75rem;
    letter-spacing: 0.18em;
    box-shadow: 0 10px 26px rgba(0, 0, 0, 0.28);
  }
`;
