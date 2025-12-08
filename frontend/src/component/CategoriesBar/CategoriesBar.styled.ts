import styled from "styled-components";

export const Bar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 42px;
  background: #fff;
  position: relative;
  align-items: center;
  padding: 10px 0;
  margin-bottom: 25px;

  /* Remove solid borders */
  border: none;

  /* Top black shadow */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 2px; /* thickness of the shadow */
    background: linear-gradient(to right, rgba(0,0,0,0.4), rgba(0,0,0,0)); /* fading black */
    box-shadow: 0 2px 6px rgba(0,0,0,0.2); /* subtle shadow */
  }

  /* Bottom black shadow */
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px; /* thickness */
    background: linear-gradient(to right, rgba(0,0,0,0), rgba(0,0,0,0.4)); /* fading black */
    box-shadow: 0 -2px 6px rgba(0,0,0,0.2); /* subtle shadow */
  }
`;

export const MenuItem = styled.div`
  position: relative;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background: #2b2b2b;
    transform: scaleX(0);
    transform-origin: center;
    transition: transform 0.22s ease;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

export const HoverArea = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  top: 100%;
  height: 260px;
  pointer-events: none;
`;

