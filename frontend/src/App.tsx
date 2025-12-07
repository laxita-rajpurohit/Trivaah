import { useEffect, useState } from 'react';
import axios from 'axios';
import HeaderAnnouncement from './component/HeaderAnnouncement';
import { Navbar} from './component/Navbar';
import CategoriesBar from './component/CategoriesBar';
import { HeroSlider, type HeroSlide } from './component/HeroSlider';
import { CategoryStrip } from './component/CategoryStrip';
import { CircularHeroCarousel, type Slide } from './component/HeroCarousel';



interface Saree {
  id: number;
  name: string;
  price: number;
  category: string;
}

function App() {
  const [sarees, setSarees] = useState<Saree[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get<Saree[]>('http://localhost:3001/api/sarees')
      .then((res) => {
        setSarees(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError('Failed to load sarees');
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: 24 }}>Loading Trivaah sarees...</div>;
  if (error) return <div style={{ padding: 24, color: 'red' }}>{error}</div>;
  // temporary static hero slides (replace with real images in /public/hero)
  const slides: HeroSlide[] = [
    {
      id: "salwar-under-2499",
      desktopImage: "/hero/hero1.jpeg",
      mobileImage: "/hero/hero1.jpeg",
      title: "Test hero",
      subtitle: "SALWAR SUITS\nUNDER ₹2499",
      badgeText: "",
      ctaLabel: "SHOP NOW",
      ctaLink: "#",
    },
    {
      id: "hero-2",
      desktopImage: "/hero/hero2.jpeg",
      mobileImage: "/hero/hero2.jpeg",
      title: "Ready-to-wear. Ready to wow.",
      subtitle: "SALWAR SUITS\nUNDER ₹2499", // we’ll split this into 2 lines via CSS
      badgeText: "",
      ctaLabel: "SHOP NOW",
      ctaLink: "#",
    },
    {
      id: "hero-3",
      desktopImage: "/hero/hero3.jpeg",
      mobileImage: "/hero/hero3.jpeg",
      title: "Test hero",
      subtitle: "SALWAR SUITS\nUNDER ₹2499",
      badgeText: "",
      ctaLabel: "SHOP NOW",
      ctaLink: "#",
    }
  ];
  
  const HeroCarouselSlides: Slide[] = [
    { id: "1", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: "2", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: "3", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: "4", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
    { id: "5", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  ];
  return (
    <div>
    <HeaderAnnouncement />
    <Navbar />

    {/* nav bar with black line */}
    <CategoriesBar />

    {/* hero occupies full width under the menu */}
    <HeroSlider slides={slides} autoplayMs={5000} />
    <CategoryStrip
  items={[
    { id: "coord", label: "Co-ord Sets", imageSrc: "https://picsum.photos/300/600?random=1" },
    { id: "dresses", label: "Dresses", imageSrc: "https://picsum.photos/300/600?random=2" },
    { id: "jumpsuits", label: "Jumpsuits", imageSrc: "https://picsum.photos/300/600?random=3" },
    { id: "suit-sets", label: "Suit Sets", imageSrc: "https://picsum.photos/300/600?random=4" },
    { id: "bottoms", label: "Bottoms", imageSrc: "https://picsum.photos/300/600?random=5" },
    { id: "shirts", label: "Shirts", imageSrc: "https://picsum.photos/300/600?random=6" },
    { id: "sarees", label: "Sarees", imageSrc: "https://picsum.photos/300/600?random=7" },
    { id: "kaftans", label: "Kaftans", imageSrc: "https://picsum.photos/300/600?random=8" },
  ]}
  
  
  onSelect={id => console.log(id)}
/>
<div style={{textAlign:'center',fontSize:'28px',fontWeight:'bold',marginTop:'20px',fontFamily: "Mahalika"}}>The Trivaah Edits</div>
<CircularHeroCarousel items={HeroCarouselSlides} autoPlayInterval={2800} />

  </div>

  );
}

export default App;
