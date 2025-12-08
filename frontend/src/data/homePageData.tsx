import React from "react";
import MadeInIndia from "../assets/icons/MadeInIndia.svg";
import { type HeroSlide } from "../component/HeroSlider";
import { type Slide } from "../component/HeroCarousel";

// Hero slider slides
export const heroSlides: HeroSlide[] = [
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
    subtitle: "SALWAR SUITS\nUNDER ₹2499",
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
  },
];

// Hero carousel slides
export const heroCarouselSlides: Slide[] = [
  { id: "1", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  { id: "2", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  { id: "3", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  { id: "4", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
  { id: "5", videoSrc: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" },
];

// Category strip items
export const categoryStripItems = [
  { id: "coord", label: "Co-ord Sets", imageSrc: "https://picsum.photos/300/600?random=1" },
  { id: "dresses", label: "Dresses", imageSrc: "https://picsum.photos/300/600?random=2" },
  { id: "jumpsuits", label: "Jumpsuits", imageSrc: "https://picsum.photos/300/600?random=3" },
  { id: "suit-sets", label: "Suit Sets", imageSrc: "https://picsum.photos/300/600?random=4" },
  { id: "bottoms", label: "Bottoms", imageSrc: "https://picsum.photos/300/600?random=5" },
  { id: "shirts", label: "Shirts", imageSrc: "https://picsum.photos/300/600?random=6" },
  { id: "sarees", label: "Sarees", imageSrc: "https://picsum.photos/300/600?random=7" },
  { id: "kaftans", label: "Kaftans", imageSrc: "https://picsum.photos/300/600?random=8" },
];

// Bestsellers category strip items (without labels)
export const bestsellersItems = [
  { id: "coord", label: "", imageSrc: "https://picsum.photos/300/600?random=1" },
  { id: "dresses", label: "", imageSrc: "https://picsum.photos/300/600?random=2" },
  { id: "jumpsuits", label: "", imageSrc: "https://picsum.photos/300/600?random=3" },
  { id: "suit-sets", label: "", imageSrc: "https://picsum.photos/300/600?random=4" },
  { id: "bottoms", label: "", imageSrc: "https://picsum.photos/300/600?random=5" },
  { id: "shirts", label: "", imageSrc: "https://picsum.photos/300/600?random=6" },
];

// CTA cards
export const ctaCards = [
  {
    id: "blouse-edit",
    backgroundImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1600&q=80",
    title: "Glam-Ready Blouse Edit",
    offerText: "Get 7% OFF*",
    codeText: "Use Code: GLAM7",
    buttonLabel: "Shop Now",
    align: "left" as const,
  },
  {
    id: "luxe-edit",
    backgroundImage:
      "https://ik.imagekit.io/4sjmoqtje/tr:w-710,c-at_max/cdn/shop/files/2-editors-picks-blouse-india-420x568-desk-02-12-25.jpg?v=1764744357",
    title: "",
    offerText: "",
    codeText: "",
    align: "right" as const,
  },
];

// Footer columns
export const footerColumns = [
  {
    id: "designer",
    title: "Designer Wear",
    links: [
      { label: "Salwar Kameez", href: "/salwar-kameez" },
      { label: "Sarees", href: "/sarees" },
      { label: "Lehenga", href: "/lehenga" },
      { label: "Gowns", href: "/gowns" },
      { label: "Kidswear", href: "/kidswear" },
    ],
  },
  {
    id: "about",
    title: "About Us",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Contact Us", href: "/contact" },
      { label: "Our Stores", href: "/stores" },
      { label: "Press", href: "/press" },
    ],
  },
  {
    id: "policies",
    title: "Policies",
    links: [
      { label: "Terms & Conditions", href: "/terms" },
      { label: "Shipping", href: "/shipping" },
      { label: "Returns", href: "/returns" },
      { label: "Privacy Policy", href: "/privacy" },
    ],
  },
  {
    id: "account",
    title: "My Account",
    links: [
      { label: "Shopping Bag", href: "/cart" },
      { label: "Wishlist", href: "/wishlist" },
      { label: "Order History", href: "/orders" },
      { label: "Order Tracking", href: "/track-order" },
    ],
  },
];

// Social links
export const socialLinks = [
  { id: "instagram", label: "Instagram", href: "https://instagram.com" },
  { id: "facebook", label: "Facebook", href: "https://facebook.com" },
];

// Service highlights
export const serviceHighlights: Array<{ id: string; icon: React.ReactNode; label: string }> = [
  {
    id: "dispatch",
    icon: <img src="https://ik.imagekit.io/4sjmoqtje/tr:w-50,c-at_max/cdn/shop/files/icon1.svg?v=1717492962" alt="24-hour Dispatch" />,
    label: "24-hour Dispatch",
  },
  {
    id: "returns",
    icon: <img src="https://ik.imagekit.io/4sjmoqtje/tr:w-50,c-at_max/cdn/shop/files/Easy_Returns.svg?v=1717482978" alt="Easy Returns" />,
    label: "Easy Returns",
  },
  {
    id: "instore",
    icon: (
      <img
        src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='18' height='18' fill='black' viewBox='0 0 24 24'><path d='M18.5 3L5 21l1.5 1.5L20 4.5 18.5 3zM7 7a3 3 0 110 6 3 3 0 010-6zm10 6a3 3 0 110 6 3 3 0 010-6z'/></svg>"
        alt="percent icon"
        width={50}
        height={50}
      />
    ),
    label: "10% OFF* \non Pre-Paid Orders",
  },
  {
    id: "fitting",
    icon: <img src={MadeInIndia} alt="Made in India" width={50} height={50} />,
    label: "Made in India",
  },
];

// Instant Saree Banner media
export const instantSareeBannerMedia = [
  { id: "1", type: "video" as const, src: "https://ik.imagekit.io/4sjmoqtje/tr:c-at_max/cdn/shop/videos/c/vp/4dcaaaf548ab471caaa91bde03e76736/4dcaaaf548ab471caaa91bde03e76736.SD-480p-1.5Mbps-46542178.mp4?v=0" },
  { id: "2", type: "image" as const, src: "https://ik.imagekit.io/4sjmoqtje/tr:w-400,c-at_max/cdn/shop/files/new-arrival-banner-2-400x264-deaktop-25-04-25.jpg?v=1745571087" },
  { id: "3", type: "image" as const, src: "https://ik.imagekit.io/4sjmoqtje/tr:w-200,c-at_max/cdn/shop/files/new-arrival-banner-4-200x282-deaktop-25-04-25.jpg?v=1745571087" },
  { id: "4", type: "image" as const, src: "https://ik.imagekit.io/4sjmoqtje/tr:w-200,c-at_max/cdn/shop/files/new-arrival-banner-3-200x281-deaktop-25-04-25.jpg?v=1745571087" },
];

