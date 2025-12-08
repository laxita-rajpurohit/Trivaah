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
`;

export const HeroCTALayer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

export const HeroCTAText = styled.div<{ $align: "left" | "right" }>`
  max-width: 420px;
  text-align: ${p => p.$align};
  margin-left: ${p => (p.$align === "left" ? "0" : "auto")};
  margin-right: ${p => (p.$align === "left" ? "auto" : "0")};
  color: #ffffff;
`;

export const HeroCTATitle = styled.h2`
  font-family: "Mahalika", "Times New Roman", serif;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 12px 0;
  letter-spacing: 0.04em;
`;

export const HeroCTASubtitle = styled.p`
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`;

export const HeroCTAOffer = styled.p`
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0 0 24px 0;
`;

