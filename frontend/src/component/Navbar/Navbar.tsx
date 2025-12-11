// src/components/Navbar/Navbar.tsx
import SearchBar from "./SearchBar";
import {
  NavWrapper,
  LeftMenu,
  RightMenu,
  Icon,
  LogoBox,
  MobileTopRow,
  MobileMenuIcon,
  MobileIconRow,
  MobileSearchRow,
  MobileLogoBox
} from "./Navbar.styled";

import logo from "../../assets/trivaah-logo.svg";
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <><NavWrapper>
      <LeftMenu>
      </LeftMenu>
      <LogoBox>
        <img src={logo} alt="Trivaah logo" />
      </LogoBox>

      <RightMenu>
        <SearchBar />
        <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
          <Icon src={user} />
          <Icon src={heart} />
          <Icon src={cart} />
        </div>
      </RightMenu>
      {/* Mobile row 1: hamburger | logo | icons */}
      <MobileTopRow>
  <MobileMenuIcon onClick={() => setMobileOpen(true)}>≡</MobileMenuIcon>

  <MobileLogoBox>
    <img src={logo} alt="Trivaah logo" />
  </MobileLogoBox>

  <MobileIconRow>
    <Icon src={user} />
    <Icon src={heart} />
    <Icon src={cart} />
  </MobileIconRow>
</MobileTopRow>


      {/* Mobile row 2: search bar full width */}
      <MobileSearchRow>
        <SearchBar />
      </MobileSearchRow>
    </NavWrapper><MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} /></>
  );
}
