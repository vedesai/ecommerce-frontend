// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Hero from './Hero';

describe('Hero Component', () => {
  describe('Rendering', () => {
    it('should render the hero section', () => {
      const { container } = render(<Hero />);
      expect(container.querySelector('section')).toBeInTheDocument();
    });

    it('should render the collection label', () => {
      render(<Hero />);
      expect(screen.getByText(/Winter Collection 2025/i)).toBeInTheDocument();
    });

    it('should render the main headline', () => {
      render(<Hero />);
      expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(
        /Timeless Elegance Meets Modern Craftsmanship/i
      );
    });

    it('should render the description text', () => {
      render(<Hero />);
      expect(
        screen.getByText(/Discover our curated collection of premium apparel/i)
      ).toBeInTheDocument();
    });
  });

  describe('CTA Buttons', () => {
    it('should render Shop Now button', () => {
      render(<Hero />);
      expect(screen.getByRole('button', { name: /shop now/i })).toBeInTheDocument();
    });

    it('should render Explore Collections button', () => {
      render(<Hero />);
      expect(
        screen.getByRole('button', { name: /explore collections/i })
      ).toBeInTheDocument();
    });

    it('should render View Style Guide button', () => {
      render(<Hero />);
      expect(
        screen.getByRole('button', { name: /view style guide/i })
      ).toBeInTheDocument();
    });
  });

  describe('Background Image', () => {
    it('should render background image', () => {
      render(<Hero />);
      const image = screen.getByRole('img');
      expect(image).toBeInTheDocument();
      expect(image).toHaveAttribute('alt', 'Fashion collection showcase');
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
