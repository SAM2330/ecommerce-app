# React E-Commerce Store

A simple e-commerce front-end built with React that showcases products from a public API and lets users manage a shopping cart with live totals.

---

## Features

- Fetches products from [`https://fakestoreapi.com`](https://fakestoreapi.com)  
- Displays products in a responsive grid with images, titles, and prices  
- Adds products to a **global shopping cart** using React Context  
- Shows total number of items in the cart in the navbar  
- Cart view with:
  - Per-item quantity
  - `+` / `–` quantity controls
  - Per-item subtotal and overall total
  - Remove item button  
- Basic **loading state** and **error message** when fetching products

---

## Tech Stack

- **React**  
- **Vite** (build tool and dev server)  
- **JavaScript** with functional components and hooks  
- **Context API** for global cart state  
- **CSS** (centralized in `src/index.css`)

---

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd ecommerce-app
```
2. Install dependencies
```bash
 npm install
```
3. Start the development server
npm run dev
4.  Open in browser

Open the URL printed in the terminal (usually http://localhost:5173) in your web browser.
src/
 Main files
src/App.jsx – Main app layout (navbar, product list, cart)
src/Context/CardContext.jsx – Cart state and logic
src/Components/Navbar.jsx – Header with cart item count
src/Components/ProductList.jsx – Fetches and lists products
src/Components/ProductCard.jsx – Individual product card
src/Components/Cart.jsx – Cart UI and totals
src/index.css – Global styles
