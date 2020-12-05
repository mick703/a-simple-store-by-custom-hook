import React from "react";
import "./styles.css";
import { useStore } from "./hooks-store/store";
import ProductItem from "./components/ProductItem";
import FavouriteProducts from "./components/FavouriteProducts";
export default function App() {
  const state = useStore()[0];

  return (
    <div className="App">
      <h2>Product list</h2>
      <ul className="product-list">
        {state.products.map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              id={product.id}
              description={product.description}
            />
          );
        })}
      </ul>

      <h2>Favourite list</h2>
      <FavouriteProducts />
    </div>
  );
}
