import styled from "styled-components";

export const Wrapper = styled.div<{ visible?: boolean; x?: number }>`
  position: absolute;
  top: 100%;
  left: ${({ x }) => (x ? `${x}px` : "50%")}; 
  transform: translateX(-50%) translateY(10px);

  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: opacity 0.25s ease, transform 0.25s ease;
  z-index: 999;

  display: flex;
  justify-content: center;
  width: auto;

  /* white background panel */
  & > .content-box {
    width: auto;
    max-width: 90vw;
    background: #ffffff;
    padding: 20px 50px;
    border-radius: 12px;
    box-shadow: 0 25px 45px rgba(0,0,0,0.08);
    display: flex;
    gap: 80px;
    justify-content: center;
  }

  ${({ visible }) =>
    visible &&
    `
      opacity: 1;
      visibility: visible;
      pointer-events: auto;
      transform: translateX(-50%) translateY(0);
    `}
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Heading = styled.h4`
  font-size: 13px;
  letter-spacing: 0.16em;
  color: #202020;
  text-transform: uppercase;
  margin: 0 0 8px 0;
`;

export const Item = styled.a`
  font-size: 12px;
  color: #202020;
  text-decoration: none;
  letter-spacing: 0.02em;
  cursor: pointer;

  &:hover {
    opacity: 0.65;
    color: red;
  }
`;

