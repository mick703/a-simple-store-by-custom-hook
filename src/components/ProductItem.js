import React from "react";
import { useStore } from "../hooks-store/store";

const ProductItem = (props) => {
  const dispatch = useStore()[1];

  const toggleFavouriteHandler = () => {
    console.log(`product_id: ${props.id}`);
    dispatch("TOGGLE_FAV", props.id);
  };

  return (
    <li className="product-item" key={props.id}>
      <div className="description">{props.description}</div>
      <div className="action">
        <button onClick={toggleFavouriteHandler}>Toggle Favourite</button>
      </div>
    </li>
  );
};

export default ProductItem;
