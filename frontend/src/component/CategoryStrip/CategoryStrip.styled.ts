// CategoryStrip.styled.ts
import styled from "styled-components";

export const Strip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding: 60px 40px 50px 40px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    display: none;
  }

  /* MOBILE: compact strip for drawer */
  @media (max-width: 768px) {
    gap: 16px;
    padding: 8px 0 16px 0; /* no big side padding inside drawer */
    justify-content: flex-start;
  }
`;

export const Item = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  /* optional: reduce tap target margin on mobile */
  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

export const ImageWrapper = styled.div`
  width: 180px;
  aspect-ratio: 2 / 4;
  overflow: hidden;
  background: #f7f1e9;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;
  box-shadow: 0 0 10px 2px rgba(0, 0, 0, 0.25);

  ${Item}:hover & {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0, 0, 0, 0.25);
  }

  /* MOBILE: smaller cards in drawer */
  @media (max-width: 768px) {
    width: 75px;
    aspect-ratio: 2 / 3;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.16);
    & .bestseller{
    width:105px
    }
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

export const Label = styled.span`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

  /* MOBILE: smaller text under cards */
  @media (max-width: 768px) {
    margin-top: 6px;
    font-size: 11px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }
`;
