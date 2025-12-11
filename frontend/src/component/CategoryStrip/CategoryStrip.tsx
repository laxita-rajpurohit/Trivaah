import React from "react";
import { Strip, Item, ImageWrapper, Image, Label } from "./CategoryStrip.styled";

type Category = {
  id: string;
  label: string;
  imageSrc: string;

};

type CategoryStripProps = {
  items: Category[];
  onSelect?: (id: string) => void;
  className: string
};

export const CategoryStrip: React.FC<CategoryStripProps> = ({ items, onSelect ,className}) => {
  return (
    <Strip>
      {items.map(item => (
        <Item key={item.id} onClick={() => onSelect?.(item.id)}>
          <ImageWrapper className={className}>
            <Image src={item.imageSrc} alt={item.label} />
          </ImageWrapper>
          <Label>{item.label}</Label>
        </Item>
      ))}
    </Strip>
  );
};
