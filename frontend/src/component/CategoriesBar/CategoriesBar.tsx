import MegaDropdown from "../Dropdown";
import { useState, useRef } from "react";
import { Bar, MenuItem, HoverArea } from "./CategoriesBar.styled";


const data = [
  { label: "Sale" },
  { label: "Bestsellers" },
  { label: "New Arrivals" },

  {
    label: "Sarees",
    dropdown: [
      {
        heading: "By Type",
        items: [
          "Floral Sarees",
          "Pastel Sarees",
          "Sequins Sarees",
          "Stonework Sarees",
          "Printed Sarees",
          "Heavy Sarees"
        ]
      },
      {
        heading: "By Material",
        items: [
          "Art Silk Sarees",
          "Organza Sarees",
          "Satin Sarees",
          "Banarasi Sarees",
          "Net Sarees",
          "Crepe Sarees",
          "Georgette Sarees",
          "Pure Silk Sarees"
        ]
      },
      {
        heading: "By Colour",
        items: [
          "Black Sarees",
          "Yellow Sarees",
          "Red Sarees",
          "Green Sarees",
          "Pink Sarees",
          "Blue Sarees",
          "Wine Sarees"
        ]
      }
    ]
  },

  {
    label: "Lehengas",
    dropdown: [
      {
        heading: "By Type",
        items: [
          "Semi Stitched Lehengas",
          "Readymade Lehengas",
        ],
      },
      {
        heading: "By Material",
        items: [
          "Georgette Lehengas",
          "Net Lehengas",
          "Silk Lehengas",
          "Velvet Lehengas",
        ],
      },
      {
        heading: "By Colour",
        items: [
          "Pink Lehengas",
          "Green Lehengas",
          "Blue Lehengas",
          "Yellow Lehengas",
        ],
      },
    ],
  },

  { label: "Dress Materials" },
  { label: "Salwar Suits" },

  {
    label: "Occassions",
    dropdown: [
      {
        heading: "By Occasion",
        items: [
          "Summer Sarees",
          "Wedding Sarees",
          "Engagement Sarees",
          "Reception Sarees",
          "Haldi Sarees",
          "Festive Sarees",
          "Party Wear Sarees",
        ]
      }
    ]
  }
];

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
