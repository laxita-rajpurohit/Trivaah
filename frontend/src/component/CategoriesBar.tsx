// src/components/CategoriesBar.tsx
import styled from "styled-components";

const Bar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 20px;
//   padding: 14px 0;
  background-color: #ffffff;
`;

const Item = styled.button`
  position: relative;
  border: none;
  background: transparent;
  cursor: pointer;

  font-family: inherit;
  font-size: 13px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  color: #000000;

  padding-bottom: 6px; /* space for underline */

  /* underline pseudo-element */
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    height: 2px;
    width: 100%;
    background-color: #000000;
    transform-origin: center;
    transform: scaleX(0);
    transition: transform 0.25s ease-out;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;


const items = [
  "Sale",
  "Bestsellers",
  "New Arrivals",
  "Sarees",
  "Lehengas",
  "Dress Materials",
  "Salwar Suits",
  "Occasions",
];

export default function CategoriesBar() {
  return (
    <Bar>
      {items.map((label) => (
        <Item key={label}>{label}</Item>
      ))}
    </Bar>
  );
}
