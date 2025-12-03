// src/components/Navbar/NavButton.tsx
import styled from "styled-components";

interface NavButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

const Button = styled.button<{ active?: boolean }>`
  padding: 8px 20px;
  font-size: 14px;
  background: ${({ active }) => (active ? "#000" : "transparent")};
  color: ${({ active }) => (active ? "#fff" : "#000")};
  border: none;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease;

  &:hover {
    background: #000;
    color: #fff;
  }
`;

export default function NavButton({ label, active, onClick }: NavButtonProps) {
  return <Button active={active} onClick={onClick}>{label}</Button>;
}
