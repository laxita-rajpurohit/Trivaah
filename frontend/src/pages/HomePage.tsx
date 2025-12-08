// src/pages/HomePage.tsx
import { useEffect, useState } from "react";
import axios from "axios";
import HeaderAnnouncement from "../component/HeaderAnnouncement";
import { Navbar } from "../component/Navbar";
import CategoriesBar from "../component/CategoriesBar";
import { HeroSlider } from "../component/HeroSlider";
import { CategoryStrip } from "../component/CategoryStrip";
import { CircularHeroCarousel } from "../component/HeroCarousel";
import { HeroCTA } from "../component/CTASection";
import { InstantSareeBanner } from "../component/BannerSection";
import { ServiceHighlights } from "../component/ServiceHighlight";
import { Footer } from "../component/Footer";
import TivaahFaviconLogo from "../assets/TV logo Footer Transparent.png";
import {
  heroSlides,
  heroCarouselSlides,
  categoryStripItems,
  bestsellersItems,
  ctaCards,
  footerColumns,
  socialLinks,
  serviceHighlights,
  instantSareeBannerMedia,
} from "../data/homePageData";

interface Saree {
  id: number;
  name: string;
  price: number;
  category: string;
}

export const HomePage = () => {
  const [_sarees, setSarees] = useState<Saree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Saree[]>("http://localhost:3001/api/sarees")
      .then((res) => {
        setSarees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load sarees");
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading Trivaah sarees...</div>;
  if (error) return <div style={{ padding: 24, color: "red" }}>{error}</div>;

  return (
    <div>
      <HeaderAnnouncement />
      <Navbar />

      {/* nav bar with black line */}
      <CategoriesBar />

      {/* hero occupies full width under the menu */}
      <HeroSlider slides={heroSlides} autoplayMs={5000} />
      
      <CategoryStrip
        items={categoryStripItems}
        onSelect={(id) => console.log(id)}
      />
      
      <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold", marginTop: "20px", fontFamily: "Mahalika" }}>
        The Trivaah Edits
      </div>
      
      <CircularHeroCarousel items={heroCarouselSlides} autoPlayInterval={2800} />
      
      <div style={{ display: "flex", gap: "20px", padding: "70px 0 60px 0", justifyContent: "center" }}>
        {ctaCards.map((card) => (
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
      </div>
      
      <div style={{ textAlign: "center", fontSize: "28px", fontWeight: "bold", fontFamily: "Mahalika" }}>
        Bestsellers
      </div>

      <CategoryStrip
        items={bestsellersItems}
        onSelect={(id) => console.log(id)}
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
