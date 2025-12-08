import React from "react";
import styled from "styled-components";

type BannerMedia = {
  id: string;
  type: "image" | "video";
  src: string;
  alt?: string;
};

type InstantBannerProps = {
  media: BannerMedia[];
  title: string;
  eyebrow?: string;
  description?: string;
  ctaLabel: string;
  onCtaClick?: () => void;
  background?: string;
};

const BannerRoot = styled.section`
//   width: 100%;
//   min-height: 420px;
  display: grid;
  grid-template-columns: minmax(0, 1.4fr) minmax(0, 1fr);
  background: #f4f4f6;
//   padding: 40px 60px;
padding: 20px 40px 20px 40px;
margin: 0 20px;
  column-gap: 40px;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    row-gap: 32px;
  }
`;

const LeftMediaGrid = styled.div<{ $count: number }>`
  display: grid;
//   width: 100%;
//   height: 100%;
  gap: 12px;

  ${({ $count }) => {
    if ($count === 1) {
      // single full tile
      return `
        grid-template-columns: 1fr;
        grid-template-rows: 1fr;
      `;
    }
    if ($count === 2) {
      // two side-by-side
      return `
        // grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr;
      `;
    }
    // 3+ -> 1 big left, 2 stacked on right (top / bottom)
    return `
      grid-template-columns: 1.1fr 1fr;
    //   grid-template-rows: 1fr 1fr;
      grid-template-areas:
        "main top"
        "main bottom";
    `;
  }}
`;

const MainCell = styled.div`
  grid-area: main;
  overflow: hidden;
  border-radius: 8px;
`;

const TopCell = styled.div`
  grid-area: top;
  overflow: hidden;
  border-radius: 8px;
`;

const BottomCell = styled.div`
  grid-area: bottom;
  overflow: hidden;
  border-radius: 8px;
`;

const SmallCell = styled.div`
  overflow: hidden;
  border-radius: 8px;
`;

const MediaWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const MediaVideo = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const MediaImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const RightContent = styled.div<{ $bg?: string }>`
   background: ${({ $bg }) => $bg || "#f4f4f6"};
  border-radius: 8px;
  padding: 72px 64px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;

  @media (max-width: 900px) {
    padding: 40px 28px;
    align-items: center;
    text-align: center;
  }
`;

const Eyebrow = styled.p`
  font-size: 18px;
  margin: 0 0 8px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color:#202020;
`;

const Title = styled.h2`
  font-family: "Mahalika", "Times New Roman", serif;
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 16px;
  color: #202020;
`;

const Description = styled.p`
  font-size: 16px;
  margin: 0 0 28px;
  color: #4d3b35;
`;

const CtaButton = styled.button`
  padding: 12px 40px;
  border-radius: 999px;
  border: none;
  background: #000000;
  color: #ffffff;
  font-size: 14px;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  cursor: pointer;
  transition: background 0.2s ease, transform 0.2s ease;
  white-space: nowrap;

  &:hover {
    background: #222222;
    transform: translateY(-1px);
  }
`;

const BannerMediaElement: React.FC<{ item: BannerMedia }> = ({ item }) => (
  <MediaWrapper>
    {item.type === "video" ? (
      <MediaVideo src={item.src} autoPlay muted loop playsInline />
    ) : (
      <MediaImage src={item.src} alt={item.alt || ""} />
    )}
  </MediaWrapper>
);

export const InstantSareeBanner: React.FC<InstantBannerProps> = ({
  media,
  title,
  eyebrow,
  description,
  ctaLabel,
  onCtaClick,
  background,
}) => {
  const count = media.length;

  return (
    <BannerRoot>
      <LeftMediaGrid $count={count}>
        {count === 1 && (
          <SmallCell>
            <BannerMediaElement item={media[0]} />
          </SmallCell>
        )}

        {count === 2 && (
          <>
            <SmallCell>
              <BannerMediaElement item={media[0]} />
            </SmallCell>
            <SmallCell>
              <BannerMediaElement item={media[1]} />
            </SmallCell>
          </>
        )}

        {count >= 3 && (
          <>
            <MainCell>
              <BannerMediaElement item={media[0]} />
            </MainCell>
            <TopCell>
              <BannerMediaElement item={media[1]} />
            </TopCell>
            <BottomCell>
              <BannerMediaElement item={media[2]} />
            </BottomCell>
          </>
        )}
      </LeftMediaGrid>

      <RightContent $bg={background}>
        {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
        <CtaButton onClick={onCtaClick}>{ctaLabel}</CtaButton>
      </RightContent>
    </BannerRoot>
  );
};
