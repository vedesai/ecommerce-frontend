// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Logo from './Logo';

describe('Logo Component', () => {
  describe('Rendering', () => {
    it('should render the logo with brand name', () => {
      render(<Logo />);
      expect(screen.getByText(/Crest & Thread/i)).toBeInTheDocument();
    });

    it('should render as a link to home page', () => {
      render(<Logo />);
      const link = screen.getByRole('link');
      expect(link).toHaveAttribute('href', '/');
    });

    it('should render SVG icon', () => {
      render(<Logo />);
      const svg = document.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Variants', () => {
    it('should render with dark variant by default', () => {
      render(<Logo />);
      const brandName = screen.getByText(/Crest & Thread/i);
      expect(brandName).toHaveClass('text-primary');
    });

    it('should render with light variant', () => {
      render(<Logo variant="light" />);
      const brandName = screen.getByText(/Crest & Thread/i);
      expect(brandName).toHaveClass('text-white');
    });
  });

  describe('Sizes', () => {
    it('should render with medium size by default', () => {
      render(<Logo />);
      const brandName = screen.getByText(/Crest & Thread/i);
      expect(brandName).toHaveClass('text-xl');
    });

    it('should render with small size', () => {
      render(<Logo size="sm" />);
      const brandName = screen.getByText(/Crest & Thread/i);
      expect(brandName).toHaveClass('text-base');
    });

    it('should render with large size', () => {
      render(<Logo size="lg" />);
      const brandName = screen.getByText(/Crest & Thread/i);
      expect(brandName).toHaveClass('text-2xl');
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
