import { useContext, createContext, useState } from "react";

const CartContext = createContext();

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("Error ");
  }
  return context;
};

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [numberItemsCart, setNumberItems] = useState(0);

  (() => {
    const jsonDataClient = JSON.parse(window.localStorage.getItem("cartItems"));
    if (jsonDataClient !== null && cart.length === 0) {
      setCart(jsonDataClient);
      setNumberItems(jsonDataClient.length);
    }
  })();

  const loadCart = async (newItem) => {
    const list = [];
    let exist = false;
    cart.map((item) => {
      if (item.id == newItem.id) {
        item.quantity = item.quantity + newItem.quantity;
        exist = true;
      }
      list.push(item);
    });
    if (!exist) {
      list.push(newItem);
    }
    setCart(list);
    setNumberItems(list.length);
    window.localStorage.setItem("cartItems", JSON.stringify(list));
    return true;
  };

  const updateQuantity = (key, num) => {
    const list = cart;
    let exist = false;
    list.map((item) => {
      if (item.id == key) {
        item.quantity = num;
      }
    });
    setCart(list);
    setNumberItems(list.length);
    window.localStorage.setItem("cartItems", JSON.stringify(list));
    return exist;
  };

  const removeCartItem = async (key) => {
    let auxItems = {};
    cart.forEach((element) => {
      if (element.id === key) {
        auxItems = element;
      }
    });
    let item = cart.indexOf(auxItems);
    const newData = cart;
    newData.splice(item, 1);
    if (newData.length === 0) {
      setCart([]);
      setNumberItems(0);
      await window.localStorage.removeItem("cartItems");
      return;
    }
    setCart(newData);
    window.localStorage.setItem("cartItems", JSON.stringify(newData));
    setNumberItems(newData.length);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        loadCart,
        removeCartItem,
        numberItemsCart,
        updateQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
