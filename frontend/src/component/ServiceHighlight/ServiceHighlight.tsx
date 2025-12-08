import React from "react";
import { Strip, Inner, Item, IconWrapper, Label } from "./ServiceHighlight.styled";

type ServiceItem = {
  id: string;
  icon: React.ReactNode;   // you can pass an <img> or an SVG component
  label: string;
};

type ServiceHighlightsProps = {
  items: ServiceItem[];
};

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ items }) => {
  return (
    <Strip>
      <Inner>
        {items.map(item => (
          <Item key={item.id}>
            <IconWrapper>{item.icon}</IconWrapper>
            <Label>{item.label}</Label>
          </Item>
        ))}
      </Inner>
    </Strip>
  );
};
