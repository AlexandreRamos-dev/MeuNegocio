# 💼 MeuNegocio

**MeuNegocio** é uma aplicação web para gestão de movimentações financeiras de pequenos negócios. Com ela, é possível registrar entradas e saídas, acompanhar cartões de resumo (receitas, despesas e saldo) e gerenciar a lista de movimentações de forma simples e intuitiva.

## 🎯 Objetivo

O objetivo do projeto é oferecer uma ferramenta leve e direta para que autônomos e pequenos empreendedores possam:

- ✅ Registrar movimentações financeiras (entradas e saídas);
- 📊 Visualizar resumos com os totais através de cards de sumário;
- 🗑️ Remover movimentações quando necessário;
- 💾 Manter os dados salvos localmente (persistência via serviço próprio).

## 🛠️ Tecnologias Utilizadas

| Tecnologia | Descrição |
|------------|-----------|
| **React 19** | Biblioteca principal para construção da interface, usando Hooks (`useState`) e componentes funcionais |
| **Vite 8** | Bundler e servidor de desenvolvimento com HMR (Hot Module Replacement) |
| **JavaScript (JSX)** | Linguagem utilizada em todos os componentes |
| **CSS3** | Estilização própria com arquivos CSS organizados por componente (`Header`, `NegocioForm`, `NegocioList`, `Rodape`, etc.) e variáveis globais de estilo |
| **Material UI (@mui)** | Ícones e componentes visuais ([@mui/icons-material](https://www.npmjs.com/package/@mui/icons-material)) |
| **Emotion** | Biblioteca de CSS-in-JS, dependência do Material UI ([@emotion/react](https://www.npmjs.com/package/@emotion/react), [@emotion/styled](https://www.npmjs.com/package/@emotion/styled)) |
| **Oxlint** | Linter rápido para manter a qualidade do código |

## 🧩 Arquitetura

```
src/
├── componentes/     # Componentes de interface
│   ├── Header.jsx       # Cabeçalho da aplicação
│   ├── SummaryCards.jsx # Cards de resumo financeiro
│   ├── NegocioForm.jsx  # Formulário de nova movimentação
│   ├── NegocioList.jsx  # Lista de movimentações
│   └── Rodape.jsx       # Rodapé
├── servicos/        # Camada de serviços (persistência dos dados)
│   └── Servico.js
├── style/           # Folhas de estilo e variáveis CSS
└── App.jsx          # Componente raiz
```

## 👤 Criador

Este projeto foi criado e é mantido por **Andrew Alexandre**.

---

Feito com 💙 por **Andrew Alexandre**
