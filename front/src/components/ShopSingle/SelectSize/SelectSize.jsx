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
  // const {size} = props
  const [active, setActive] = useState()
  const { item } = useItem();
  const handleOnClick = (e) => {
    console.log("")
  }
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
        {/* //Estas de aqui deben de ser componentes */}
        {/* { */}
        {/* Hay que arreglar esto para que cuando seleccione
        una talla se deshabilite, pero cuando haga click en otra
        se deshabilite la otra y habilite la primera que toco */}
        <ButtonShop value={item.size} onClick={handleOnClick}></ButtonShop>
        {/* <ButtonShop value={sizes.M} onClick={handleOnClick}></ButtonShop>
         <ButtonShop value={sizes.L} onClick={handleOnClick}></ButtonShop>       
         <ButtonShop value={sizes.XL}onClick={handleOnClick}></ButtonShop> */}

      </ul>
    </div>
  );
};

export default SelectSize;
