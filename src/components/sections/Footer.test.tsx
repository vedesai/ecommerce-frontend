// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import Footer from './Footer';

describe('Footer Component', () => {
  describe('Rendering', () => {
    it('should render the footer element', () => {
      render(<Footer />);
      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('should render the brand logo', () => {
      render(<Footer />);
      const logos = screen.getAllByText(/Crest & Thread/i);
      expect(logos.length).toBeGreaterThan(0);
    });

    it('should render brand description', () => {
      render(<Footer />);
      expect(
        screen.getByText(/Crafting timeless apparel/i)
      ).toBeInTheDocument();
    });
  });

  describe('Navigation Sections', () => {
    it('should render Shop section', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /^shop$/i })).toBeInTheDocument();
    });

    it('should render Support section', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /support/i })).toBeInTheDocument();
    });

    it('should render Company section', () => {
      render(<Footer />);
      expect(screen.getByRole('heading', { name: /company/i })).toBeInTheDocument();
    });

    it('should render shop links', () => {
      render(<Footer />);
      // Get by link role to avoid duplicates in navigation
      const shopLinks = screen.getAllByRole('link', { name: /new arrivals/i });
      expect(shopLinks.length).toBeGreaterThan(0);
    });
  });

  describe('Social Links', () => {
    it('should render Instagram link', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /instagram/i })).toBeInTheDocument();
    });

    it('should render Facebook link', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /facebook/i })).toBeInTheDocument();
    });

    it('should render Twitter link', () => {
      render(<Footer />);
      expect(screen.getByRole('link', { name: /twitter/i })).toBeInTheDocument();
    });

    it('should open social links in new tab', () => {
      render(<Footer />);
      const instagramLink = screen.getByRole('link', { name: /instagram/i });
      expect(instagramLink).toHaveAttribute('target', '_blank');
      expect(instagramLink).toHaveAttribute('rel', 'noopener noreferrer');
    });
  });

  describe('Newsletter', () => {
    it('should render newsletter heading', () => {
      render(<Footer />);
      expect(
        screen.getByRole('heading', { name: /join our newsletter/i })
      ).toBeInTheDocument();
    });

    it('should render email input', () => {
      render(<Footer />);
      expect(screen.getByPlaceholderText(/enter your email/i)).toBeInTheDocument();
    });

    it('should render subscribe button', () => {
      render(<Footer />);
      expect(screen.getByRole('button', { name: /subscribe/i })).toBeInTheDocument();
    });

    it('should handle newsletter form submission', () => {
      const consoleSpy = vi.spyOn(console, 'log').mockImplementation(() => {});
      render(<Footer />);
      
      const emailInput = screen.getByPlaceholderText(/enter your email/i);
      const subscribeButton = screen.getByRole('button', { name: /subscribe/i });
      
      fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
      fireEvent.click(subscribeButton);
      
      expect(consoleSpy).toHaveBeenCalledWith('Newsletter subscription:', 'test@example.com');
      consoleSpy.mockRestore();
    });
  });

  describe('Copyright', () => {
    it('should render copyright text', () => {
      render(<Footer />);
      expect(screen.getByText(/© 2025 Crest & Thread/i)).toBeInTheDocument();
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
