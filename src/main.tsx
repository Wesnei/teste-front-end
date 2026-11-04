import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './scss/main.scss';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Elemento raiz não encontrado');
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
