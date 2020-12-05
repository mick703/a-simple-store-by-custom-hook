import { initStore } from "./store";

const configureStore = () => {
  const actions = {
    TOGGLE_FAV: (currentState, productId) => {
      const productIndex = currentState.products.findIndex(
        (p) => p.id === productId
      );
      console.log(productId);
      const newFavStatus = !currentState.products[productIndex].isFavorite;
      const updatedProducts = [...currentState.products];
      updatedProducts[productIndex] = {
        ...currentState.products[productIndex],
        isFavorite: newFavStatus
      };
      return { products: updatedProducts };
    }
  };
  initStore(actions, {
    products: [
      {
        id: 1000,
        title: "iPhone 11",
        description: "Apple iPhone 11 256GB Black",
        isFavorite: false
      },
      {
        id: 2000,
        title: "iPhone 7",
        description: "Apple iPhone 7 128GB White",
        isFavorite: false
      },
      {
        id: 3000,
        title: "iPhone X",
        description: "Apple iPhone X 256GB Black",
        isFavorite: false
      },
      {
        id: 4000,
        title: "iPhone 12 Pro",
        description: "Apple iPhone 12 Pro 256GB White",
        isFavorite: false
      },
      {
        id: 4001,
        title: "Huawei Mate 30 Pro",
        description: "Huawei Mate 30 Pro 256GB",
        isFavorite: false
      }
    ]
  });
};

export default configureStore;
