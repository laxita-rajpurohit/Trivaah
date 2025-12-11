// src/data/navCategories.ts
export type CategoryGroup = {
    heading: string;
    items: string[];
  };
  
  export type CategoryItem = {
    label: string;
    dropdown?: CategoryGroup[];
  };
  
  export const navCategories: CategoryItem[] = [
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
            "Heavy Sarees",
          ],
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
            "Pure Silk Sarees",
          ],
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
            "Wine Sarees",
          ],
        },
      ],
    },
    {
      label: "Lehengas",
      dropdown: [
        {
          heading: "By Type",
          items: ["Semi Stitched Lehengas", "Readymade Lehengas"],
        },
        {
          heading: "By Material",
          items: ["Georgette Lehengas", "Net Lehengas", "Silk Lehengas", "Velvet Lehengas"],
        },
        {
          heading: "By Colour",
          items: ["Pink Lehengas", "Green Lehengas", "Blue Lehengas", "Yellow Lehengas"],
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
          ],
        },
      ],
    },
  ];
  