import Cart from "./Components/Cart";
import Navbar from "./Components/Navbar";
import ProductList from "./Components/ProductList";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <ProductList />
      <Cart />
    </div>
  );
}

export default App;
