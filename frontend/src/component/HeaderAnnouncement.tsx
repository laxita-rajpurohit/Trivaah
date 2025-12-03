import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import logo from "../assets/white-logo.svg";
import truck from "../assets/icons/truck.svg";
import returns from "../assets/icons/circularArrows.svg";
import discount from "../assets/icons/tag.svg";

const BarWrapper = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  position: sticky;
  top: 0;
  z-index: 9999;
  display: flex;
  align-items: center;
`;

const LogoBox = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  display: flex;
  align-items: center;
`;

const LogoImg = styled.img`
  height: 40px;
  width: auto;
`;

const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

// animated content
const SlideBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-size: 9px;
  color: #fff;

  opacity: 0;
  transform: translateX(20px);
  transition: opacity 0.50s ease-out, transform 0.50s ease-out;

  .swiper-slide-active & {
    opacity: 1;
    transform: translateX(0);
  }
`;


// when the slide is active, animate its SlideBox
const StyledSwiperSlide = styled(SwiperSlide)`
  &.swiper-slide-active ${SlideBox} {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

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
