// src/components/Navbar/SearchBar.tsx
import styled from "styled-components";
import searchIcon from "../../assets/icons/search.svg";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  background: #f5f5f5;
  padding: 8px 12px;
  border-radius: 6px;
  width: 250px;
  margin:0 65px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Input = styled.input`
  flex: 1;
  border: none;
  background: transparent;
  font-size: 14px;
  outline: none;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
`;

export default function SearchBar() {
  return (
    <Wrapper>
      <Input placeholder="Search for" />
      <Icon src={searchIcon} />
    </Wrapper>
  );
}
