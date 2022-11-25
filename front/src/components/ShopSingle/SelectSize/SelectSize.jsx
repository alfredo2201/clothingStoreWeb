import React, { useState } from "react";
import ButtonSize from "./ButtonSize/ButtonShop";

const sizes = {
    S:"S",
    M:"M",
    L:"L",
    XL:"XL",
    XXL:"XXL",
    XXXL:"XXXL",
}

const SelectSize = (props) => {
  const {size} = props
  // const [size, setSize] = useState("")
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
         <ButtonSize value={sizes.S}></ButtonSize>
         <ButtonSize value={sizes.M}></ButtonSize>
         <ButtonSize value={sizes.L}></ButtonSize>       
         <ButtonSize value={sizes.XL}></ButtonSize>
        

        {/* <li className="list-inline-item">
          <span className="btn btn-success btn-size" onClick={() => console.log("Hola que tal")}>{sizes.S}</span>
        </li>
        <li className="list-inline-item">
          <span className="btn btn-success btn-size">{sizes.M}</span>
        </li>
        <li className="list-inline-item">
          <span className="btn btn-success btn-size">{sizes.L}</span>
        </li>
        <li className="list-inline-item">
          <span className="btn btn-success btn-size">{sizes.XL}</span>
        </li> */}
      </ul>
    </div>
  );
};

export default SelectSize;
