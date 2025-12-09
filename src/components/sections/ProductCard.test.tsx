// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import ProductCard from './ProductCard';
import type { Product } from '../../types';

const mockProduct: Product = {
  id: '1',
  name: 'Test Product',
  category: 'Test Category',
  price: 99,
  image: 'https://example.com/image.jpg',
  isNew: false,
};

const mockNewProduct: Product = {
  ...mockProduct,
  isNew: true,
};

describe('ProductCard Component', () => {
  describe('Rendering', () => {
    it('should render the product card', () => {
      render(<ProductCard product={mockProduct} />);
      expect(screen.getByRole('article')).toBeInTheDocument();
    });

    it('should render product name', () => {
      render(<ProductCard product={mockProduct} />);
      expect(screen.getByText('Test Product')).toBeInTheDocument();
    });

    it('should render product category', () => {
      render(<ProductCard product={mockProduct} />);
      expect(screen.getByText('Test Category')).toBeInTheDocument();
    });

    it('should render product price', () => {
      render(<ProductCard product={mockProduct} />);
      expect(screen.getByText('$99')).toBeInTheDocument();
    });

    it('should render product image', () => {
      render(<ProductCard product={mockProduct} />);
      const image = screen.getByRole('img');
      expect(image).toHaveAttribute('src', 'https://example.com/image.jpg');
      expect(image).toHaveAttribute('alt', 'Test Product');
    });
  });

  describe('New Badge', () => {
    it('should show NEW badge when product is new', () => {
      render(<ProductCard product={mockNewProduct} />);
      expect(screen.getByText('NEW')).toBeInTheDocument();
    });

    it('should not show NEW badge when product is not new', () => {
      render(<ProductCard product={mockProduct} />);
      expect(screen.queryByText('NEW')).not.toBeInTheDocument();
    });
  });

  describe('Interactions', () => {
    it('should call onAddToCart when Quick Add is clicked', () => {
      const handleAddToCart = vi.fn();
      render(<ProductCard product={mockProduct} onAddToCart={handleAddToCart} />);
      
      fireEvent.click(screen.getByRole('button', { name: /quick add/i }));
      expect(handleAddToCart).toHaveBeenCalledWith('1');
    });

    it('should call onAddToWishlist when wishlist button is clicked', () => {
      const handleAddToWishlist = vi.fn();
      render(<ProductCard product={mockProduct} onAddToWishlist={handleAddToWishlist} />);
      
      fireEvent.click(screen.getByRole('button', { name: /add to wishlist/i }));
      expect(handleAddToWishlist).toHaveBeenCalledWith('1');
    });
  });

  describe('Accessibility', () => {
    it('should have accessible name for wishlist button', () => {
      render(<ProductCard product={mockProduct} />);
      expect(screen.getByRole('button', { name: /add to wishlist/i })).toBeInTheDocument();
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
