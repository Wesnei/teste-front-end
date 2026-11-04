# 🛒 Econverse E-commerce - Front-End Landing Page

> Projeto de uma Single Page Application (SPA) responsiva desenvolvida como vitrine de e-commerce, construída com foco em boas práticas de engenharia de software, arquitetura de componentes e testes automatizados.

---

## 🚀 Tecnologias e Ferramentas

Este projeto foi desenvolvido utilizando uma stack moderna e robusta de front-end:

* **Core:** [React](https://react.dev/) + [TypeScript](https://www.typescriptlang.org/)
* **Build Tool:** [Vite](https://vitejs.dev/)
* **Estilização:** [Sass (SCSS)](https://sass-lang.com/) com compilador moderno (`modern-compiler`)
* **Testes Automatizados:** [Vitest](https://vitest.dev/) + [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) + [JSDOM](https://github.com/jsdom/jsdom)
* **Gerenciamento de Pacotes:** npm

---

## 📂 Arquitetura e Principais Funcionalidades

* **Single Page Application (SPA):** Navegação fluida e centralizada na landing page principal.
* **Seção "Navegue por marcas":** Componentes circulares refinados (*pixel-perfect* em relação ao layout do Figma), totalmente limpos, sem bordas indesejadas e com sombras suaves de elevação.
* **Vitrine de Produtos:** Listagem dinâmica de itens com suporte a interações e modais.
* **Responsividade Completa:** Layout adaptável para diferentes resoluções de tela (mobile, tablet e desktop).
* **Proxy de Desenvolvimento:** Configuração integrada no Vite para direcionamento de requisições de API (`/econverse-api`) evitando problemas de CORS.

---

## ⚙️ Como Executar o Projeto Localmente

Siga os passos abaixo para rodar o projeto na sua máquina:

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Wesnei/teste-front-end.git
   cd teste-front-end

```

2. Instale as dependências:
npm install --legacy-peer-deps

```


3. **Inicie o servidor de desenvolvimento:**
```bash
npm run dev

```


O projeto estará acessível em `http://localhost:5173` (ou a porta indicada no terminal).

---

## 🧪 Executando os Testes Automatizados

O projeto conta com uma suíte de testes unitários configurada com **Vitest** e **Testing Library** para validar a renderização da aplicação e integridade dos componentes da página.

Para rodar os testes em modo de execução única (CLI/CI):

```bash
npm run test:run

```

Para rodar os testes em modo interativo (observação em tempo real):

```bash
npm run test

```

---

## 🛠️ Configuração do Build de Produção

Para gerar os arquivos otimizados para produção:

```bash
npm run build

```

Para pré-visualizar a build localmente:

```bash
npm run preview

```

---

## 👨‍💻 Autor

Desenvolvido com foco em qualidade de código, arquitetura limpa e alta performance.

