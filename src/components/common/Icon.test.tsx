// AI Generated Code by Deloitte + Cursor (BEGIN)
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import Icon from './Icon';

describe('Icon Component', () => {
  describe('Rendering', () => {
    it('should render search icon', () => {
      const { container } = render(<Icon name="search" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render user icon', () => {
      const { container } = render(<Icon name="user" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render cart icon', () => {
      const { container } = render(<Icon name="cart" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render heart icon', () => {
      const { container } = render(<Icon name="heart" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Social Icons', () => {
    it('should render instagram icon', () => {
      const { container } = render(<Icon name="instagram" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render facebook icon', () => {
      const { container } = render(<Icon name="facebook" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render twitter icon', () => {
      const { container } = render(<Icon name="twitter" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Feature Icons', () => {
    it('should render quality icon', () => {
      const { container } = render(<Icon name="quality" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render secure icon', () => {
      const { container } = render(<Icon name="secure" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });

    it('should render shipping icon', () => {
      const { container } = render(<Icon name="shipping" />);
      const svg = container.querySelector('svg');
      expect(svg).toBeInTheDocument();
    });
  });

  describe('Props', () => {
    it('should apply custom size', () => {
      const { container } = render(<Icon name="search" size={32} />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '32');
      expect(svg).toHaveAttribute('height', '32');
    });

    it('should apply custom className', () => {
      const { container } = render(<Icon name="search" className="custom-class" />);
      const span = container.querySelector('span');
      expect(span).toHaveClass('custom-class');
    });

    it('should use default size of 20', () => {
      const { container } = render(<Icon name="search" />);
      const svg = container.querySelector('svg');
      expect(svg).toHaveAttribute('width', '20');
      expect(svg).toHaveAttribute('height', '20');
    });
  });
});
// AI Generated Code by Deloitte + Cursor (END)
