import styled from "styled-components";

export const BarWrapper = styled.div`
  width: 100%;
  background: #000;
  color: #fff;
  position: sticky;
  top: 0;
  height: 30px;
  z-index: 9999;
  display: flex;
  align-items: center;
`;

export const LogoBox = styled.div`
  position: absolute;
  left: 16px;
  top: 50%;
  transform: translateY(-50%);
  height: 40px;
  display: flex;
  align-items: center;
`;

export const LogoImg = styled.img`
  height: 40px;
  width: auto;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const SlideBox = styled.div`
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

export const Icon = styled.img`
  width: 16px;
  height: 16px;
`;

