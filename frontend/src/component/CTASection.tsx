import React from "react";
import styled from "styled-components";

export type HeroCTAProps = {
  backgroundImage: string;
  title: string;
  subtitle?: string;
  offerText?: string;
  codeText?: string;
  buttonLabel?: string;
  align?: "left" | "right"; // text alignment for each side card
  onClick?: () => void;
};

const HeroCTAWrap = styled.section<{ $bg: string }>`
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
  padding: 10px ;
`;

const HeroCTALayer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const HeroCTAText = styled.div<{ $align: "left" | "right" }>`
  max-width: 420px;
  text-align: ${p => p.$align};
  margin-left: ${p => (p.$align === "left" ? "0" : "auto")};
  margin-right: ${p => (p.$align === "left" ? "auto" : "0")};
  color: #ffffff;
`;

const HeroCTATitle = styled.h2`
  font-family: "Mahalika", "Times New Roman", serif;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 12px 0;
  letter-spacing: 0.04em;
`;

const HeroCTASubtitle = styled.p`
  font-size: 16px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  margin: 0 0 10px 0;
`;

const HeroCTAOffer = styled.p`
  font-size: 14px;
  letter-spacing: 0.16em;
  text-transform: uppercase;
  margin: 0 0 24px 0;
`;

export const HeroCTA: React.FC<HeroCTAProps> = ({
  backgroundImage,
  title,
  subtitle,
  offerText,
  codeText,
  buttonLabel,
  align = "left",
  onClick,
}) => {
  return (
    <HeroCTAWrap $bg={backgroundImage}>
      <HeroCTALayer>
        <HeroCTAText $align={align}>
          {subtitle && <HeroCTASubtitle>{subtitle}</HeroCTASubtitle>}
          <HeroCTATitle>{title}</HeroCTATitle>
          {(offerText || codeText) && (
            <HeroCTAOffer>
              {offerText}
              {offerText && codeText && " | "}
              {codeText}
            </HeroCTAOffer>
          )}
          {/* <HeroCTAButton onClick={onClick}>{buttonLabel}</HeroCTAButton> */}
        </HeroCTAText>
      </HeroCTALayer>
    </HeroCTAWrap>
  );
};
