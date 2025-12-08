import React from "react";
import styled from "styled-components";

type ServiceItem = {
  id: string;
  icon: React.ReactNode;   // you can pass an <img> or an SVG component
  label: string;
};

type ServiceHighlightsProps = {
  items: ServiceItem[];
};

const Strip = styled.section`
  // width: 100%;
  padding: 48px 20px 64px;
  background: #ffffff;
  display: flex;
  justify-content: center;
`;

const Inner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 120px;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    justify-content: center;
    gap: 40px;
  }
`;

const Item = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

const IconWrapper = styled.div`
  width: 64px;
  height: 64px;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Label = styled.p`
  font-size: 18px;
  line-height: 1.4;
  color: #111111;
  font-family: "Mahalika", system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  margin: 0;
`;

export const ServiceHighlights: React.FC<ServiceHighlightsProps> = ({ items }) => {
  return (
    <Strip>
      <Inner>
        {items.map(item => (
          <Item key={item.id}>
            <IconWrapper>{item.icon}</IconWrapper>
            <Label style={{whiteSpace: 'pre-line'}}>{item.label}</Label>
          </Item>
        ))}
      </Inner>
    </Strip>
  );
};
