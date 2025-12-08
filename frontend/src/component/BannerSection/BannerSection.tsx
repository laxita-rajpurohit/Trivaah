import React from "react";
import {
  BannerRoot,
  LeftMediaGrid,
  MainCell,
  TopCell,
  BottomCell,
  SmallCell,
  MediaWrapper,
  MediaVideo,
  MediaImage,
  RightContent,
  Eyebrow,
  Title,
  Description,
  CtaButton,
} from "./BannerSection.styled";

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
