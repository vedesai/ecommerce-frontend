// AI Generated Code by Deloitte + Cursor (BEGIN)
export interface HeroBanner {
  id: string;
  title: string;
  subtitle?: string;
  description?: string;
  imageUrl: string;
  mobileImageUrl?: string;
  ctaText?: string;
  ctaLink?: string;
  priority: number;
  isActive: boolean;
  startDate?: string;
  endDate?: string;
}

export interface FeaturedCategory {
  id: string;
  name: string;
  slug: string;
  description?: string;
  imageUrl: string;
  iconUrl?: string;
  productCount?: number;
  displayOrder: number;
  isActive: boolean;
}

export interface FeaturedProduct {
  productId: string;
  name: string;
  slug: string;
  brand?: string;
  price: number;
  compareAtPrice?: number;
  discount?: number;
  currency: string;
  thumbnailUrl: string;
  rating: number;
  reviewCount: number;
  inStock: boolean;
  stockQuantity?: number;
  badges?: string[];
  variantCount?: number;
}

export interface FeaturedProductSection {
  sectionId: string;
  sectionTitle: string;
  sectionType: 'featured' | 'bestsellers' | 'trending' | 'new_arrivals';
  products: FeaturedProduct[];
  displayOrder: number;
  maxProducts?: number;
}

export interface HomePageComponents {
  heroBanners: HeroBanner[];
  featuredCategories: FeaturedCategory[];
  productSections: FeaturedProductSection[];
  promotionalBanners?: any[];
}

export interface HomePageMetadata {
  title: string;
  description: string;
  canonicalUrl: string;
  structuredData?: object;
}

export interface HomePageData {
  page: {
    id: string;
    layout: string;
    template: string;
    isActive: boolean;
  };
  components: HomePageComponents;
  metadata: HomePageMetadata;
}
// AI Generated Code by Deloitte + Cursor (END)