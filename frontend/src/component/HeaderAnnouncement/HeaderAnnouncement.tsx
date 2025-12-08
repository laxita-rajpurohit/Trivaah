import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay} from "swiper/modules";
import "swiper/css";
import logo from "../../assets/white-logo.svg";
import truck from "../../assets/icons/truck.svg";
import returns from "../../assets/icons/circularArrows.svg";
import discount from "../../assets/icons/tag.svg";
import {
  BarWrapper,
  LogoBox,
  LogoImg,
  Inner,
  SlideBox,
  Icon,
} from "./HeaderAnnouncement.styled";

export default function HeaderAnnouncement() {
  const items = [
    { icon: truck, text: "Free Shipping within India" },
    { icon: returns, text: "7 Days Easy returns" },
    { icon: discount, text: "Get extra 10% off on order above ₹2500" },
  ];

  return (
    <BarWrapper>
      <LogoBox>
        <LogoImg src={logo} alt="Trivaah Logo" />
      </LogoBox>

      <Inner>
      <Swiper
  modules={[Autoplay]}
  direction="horizontal"
  spaceBetween={0}
  slidesPerView={1}
  loop
  speed={1000}                     // slide animation speed
  autoplay={{
    delay: 2600,                     // no pause between slides
    disableOnInteraction: false,
  }}
>
  {items.map((item, index) => (
    <SwiperSlide key={index}>
      <SlideBox>
        <Icon src={item.icon} alt="" />
        <p>{item.text}</p>
      </SlideBox>
    </SwiperSlide>
  ))}
</Swiper>

      </Inner>
    </BarWrapper>
  );
}
