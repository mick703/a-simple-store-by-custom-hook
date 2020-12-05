import React from "react";
import { useStore } from "../hooks-store/store";
import ProductItem from "./ProductItem";

const FavouriteProducts = () => {
  const state = useStore()[0];

  console.log(state);
  return (
    <ul className="product-list">
      {state.products
        .filter((product) => product.isFavorite === true)
        .map((product) => {
          return (
            <ProductItem
              key={product.id}
              title={product.title}
              description={product.description}
              id={product.id}
            />
          );
        })}
    </ul>
  );
};

export default FavouriteProducts;
