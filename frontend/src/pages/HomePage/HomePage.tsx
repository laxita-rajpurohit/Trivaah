// src/pages/HomePage/HomePage.tsx
import HeaderAnnouncement from "../../component/HeaderAnnouncement/HeaderAnnouncement";
import { Navbar } from "../../component/Navbar";
import CategoriesBar from "../../component/CategoriesBar/CategoriesBar";
import { HeroSlider } from "../../component/HeroSlider";
import { CategoryStrip } from "../../component/CategoryStrip";
import { CircularHeroCarousel } from "../../component/HeroCarousel";
import { HeroCTA } from "../../component/CTASection";
import { InstantSareeBanner } from "../../component/BannerSection";
import { ServiceHighlights } from "../../component/ServiceHighlight";
import { Footer } from "../../component/Footer";
import TivaahFaviconLogo from "../../assets/TV logo Footer Transparent.png";
import {
  heroSlides,
  heroCarouselSlides,
  categoryStripItems,
  bestsellersItems,
  ctaCards,
  footerColumns,
  socialLinks,
  serviceHighlights,
  instantSareeBannerMedia
} from "../../data/homePageData";
import {
  SectionTitle,
  SectionTitleWithMargin,
  CTAWrapper,
} from "./HomePage.styled";

export const HomePage = () => {
  return (
    <div>
      <HeaderAnnouncement />
      <Navbar />
      <CategoriesBar />
      <HeroSlider slides={heroSlides} autoplayMs={5000} />
      <CategoryStrip
        items={categoryStripItems}
        onSelect={(id: string) => console.log(id)}
      />
      <SectionTitleWithMargin>The Trivaah Edits</SectionTitleWithMargin>
      <CircularHeroCarousel items={heroCarouselSlides} autoPlayInterval={2800} />
      <CTAWrapper>
        {ctaCards.map((card: typeof ctaCards[0]) => (
          <HeroCTA
            key={card.id}
            backgroundImage={card.backgroundImage}
            title={card.title}
            offerText={card.offerText}
            codeText={card.codeText}
            buttonLabel={card.buttonLabel}
            align={card.align}
            onClick={() => console.log(card.id)}
          />
        ))}
      </CTAWrapper>
      <SectionTitle>Bestsellers</SectionTitle>
      <CategoryStrip
        items={bestsellersItems}
        onSelect={(id: string) => console.log(id)}
      />
      <InstantSareeBanner
        media={instantSareeBannerMedia}
        eyebrow="Introducing"
        title="INSTANT SAREE™"
        description="Any saree can now be pre-draped instantly"
        ctaLabel="PRE-DRAPE NOW"
        onCtaClick={() => console.log("Pre-drape clicked")}
      />
      <ServiceHighlights items={serviceHighlights} />
      <Footer
        columns={footerColumns}
        socialLinks={socialLinks}
        logoBackgroundSrc={TivaahFaviconLogo}
      />
    </div>
  );
};
