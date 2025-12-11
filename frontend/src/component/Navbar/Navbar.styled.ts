// src/components/Navbar/Navbar.styled.ts
import styled from "styled-components";

export const NavWrapper = styled.nav`
  position: sticky;
  top: 30px;
z-index: 1000;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 10px 20px;
  background: #fff;

  @media (min-width: 769px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const Logo = styled.img`
  width: 140px;

  @media (max-width: 768px) {
    width: 120px;
  }
`;

// first row on mobile: hamburger | logo | icons
export const MobileTopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileSearchRow = styled.div`
  margin-top: 8px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const LeftMenu = styled.div`
  flex: 1;
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    
  }
`;

export const RightMenu = styled.div`
  flex: 1;
  display: none;

  @media (min-width: 769px) {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 16px;
  }
`;


export const Icon = styled.img`
  width: 22px;
  height: 22px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.6;
  }
    @media (max-width: 768px) {
    width: 18px;
    height: 18px;
  }
`;

export const MobileMenuIcon = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 1.8rem;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const MobileIconRow = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const LogoBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 0;

  img {
    max-width: 190px;
    min-width: 144px;
    height: 70px;
  }

  /* hide this desktop logo on mobile */
  @media (max-width: 768px) {
    display: none;
  }
`;

export const MobileLogoBox = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  margin-right: 35px;

  img {
    height: 50px;
    max-width: 160px;
  }

  @media (min-width: 769px) {
    display: none;
    
  }
`;

