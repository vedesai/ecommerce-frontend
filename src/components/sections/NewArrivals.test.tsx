// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import NewArrivals from './NewArrivals';

describe('NewArrivals Component', () => {
  describe('Rendering', () => {
    it('should render the section', () => {
      const { container } = render(<NewArrivals />);
      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('should render section label', () => {
      render(<NewArrivals />);
      expect(screen.getByText(/Curated Selection/i)).toBeInTheDocument();
    });

    it('should render section heading', () => {
      render(<NewArrivals />);
      expect(screen.getByRole('heading', { name: /New Arrivals/i })).toBeInTheDocument();
    });

    it('should render section description', () => {
      render(<NewArrivals />);
      expect(
        screen.getByText(/Discover our latest pieces/i)
      ).toBeInTheDocument();
    });
  });

  describe('Products', () => {
    it('should render 4 product cards', () => {
      render(<NewArrivals />);
      const articles = screen.getAllByRole('article');
      expect(articles).toHaveLength(4);
    });

    it('should render Cashmere Crew Sweater', () => {
      render(<NewArrivals />);
      expect(screen.getByText('Cashmere Crew Sweater')).toBeInTheDocument();
    });

    it('should render Tailored Wool Coat', () => {
      render(<NewArrivals />);
      expect(screen.getByText('Tailored Wool Coat')).toBeInTheDocument();
    });

    it('should render Classic White Tee', () => {
      render(<NewArrivals />);
      expect(screen.getByText('Classic White Tee')).toBeInTheDocument();
    });

    it('should render Selvedge Denim Jeans', () => {
      render(<NewArrivals />);
      expect(screen.getByText('Selvedge Denim Jeans')).toBeInTheDocument();
    });
  });

  describe('View All Button', () => {
    it('should render View All Products button', () => {
      render(<NewArrivals />);
      expect(
        screen.getByRole('button', { name: /view all products/i })
      ).toBeInTheDocument();
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
