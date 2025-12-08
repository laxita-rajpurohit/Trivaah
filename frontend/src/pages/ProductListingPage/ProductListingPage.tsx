import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import HeaderAnnouncement from "../../component/HeaderAnnouncement/HeaderAnnouncement";
import { Navbar } from "../../component/Navbar";
import CategoriesBar from "../../component/CategoriesBar/CategoriesBar";
import { Footer } from "../../component/Footer";
import TivaahFaviconLogo from "../../assets/TV logo Footer Transparent.png";
import {
  footerColumns,
  socialLinks,
} from "../../data/homePageData";
import { slugToCategory } from "../../utils/routing";
import {
  PageContainer,
  PageHeader,
  PageTitle,
  PageDescription,
  FilterButtonsContainer,
  FilterButton,
  ContentWrapper,
  Sidebar,
  SidebarTitle,
  FilterSection,
  FilterLabel,
  PriceRangeContainer,
  PriceInput,
  GoButton,
  MainContent,
  ResultsHeader,
  ResultsCount,
  SortDropdown,
  ProductGrid,
  ProductCard,
  ProductImageWrapper,
  ProductImage,
  ProductTag,
  ProductInfo,
  ProductName,
  ProductPrice,
  StyledLink,
} from "./ProductListingPage.styled";

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  tag?: string;
  tagType?: "discount" | "bestseller" | "offer";
}

// Mock product data - replace with API call
const mockProducts: Product[] = [
  {
    id: 1,
    name: "Floral Saree in Pink",
    price: 3499,
    imageUrl: "https://picsum.photos/300/400?random=1",
    tag: "2@25% 3@30%",
    tagType: "offer",
  },
  {
    id: 2,
    name: "Floral Saree in Teal",
    price: 3999,
    imageUrl: "https://picsum.photos/300/400?random=2",
    tag: "2@25% 3@30%",
    tagType: "offer",
  },
  {
    id: 3,
    name: "Floral Saree in Yellow",
    price: 4299,
    imageUrl: "https://picsum.photos/300/400?random=3",
    tag: "BESTSELLER",
    tagType: "bestseller",
  },
  {
    id: 4,
    name: "Floral Saree in Mint",
    price: 2799,
    imageUrl: "https://picsum.photos/300/400?random=4",
    tag: "30% DISCOUNT",
    tagType: "discount",
  },
  {
    id: 5,
    name: "Floral Saree in Peach",
    price: 4599,
    imageUrl: "https://picsum.photos/300/400?random=5",
    tag: "2@25% 3@30%",
    tagType: "offer",
  },
  {
    id: 6,
    name: "Floral Saree in Lavender",
    price: 3799,
    imageUrl: "https://picsum.photos/300/400?random=6",
    tag: "BESTSELLER",
    tagType: "bestseller",
  },
];

export const ProductListingPage = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [minPrice, setMinPrice] = useState(2392);
  const [maxPrice, setMaxPrice] = useState(7592);
  const [sortBy, setSortBy] = useState("relevance");

  const categoryName = categorySlug ? slugToCategory(categorySlug) : "Products";
  
  // Filter buttons data
  const filterButtons = [
    "SAREE",
    "ART SILK SAREES",
    "PASTEL SAREES",
    "SAREES UNDER 5000",
    "DIWALI SAREES",
  ];

  useEffect(() => {
    // Here you would fetch products based on categorySlug
    // For now, using mock data
    setProducts(mockProducts);
  }, [categorySlug]);

  const handlePriceFilter = () => {
    // Filter products by price range
    const filtered = mockProducts.filter(
      (p) => p.price >= minPrice && p.price <= maxPrice
    );
    setProducts(filtered);
  };

  return (
    <PageContainer>
      <HeaderAnnouncement />
      <Navbar />
      <CategoriesBar />

      <PageHeader>
        <PageTitle>{categoryName}</PageTitle>
        <PageDescription>
          The floral saree is a must-have in every Indian woman's ethnic wardrobe. 
          Trivaah's collection features {categoryName.toLowerCase()} from traditional 
          floral motifs to modern designs. Buying a {categoryName.toLowerCase()} online 
          is easy when you shop at Trivaah... <StyledLink href="#">Read More</StyledLink>
        </PageDescription>
      </PageHeader>

      <FilterButtonsContainer>
        {filterButtons.map((button) => (
          <FilterButton key={button}>{button}</FilterButton>
        ))}
      </FilterButtonsContainer>

      <ContentWrapper>
        <Sidebar>
          <SidebarTitle>FILTER BY</SidebarTitle>
          
          <FilterSection>
            <FilterLabel>PRICE</FilterLabel>
            <PriceRangeContainer>
              <PriceInput
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                placeholder="Min"
              />
              <span>to</span>
              <PriceInput
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                placeholder="Max"
              />
              <GoButton onClick={handlePriceFilter}>GO</GoButton>
            </PriceRangeContainer>
          </FilterSection>

          <FilterSection>
            <FilterLabel>FABRIC</FilterLabel>
            {/* Add fabric filter options here */}
          </FilterSection>
        </Sidebar>

        <MainContent>
          <ResultsHeader>
            <ResultsCount>{products.length} results</ResultsCount>
            <SortDropdown
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="relevance">SORT BY : Relevance</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="newest">Newest First</option>
            </SortDropdown>
          </ResultsHeader>

          <ProductGrid>
            {products.map((product) => (
              <ProductCard key={product.id}>
                {product.tag && (
                  <ProductTag tagType={product.tagType}>{product.tag}</ProductTag>
                )}
                <ProductImageWrapper>
                  <ProductImage src={product.imageUrl} alt={product.name} />
                </ProductImageWrapper>
                <ProductInfo>
                  <ProductName>{product.name}</ProductName>
                  <ProductPrice>₹{product.price.toLocaleString()}</ProductPrice>
                </ProductInfo>
              </ProductCard>
            ))}
          </ProductGrid>
        </MainContent>
      </ContentWrapper>

      <Footer
        columns={footerColumns}
        socialLinks={socialLinks}
        logoBackgroundSrc={TivaahFaviconLogo}
      />
    </PageContainer>
  );
};

