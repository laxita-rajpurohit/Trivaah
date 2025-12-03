// src/components/Navbar/Navbar.tsx
import SearchBar from "./SearchBar";
import {
  NavWrapper,
  LeftMenu,
  RightMenu,
  Icon
} from "./Navbar.styled";

import logo from "../../assets/trivaah-logo.svg";
import user from "../../assets/icons/user.svg";
import heart from "../../assets/icons/heart.svg";
import cart from "../../assets/icons/cart.svg";

export default function Navbar() {
  return (
    <NavWrapper>
      <LeftMenu>
        {/* <NavButton label="WOMEN" active />
        <NavButton label="MEN" />
        <NavButton label="BRIDAL" />
        <NavButton label="LUXE" />
        <Icon src={store} /> */}
      </LeftMenu>
      <div style={{ flex: 0, display: "flex", justifyContent: "center" }}>
         <img src={logo} alt="Trivaah logo" width={180} height={'auto'} style={{maxWidth:'190px',minWidth:'144px',margin:'0 auto',height:'70px'}}/>
        
         </div>

      <RightMenu>
        <SearchBar />
        {/* <Icon src={whatsapp} /> */}
        <div style={{display:'flex',alignItems:'center',gap:'15px'}}>
        <Icon src={user} />
        <Icon src={heart} />
        <Icon src={cart} />
        </div>
      </RightMenu>
    </NavWrapper>
  );
}
