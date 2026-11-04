import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('Econverse Landing Page - Testes de Qualidade', () => {
  it('deve renderizar a aplicação principal corretamente', () => {
    const { container } = render(<App />);
    const mainElement = container.querySelector('main, .App, #root, div');
    expect(mainElement).toBeTruthy();
  });

  it('deve exibir o conteúdo da página', () => {
    const { container } = render(<App />);
    expect(container.textContent).toMatch(/navegue por marcas/i);
  });
});