import React from "react";
import styled from "styled-components";

type Category = {
  id: string;
  label: string;
  imageSrc: string;
};

type CategoryStripProps = {
  items: Category[];
  onSelect?: (id: string) => void;
};

const Strip = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 32px;
  padding:  60px 40px 50px 40px;
  overflow-x: auto;

  /* hide scrollbar on WebKit (optional) */
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Item = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative; /* Added for pseudo-elements */
`;

const ImageWrapper = styled.div`
  width: 180px;
  aspect-ratio: 2 / 4;
  overflow: hidden;
  background: #f7f1e9;
  display: flex;
  align-items: center;
  justify-content: center;
//   border-radius: 24px; /* or 999px for oval */
  transition: transform 0.2s ease-out, box-shadow 0.2s ease-out;

  /* Shadow on all sides */
  box-shadow: 0 0 10px 2px rgba(0,0,0,0.25);

  ${Item}:hover & {
    transform: translateY(-4px);
    box-shadow: 0 8px 18px rgba(0,0,0,0.25);
  }
`;


const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

const Label = styled.span`
  margin-top: 12px;
  font-size: 18px;
  font-weight: 400;
  letter-spacing: 0.02em;
  text-align: center;
  color: #000000;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
`;

export const CategoryStrip: React.FC<CategoryStripProps> = ({ items, onSelect }) => {
  return (
    <Strip>
      {items.map(item => (
        <Item key={item.id} onClick={() => onSelect?.(item.id)}>
          <ImageWrapper>
            <Image src={item.imageSrc} alt={item.label} />
          </ImageWrapper>
          <Label>{item.label}</Label>
        </Item>
      ))}
    </Strip>
  );
};
