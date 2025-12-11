// CTASection.styled.ts
import styled from "styled-components";

export const HeroCTAWrap = styled.section<{ $bg: string }>`
  position: relative;
  width: 100%;
  min-height: 360px;
  display: flex;
  align-items: stretch;
  justify-content: center;
  overflow: hidden;
  background-image: url(${p => p.$bg});
  background-size: cover;
  background-position: center;
  padding: 10px;

  @media (max-width: 768px) {
    min-height: 260px;
    align-items: flex-end;
    padding: 16px 14px;
  }
`;

export const HeroCTALayer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;

  @media (max-width: 768px) {
    align-items: flex-end;
  }
`;

export const HeroCTAText = styled.div<{ $align: "left" | "right" }>`
  max-width: 420px;
  text-align: ${p => p.$align};
  margin-left: ${p => (p.$align === "left" ? "0" : "auto")};
  margin-right: ${p => (p.$align === "left" ? "auto" : "0")};
  color: #ffffff;

  @media (max-width: 768px) {
    max-width: 90%;
    text-align: left;
    margin: 0;
  }
`;

export const HeroCTATitle = styled.h2`
  font-family: "Mahalika", "Times New Roman", serif;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 12px 0;
  letter-spacing: 0.04em;

  @media (max-width: 768px) {
    font-size: 24px;
    line-height: 1.25;
    margin-bottom: 6px;
  }
`;

export const HeroCTASubtitle = styled.p`
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 10px 0;

  @media (max-width: 768px) {
    font-size: 11px;
    letter-spacing: 0.16em;
    margin-bottom: 4px;
  }
`;

export const HeroCTAOffer = styled.p`
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0 0 24px 0;

  @media (max-width: 768px) {
    font-size: 11px;
    letter-spacing: 0.14em;
    margin-bottom: 8px;
  }
`;
