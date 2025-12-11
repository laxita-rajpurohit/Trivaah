// src/components/Navbar/MobileBottomBar.tsx
import styled from "styled-components";
import searchIcon from "../../assets/icons/search.svg";
import homeIcon from "../../assets/icons/home.svg";      // create/replace as needed
import heartIcon from "../../assets/icons/heart.svg";
import userIcon from "../../assets/icons/user.svg";
import cartIcon from "../../assets/icons/cart.svg";

const Bar = styled.nav`
  position: fixed;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);

  width: calc(100% - 50px);
  padding: 8px 14px;
  border-radius: 18px;

  /* subtle 3D surface */
  background: linear-gradient(145deg, #ffffff, #f0f0f0);
  border: 1px solid grey;

  display: none;
  align-items: center;
  justify-content: space-between;

  /* layered shadow for depth */
  box-shadow:
    0 14px 30px rgba(0, 0, 0, 0.25),
    0 3px 8px rgba(0, 0, 0, 0.18);

  /* tiny inner highlight */
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background: linear-gradient(
      to top,
      rgba(255, 255, 255, 0.65),
      transparent 40%
    );
    pointer-events: none;
    mix-blend-mode: screen;
  }

  z-index: 2500;

  @media (max-width: 768px) {
    display: flex;
  }
`;


const Item = styled.button`
  flex: 1;
  border: none;
  background: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.14em;
  color: #222;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

export default function MobileBottomBar() {
  return (
    <Bar>
      <Item>
        <Icon src={homeIcon} alt="Home" />
      </Item>
      <Item>
        <Icon src={searchIcon} alt="Search" />
      </Item>
      <Item>
        <Icon src={heartIcon} alt="Wishlist" />
      </Item>
      <Item>
        <Icon src={userIcon} alt="Account" />
      </Item>
      <Item>
        <Icon src={cartIcon} alt="Cart" />
      </Item>
    </Bar>
  );
}
