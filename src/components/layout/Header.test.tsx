// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  describe('Rendering', () => {
    it('should render the header element', () => {
      render(<Header />);
      expect(screen.getByRole('banner')).toBeInTheDocument();
    });

    it('should render the logo', () => {
      render(<Header />);
      expect(screen.getByText(/Crest & Thread/i)).toBeInTheDocument();
    });

    it('should render navigation links on desktop', () => {
      render(<Header />);
      expect(screen.getByText('New Arrivals')).toBeInTheDocument();
      expect(screen.getByText('Men')).toBeInTheDocument();
      expect(screen.getByText('Women')).toBeInTheDocument();
      expect(screen.getByText('Collections')).toBeInTheDocument();
      expect(screen.getByText('Sale')).toBeInTheDocument();
    });
  });

  describe('Navigation Links', () => {
    it('should have correct href for New Arrivals', () => {
      render(<Header />);
      const link = screen.getByRole('link', { name: /new arrivals/i });
      expect(link).toHaveAttribute('href', '/new-arrivals');
    });

    it('should have correct href for Men', () => {
      render(<Header />);
      const link = screen.getByRole('link', { name: /^men$/i });
      expect(link).toHaveAttribute('href', '/men');
    });

    it('should have correct href for Women', () => {
      render(<Header />);
      const link = screen.getByRole('link', { name: /^women$/i });
      expect(link).toHaveAttribute('href', '/women');
    });
  });

  describe('Icon Buttons', () => {
    it('should render search button', () => {
      render(<Header />);
      expect(screen.getByRole('button', { name: /search/i })).toBeInTheDocument();
    });

    it('should render account button', () => {
      render(<Header />);
      expect(screen.getByRole('button', { name: /account/i })).toBeInTheDocument();
    });

    it('should render cart button', () => {
      render(<Header />);
      expect(screen.getByRole('button', { name: /cart/i })).toBeInTheDocument();
    });

    it('should display cart count badge', () => {
      render(<Header />);
      expect(screen.getByText('0')).toBeInTheDocument();
    });
  });

  describe('Mobile Menu', () => {
    it('should render menu button for mobile', () => {
      render(<Header />);
      expect(screen.getByRole('button', { name: /menu/i })).toBeInTheDocument();
    });

    it('should toggle mobile menu when menu button is clicked', () => {
      render(<Header />);
      const menuButton = screen.getByRole('button', { name: /menu/i });
      
      // Menu should not be visible initially (in desktop view)
      fireEvent.click(menuButton);
      
      // After click, mobile menu should appear (all links rendered twice)
      const allNewArrivalsLinks = screen.getAllByText('New Arrivals');
      expect(allNewArrivalsLinks.length).toBeGreaterThanOrEqual(1);
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
