import MegaDropdown from "../Dropdown";
import { useState, useRef } from "react";
import { Bar, MenuItem, HoverArea } from "./CategoriesBar.styled";
import { navCategories } from "../../data/navCategories";


const data = navCategories;

export default function CategoriesBar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [dropdownX, setDropdownX] = useState<number>(0);
  const barRef = useRef<HTMLDivElement | null>(null);

  const hoveredItem = data.find((d) => d.label === hovered);

  return (
    <Bar
      ref={barRef}
      onMouseLeave={() => setHovered(null)}
    >
      {data.map((item) => (
        <MenuItem
          key={item.label}
          onMouseEnter={(e) => {
            if (item.dropdown) {
              const rect = e.currentTarget.getBoundingClientRect();
              const barRect = barRef.current!.getBoundingClientRect();

              const centerX = rect.left - barRect.left + rect.width / 2;

              setDropdownX(centerX);
              setHovered(item.label);
            } else {
              setHovered(null);
            }
          }}
        >
          {item.label}
        </MenuItem>
      ))}

      <MegaDropdown
        columns={hoveredItem?.dropdown ?? null}
        visible={!!hovered}
        x={dropdownX}
      />

      <HoverArea />
    </Bar>
  );
}
