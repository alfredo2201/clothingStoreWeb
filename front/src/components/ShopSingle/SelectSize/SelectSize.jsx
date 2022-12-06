import React, { useState } from "react";
import { useItem } from "../../../context/item/itemContext";
import ButtonShop from "./ButtonSize/ButtonShop";

const sizes = {
  S: "S",
  M: "M",
  L: "L",
  XL: "XL",
  XXL: "XXL",
  XXXL: "XXXL",
}

const SelectSize = (props) => {  
  const { item } = useItem();

  return (
    <div className="col-auto">
      <ul className="list-inline pb-3">
        <li className="list-inline-item">
          Size :
          <input
            type="hidden"
            name="product-size"
            id="product-size"
            value="S"
          />
        </li>        
        <ButtonShop value={item.size}></ButtonShop>        
      </ul>
    </div>
  );
};

export default SelectSize;
